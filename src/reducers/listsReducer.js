const initialState = [
  {
    id: 0,
    title: 'title 1',
    cards: [
      {
        id: 0,
        text: 'text 1'
      },
      {
        id: 1,
        text: 'text 2'
      }
    ]
  },
  {
    id: 1,
    title: 'title 2',
    cards: [
      {
        id: 0,
        text: 'text 1'
      },
      {
        id: 1,
        text: 'text 2'
      },
      {
        id: 2,
        text: 'text 3'
      }
      
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default listsReducer