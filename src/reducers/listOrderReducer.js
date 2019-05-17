import { ADD_LIST, DRAG_HAPPENED, DELETE_LIST } from '../actions'
let listID = 0
const initialState = ['list-0']

const listOrderReducer = (state = initialState, action) => {
  console.log('listorder', state)
  switch (action.type) {
    case ADD_LIST: {
      listID += 1
      const newID = `list-${listID}`
      return [...state, newID]
    }
    case DRAG_HAPPENED: {
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type
      } = action.payload
      const newState = state

      // draggin lists around
      if (type === 'list') {
        const pulledOutList = newState.splice(droppableIndexStart, 1)
        newState.splice(droppableIndexEnd, 0, ...pulledOutList)
        return newState
      }
      return state
    }
    case DELETE_LIST: {
      const { listID } = action.payload
      return state.filter(id => id !== listID)
    }
    default:
      return state
  }
}

export default listOrderReducer
