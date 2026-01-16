export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SELECT_USER":
      return { ...state, selectedUser: action.payload };
    case "SET_MODE":
      return { ...state, mode: action.payload };
    case "ADD_USER":
      return { ...state, users: [action.payload, ...state.users] };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((u) => (u.id === action.payload.id ? action.payload : u)),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
