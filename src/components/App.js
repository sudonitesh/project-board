import React, { Component } from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import ProjectActionButton from './ProjectActionButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { sort } from '../actions'
class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }
    if (type === 'list') {
      return
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  }

  render() {
    const { lists } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h2>Hello Youtube</h2>
              <div style={styles.listsContainer}>
                {lists.map((list, index) => (
                  <ProjectList
                    listID={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
                <ProjectActionButton list />
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
