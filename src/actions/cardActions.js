import { ADD_CARD, EDIT_CARD, DELETE_CARD } from './types'
import uuid from 'uuidv4'

export const addCard = (listID, text) => {
  const id = uuid()
  return {
    type: ADD_CARD,
    payload: { id, listID, text },
  }
}

export const editCard = (id, listID, newText) => {
  return {
    type: EDIT_CARD,
    payload: { id, listID, newText },
  }
}

export const deleteCard = (id, listID) => {
  return {
    type: DELETE_CARD,
    payload: { id, listID },
  }
}
