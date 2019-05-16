import { ADD_LIST, DRAG_HAPPENED } from './types'

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
  draggableId
) => {
  return {
    type: DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId
    }
  }
}
