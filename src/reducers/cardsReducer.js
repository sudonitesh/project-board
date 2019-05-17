import { ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions'

let cardID = 0

const initialState = {}

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      const { text, listID } = action.payload

      cardID += 1
      const newCard = {
        text,
        id: `card-${cardID}`,
        list: listID
      }

      return { ...state, [`card-${cardID}`]: newCard }
    }
    case EDIT_CARD: {
      const { id, newText } = action.payload
      const card = state[id]
      card.text = newText
      return { ...state, [`card-${id}`]: card }
    }

    case DELETE_CARD: {
      const { id } = action.payload
      const newState = state
      delete newState[id]
      return newState
    }
    default:
      return state
  }
}

export default cardsReducer
