import React,{useReducer} from 'react'
const paginationReducer = (state , action) =>{
    switch (action.type) {
        case 'SET_PAGE':
          return { ...state, currentPage: action.page };
        default:
          return state;
      }
}
const Paganition = () => {
    const [pagination , dispatch] =useReducer(paginationReducer ,{currentPage : 1})
  return (
    <div>
       <p>Current Page: {pagination.currentPage}</p>
      <button onClick={() => dispatch({ type: 'SET_PAGE', page: pagination.currentPage - 1 })}>
        Previous Page
      </button>
      <button onClick={() => dispatch({ type: 'SET_PAGE', page: pagination.currentPage + 1 })}>
        Next Page
      </button>
    </div>
  )
}

export default Paganition
