import React, { PureComponent } from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import ProjectCreate from './ProjectCreate'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { sort } from '../actions'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Switch from 'react-switch'

require('./App.css')

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class App extends PureComponent {
  state = {
    ThemeChecked: false,
    theme: createMuiTheme({
      palette: { type: 'light' },
      typography: { useNextVariants: true }
    }),
    sunIcon: {
      color: '#fadf0f',
      fontSize: '25px'
    },
    moonIcon: {
      color: '#fff',
      fontSize: '20px'
    }
  }

  handleThemeChange = () => {
    this.setState({ ThemeChecked: !this.state.ThemeChecked }, () => {
      if (this.state.ThemeChecked) {
        this.setState({
          theme: createMuiTheme({
            palette: { type: 'dark' },
            typography: { useNextVariants: true }
          }),
          sunIcon: {
            color: '#fff',
            fontSize: '20px'
          },
          moonIcon: {
            color: '#fadf0f',
            fontSize: '25px'
          }
        })
      } else {
        this.setState({
          theme: createMuiTheme({
            palette: { type: 'light' },
            typography: { useNextVariants: true }
          }),
          sunIcon: {
            color: '#fadf0f',
            fontSize: '25px'
          },
          moonIcon: {
            color: '#fff',
            fontSize: '20px'
          }
        })
      }
    })
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  }

  render() {
    const { lists, listOrder, cards } = this.props
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <CssBaseline />
        <div>
          <AppBar position="fixed" style={{ marginBottom: '10px' }}>
            <Toolbar>
              <IconButton
                style={styles.menuButton}
                color="inherit"
                aria-label="Menu"
              />
              <Typography variant="h6" color="inherit" style={styles.grow}>
              <div className="wrapper-button">
                <span className="coracao um">♥</span>
                <span className="coracao dois">♥</span>
                <div className="button noselect">Project Board</div>
              </div>
              </Typography>
              <span style={{ marginRight: '10px' }}>
                <i style={this.state.sunIcon} className="far fa-sun" />
              </span>
              <Switch
                onChange={this.handleThemeChange}
                checked={this.state.ThemeChecked}
                handleDiameter={22}
                offColor="#585858" // fadf0f
                onColor="#585858" // 545DBC
                offHandleColor="#fce903" // 3F51B5
                onHandleColor="#fce903" // 272727
                height={32}
                width={60}
                uncheckedIcon={false}
                checkedIcon={false}
              />
              <span style={{ marginLeft: '10px' }}>
                <i style={this.state.moonIcon} className="far fa-moon" />
              </span>
            </Toolbar>
          </AppBar>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable
              droppableId="all-lists"
              direction="horizontal"
              type="list"
            >
              {provided => (
                <ListsContainer
                  style={{ margin: '25px' }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {listOrder.map((listID, index) => {
                    const list = lists[listID]
                    if (list) {
                      const listCards = list.cards.map(cardID => cards[cardID])

                      return (
                        <ProjectList
                          listID={list.id}
                          key={list.id}
                          title={list.title}
                          cards={listCards}
                          index={index}
                        />
                      )
                    }
                  })}
                  {provided.placeholder}
                  <ProjectCreate list />
                </ListsContainer>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
  listOrder: state.listOrder,
  cards: state.cards
})

export default connect(mapStateToProps)(App)
