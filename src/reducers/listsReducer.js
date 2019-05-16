import { ADD_LIST, ADD_CARD, DRAG_HAPPENED } from '../actions'

let listID = 2
let cardID = 6

const initialState = [
  {
    title: 'title 0',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'card 0'
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
    case ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      }
      listID += 1
      return [...state, newList]

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
        } else {
          return list
        }
      })

      return newState
    }

    case DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart
      } = action.payload

      const newState = [...state]
      if (droppableIdStart === droppableIdEnd) {
        // in the same list
        const list = state.find(list => droppableIdStart === list.id)

        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      return newState

    default:
      return state
  }
}

export default listsReducer
