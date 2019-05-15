import React from 'react'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

const ProjectCard = ({ text }) => {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 0
  }
}

export default ProjectCard
