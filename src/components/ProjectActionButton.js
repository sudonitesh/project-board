import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import { Card, Button } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';

class ProjectActionButton extends Component {
  state = {
    formOpen: false,
    text: ""
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }
  closeForm = () => {
    this.setState({
      formOpen: false
    })
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  renderAddBtn = () => {
    const { list } = this.props
    const btnText = list ? 'Add another list' : 'Add another card'
    const btnTextOpacity = list ? 1 : 0.5
    const btnTextColor = list ? 'white' : 'inherit'
    const btnTextBgColor = list ? 'rgba(0,0,0,.15)' : 'inherit'

    let buttonTextStyle = {
      opacity: btnTextOpacity,
      color: btnTextColor,
      backgroundColor: btnTextBgColor
    }
    return (
      <div
        style={{ ...styles.openFormBtnGroup, ...buttonTextStyle }}
        onClick={this.openForm}
      >
        <Icon color="action">add</Icon>
        <p>{btnText}</p>
      </div>
    )
  }

  renderForm = () => {
    const {list} = this.props
    const placeholder = list ? "Enter list title" : "enter title for card"
    const btnTitle = list ? "Add list" : "Add card"

    return(
      <div>
        <Card style={{
          minHeight: 80,
          minWidth: 272,
          padding: "6px 8px 2px"
        }}>
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden"
            }}
          />
        </Card>
        <div style={styles.formBtnGroup}>
          <Button variant="contained" style={{color: "white", backgroundColor: "#5aac44"}}>
            {btnTitle}
          </Button>
          <Icon style={{marginLeft: "8px", cursor: "pointer"}}>close</Icon>
        </div>
      </div>
    )
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddBtn()
  }
}

const styles = {
  openFormBtnGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formBtnGroup: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8
  }
}

export default ProjectActionButton
