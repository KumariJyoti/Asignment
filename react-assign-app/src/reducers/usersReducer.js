import { FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER, EDIT_USER } from '../action/users';

const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return [...action.payload];
    case CREATE_USER:
      return [...state, action.payload];
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    case EDIT_USER:
      return state.map((user,index) =>
        user.id === action.payload.id ? state.users[index] = action.payload : user
      );
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
}
