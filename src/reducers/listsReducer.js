import {
  ADD_LIST,
  ADD_CARD,
  DRAG_HAPPENED,
  EDIT_CARD,
  DELETE_CARD,
  EDIT_LIST_TITLE,
  DELETE_LIST
} from '../actions'

let listID = 2
let cardID = 6

const initialState = [
  {
    title: 'title 0',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'card 0 dsgrefs grflskvghjsfkd vnjksdbvjk sfdvjkbjisd vjkwdsbv cjkds vbjksdvjkdsfbvijds vjkxsdjk '
      },
      {
        id: `card-${1}`,
        text: 'card 1'
      }
    ]
  },
  {
    title: 'title 1',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'card 2'
      },
      {
        id: `card-${3}`,
        text: 'card 03'
      },
      {
        id: `card-${4}`,
        text: 'card 4'
      },
      {
        id: `card-${5}`,
        text: 'card 5'
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      }
      listID += 1
      return [...state, newList]
    }
    case ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      }
      cardID += 1

      console.log('action received', action)

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        }
        return list
      })

      return newState
    }

    case DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type
      } = action.payload

      const newState = [...state]

      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1)
        newState.splice(droppableIndexEnd, 0, ...list)
        return newState
      }
      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }
      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state.find(list => droppableIdStart === list.id)
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1)
        // find the list where the drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id)
        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }
      return newState
    }
    case EDIT_CARD: {
      const { id, listID, newText } = action.payload
      return state.map(list => {
        if (list.id === listID) {
          const newCards = list.cards.map(card => {
            if (card.id === id) {
              card.text = newText
              return card
            }
            return card
          })
          return { ...list, cards: newCards }
        }
        return list
      })
    }
    case DELETE_CARD: {
      const { id, listID } = action.payload
      return state.map(list => {
        if (list.id === listID) {
          const newCards = list.cards.filter(card => card.id !== id)
          return { ...list, cards: newCards }
        } else {
          return list
        }
      })
    }
    case EDIT_LIST_TITLE: {
      const { listID, newListTitle } = action.payload
      return state.map(list => {
        if (list.id === listID) {
          list.title = newListTitle
          return list
        }
        return list
      })
    }
    case DELETE_LIST: {
      const {listID} = action.payload
      return state.filter(list => list.id !== listID)
    }
    default:
      return state
  }
}

export default listsReducer
