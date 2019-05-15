import React from 'react'

import ProjectCard from './ProjectCard'

const ProjectList = ({ title, cards }) => {
  console.log(title)
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map(card => (
        <ProjectCard key={card.id} text={card.text} />
      ))}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8
  }
}

export default ProjectList
