import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import ProjectForm from "./ProjectForm";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
`;

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
`;

const ProjectCard = ({ text, id, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setCardText] = useState(text);

  const closeForm = e => {
    console.log("clicked");
    setIsEditing(false);
  };

  const saveCard = () => {
    // run redux action
  };

  const renderEditForm = () => {
    return (
      <ProjectForm
        text={cardText}
        setText={setCardText}
        closeForm={closeForm}
        actionBtnClicked={saveCard}
      />
    );
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <Card>
              <EditButton onClick={() => setIsEditing(true)} fontSize="small">edit</EditButton>
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
};

export default ProjectCard;
