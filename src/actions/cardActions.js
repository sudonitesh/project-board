import { ADD_CARD, EDIT_CARD, DELETE_CARD } from './types'

export const addCard = (listID, text) => {
  return {
    type: ADD_CARD,
    payload: { listID, text }
  }
}

export const editCard = (id, listID, newText) => {
  return {
    type: EDIT_CARD,
    payload: {id, listID, newText}
  }
}

export const deleteCard = (id, listID) => {
  return {
    type: DELETE_CARD,
    payload: {id, listID}
  }
}