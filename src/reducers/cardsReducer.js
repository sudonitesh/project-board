import { ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions'

const initialState = {
  'card-0': {
    text: 'First Card',
    id: `card-0`,
    list: 'list-0',
  },
}

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      const { text, listID, id } = action.payload

      const newCard = {
        text,
        id: `card-${id}`,
        list: listID,
      }

      return { ...state, [`card-${id}`]: newCard }
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
