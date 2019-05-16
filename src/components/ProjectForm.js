import React from 'react'
import Textarea from 'react-textarea-autosize'
import { Card, Button, Icon } from '@material-ui/core'

const ProjectForm = props => {
  const { list, text = '', setText, actionBtnClicked, closeForm } = props
  const placeholder = list ? 'enter list title' : 'enter card title'
  const buttonTitle = 'save'

  const styles = {
    formContainer: {
      width: list ? '300px' : '100%',
      marginBottom: '8px'
    },
    cardContainer: {
      minHeight: '85px',
      padding: '6px 8px 2px'
    },
    textArea: {
      resize: 'none',
      width: '100%',
      overflow: 'hidden',
      outline: 'none',
      border: 'none'
    },
    buttonContainer: {
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '8px'
    },
    buttonStyle: {
      color: 'white',
      background: '#5aac44'
    },
    iconStyle: {
      marginLeft: '8px',
      cursor: 'pointer'
    }
  }

  return (
    <div style={styles.formContainer}>
      <Card style={styles.cardContainer}>
        <Textarea
          placeholder={placeholder}
          autoFocus
          value={text}
          style={styles.textArea}
          onBlur={closeForm}
          onChange={e => setText(e.target.value)}
        />
      </Card>
      <div style={styles.buttonContainer}>
        <Button
          variant="contained"
          style={styles.buttonStyle}
          children={buttonTitle}
        />
        >
        <Icon onMouseDown={closeForm} style={styles.iconStyle}>
          close
        </Icon>
      </div>
    </div>
  )
}

export default ProjectForm
