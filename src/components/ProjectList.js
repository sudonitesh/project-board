import React from 'react'

import ProjectCard from './ProjectCard'

const ProjectList = ({title_list}) => {
  return (
    <div style={styles.container}>
      <h3>{title_list}</h3>
      <ProjectCard title_card="card"/>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "grey",
    width:300
  }
}

export default ProjectList
