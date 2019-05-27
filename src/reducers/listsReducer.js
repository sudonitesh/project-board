import {
  ADD_LIST,
  ADD_CARD,
  DRAG_HAPPENED,
  DELETE_CARD,
  EDIT_LIST_TITLE,
  DELETE_LIST,
} from '../actions'

const initialState = {
  'list-0': {
    id: 'list-0',
    cards: ['card-0'],
    title: 'First List',
  },
}

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const { title, id } = action.payload

      const newList = {
        title: title,
        cards: [],
        id: `list-${id}`,
      }

      const newState = { ...state, [`list-${id}`]: newList }

      return newState
    }
    case ADD_CARD: {
      const { listID, id } = action.payload
      const list = state[listID]
      list.cards.push(`card-${id}`)
      return { ...state, [listID]: list }
    }

    case DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type,
      } = action.payload

      if (type === 'list') {
        return state
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart]
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
        return { ...state, [droppableIdStart]: list }
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart]
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1)
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd]

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd,
        }
      }
      return state
    }

    case DELETE_CARD: {
      const { id, listID } = action.payload
      const list = state[listID]
      const newCards = list.cards.filter(cardID => cardID !== id)

      return { ...state, [listID]: { ...list, cards: newCards } }
    }

    case EDIT_LIST_TITLE: {
      const { listID, newTitle } = action.payload
      const list = state[listID]
      list.title = newTitle
      return { ...state, [listID]: list }
    }
    case DELETE_LIST: {
      const { listID } = action.payload
      const newState = state
      delete newState[listID]
      return newState
    }
    default:
      return state
  }
}

export default listsReducer
