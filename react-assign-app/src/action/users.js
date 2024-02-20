export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const EDIT_USER = 'DELETE_USER';
export const DELETE_USER = 'DELETE_USER';


export const fetchUsers = (users) => ({ type: FETCH_USERS, payload: users });
export const createUser = (user) => ({ type: CREATE_USER, payload: user });
export const updateUser = (user) => ({ type: UPDATE_USER, payload: user });
export const editUser = (user) => ({ type: EDIT_USER, payload: user });
export const deleteUser = (userId) => ({ type: DELETE_USER, payload: userId });
