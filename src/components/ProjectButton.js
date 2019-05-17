import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const ProjectButton = ({ children, onClick }) => {
  const StyledButton = styled(Button)`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      background: #5aac44 !important;
    }
    &:active {
      box-shadow: none !important;
    }

    && {
      color: white;
      background: #5aac44;
    }
  `

  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  )
}

export default ProjectButton
