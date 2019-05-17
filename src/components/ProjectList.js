import React from 'react'

import ProjectCard from './ProjectCard'
import ProjectCreate from './ProjectCreate'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const ProjectList = React.memo(({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={styles.container}
              >
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <ProjectCard
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                    listID={listID}
                  />
                ))}
                {provided.placeholder}
                <ProjectCreate listID={listID} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
})

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    margin: '0 8px 0 0'
  }
}

export default ProjectList
