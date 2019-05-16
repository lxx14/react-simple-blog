const initialState = {
  comments: [],
};

export default function(state = initialState, action) {

  switch(action.type) {
    case "SET_COMMENTS": 
    return {
      ...state,
      comments: [...action.data]
    }
    case "ADD_COMMENT": 
    return {
      ...state,
      comments: [...state.comments, action.item]
    }
    default: return state;
  }
};