import React from 'react'

import ProjectCard from './ProjectCard'
import ProjectActionButton from './ProjectActionButton'

const ProjectList = ({ title, cards }) => {
  console.log(cards)
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map(card => (
        <ProjectCard key={card.id} text={card.text} />
      ))}
      <ProjectActionButton/>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
}

export default ProjectList
