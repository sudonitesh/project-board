import { ADD_LIST, DRAG_HAPPENED, EDIT_LIST_TITLE, DELETE_LIST } from './types'

export const addList = title => {
  return {
    type: ADD_LIST,
    payload: title
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type
    }
  }
}

export const editTitle = (listID, newTitle) => {
  return {
    type: EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle
    }
  }
}

export const deleteList = (listID) => {
  return {
    type: DELETE_LIST,
    payload: {
      listID
    }
  }
}