import React from 'react'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const ProjectCard = ({ title_card }) => {
  return (
    <div>
      <Card>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
      </Card>
    </div>
    
  )
}

const styles = {
  container: {
    backgroundColor: 'cyan',
    width: 270
  }
}

export default ProjectCard
