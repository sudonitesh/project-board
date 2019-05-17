import { ADD_CARD, EDIT_CARD } from './types'

export const addCard = (listID, text) => {
  return {
    type: ADD_CARD,
    payload: { listID, text }
  }
}

export const editCard = (id, listId, newText) => {
  return {
    type: EDIT_CARD,
    payload: {id, listId, newText}
  }
}