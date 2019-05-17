import React, { Component, PureComponent } from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import ProjectCreate from './ProjectCreate'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { sort } from '../actions'

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

// TODO: Fix performance issue

class App extends PureComponent {
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
    const { lists } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((list, index) => (
                <ProjectList
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <ProjectCreate list />
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
