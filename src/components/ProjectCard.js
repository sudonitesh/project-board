import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { connect } from 'react-redux'
import ProjectForm from './ProjectForm'
import { editCard, deleteCard } from '../actions'
import ProjectButton from './ProjectButton'

const ProjectCard = React.memo(({ text, id, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setText] = useState(text)

  const CardContainer = styled.div`
    margin: 0 0 8px 0;
    position: relative;
    max-width: 100%;
    word-wrap: break-word;
  `
  const StyledCard = styled(Card)`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    &:active {
      box-shadow: none !important;
    }
  `
  const StyledTypography = styled(Typography)`
    display: inline-block !important;
    cursor: pointer;
    padding-right: 13px;
  `

  const EditButton = styled(Icon)`
    position: absolute;
    display: none;
    right: 5px;
    top: 5px;
    opacity: 0.5;
    ${CardContainer}:hover & {
      display: block;
      cursor: pointer;
    }
    &:hover {
      opacity: 0.8;
    }
  `

  const DeleteButton = styled(Icon)`
    position: absolute;
    display: none;
    right: 5px;
    bottom: 5px;
    opacity: 0.5;
    ${CardContainer}:hover & {
      display: block;
      cursor: pointer;
    }
    &:hover {
      opacity: 0.8;
      color: red;
    }
  `

  const closeForm = e => {
    setIsEditing(false)
  }

  const handleChange = e => {
    setText(e.target.value)
  }

  const handledeleteCard = e => {
    dispatch(deleteCard(id, listID))
  }

  const saveCard = e => {
    e.preventDefault()

    dispatch(editCard(id, listID, cardText))
    setIsEditing(false)
  }

  const renderEditForm = () => {
    return (
      <ProjectForm
        text={cardText}
        onChange={handleChange}
        closeForm={closeForm}
      >
        <ProjectButton onClick={saveCard}>Save</ProjectButton>
      </ProjectForm>
    )
  }

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <StyledCard>
              <EditButton
                onMouseDown={() => setIsEditing(true)}
                fontSize="small"
              >
                edit
              </EditButton>
              <DeleteButton fontSize="small" onMouseDown={handledeleteCard}>
                delete
              </DeleteButton>
              <CardContent>
                <StyledTypography onClick={() => setIsEditing(true)}>
                  {text}
                </StyledTypography>
              </CardContent>
            </StyledCard>
          </CardContainer>
        )}
      </Draggable>
    )
  }

  return isEditing ? renderEditForm() : renderCard()
})

export default connect()(ProjectCard)
