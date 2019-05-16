import React from 'react'

import ProjectCard from './ProjectCard'
import ProjectActionButton from './ProjectActionButton'
import { Droppable } from 'react-beautiful-dnd'

const ProjectList = ({ title, cards, listID }) => {
  console.log(cards)
  return (
    <div style={styles.container}>
      <h4>{title}</h4>

      <Droppable droppableId={String(listID)}>
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <ProjectCard
                key={card.id}
                text={card.text}
                id={card.id}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <ProjectActionButton listID={listID} />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: '100%',
    marginRight: 8
  }
}

export default ProjectList
