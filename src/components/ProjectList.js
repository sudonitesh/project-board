import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { editTitle } from '../actions'
import ProjectCard from './ProjectCard'
import ProjectCreate from './ProjectCreate'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`
const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`
const StyledTitle = styled.h3`
display: inline-block;
&:hover {
  cursor: pointer;
}
`
const ProjectList = ({ title, cards, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [listTitle, setListTitle] = useState(title)

  const renderEditInput = () => {
    return (
      <StyledInput
        type="text"
        value={listTitle}
        onChange={handleChange}
        autoFocus
        onFocus={handleFocus}
        onBlur={handleFinishEditing}
      />
    )
  }
  const handleFocus = e => {
    e.target.select()
  }

  const handleChange = e => {
    e.preventDefault()
    setListTitle(e.target.value)
  }

  const handleFinishEditing = e => {
    setIsEditing(false)
    dispatch(editTitle(listID, listTitle))
  }

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={{textAlign: "center"}}>
                {isEditing ? (
                  renderEditInput()
                ) : (
                  <StyledTitle onClick={() => setIsEditing(true)}>{listTitle}</StyledTitle>
                )}

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
        </ListContainer>
      )}
    </Draggable>
  )
}

export default connect()(ProjectList)
