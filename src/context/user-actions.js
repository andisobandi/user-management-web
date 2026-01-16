import { API } from "@services/api";

export const fetchUsers = async (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });

  try {
    const data = await API.users();
    dispatch({ type: "SET_USERS", payload: data });
  } catch (error) {
    throw new Error(error);
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
};

export const postUser = async (dispatch, payload) => {
  try {
    const data = await API.createUser(payload);
    dispatch({ type: "ADD_USER", payload: data });
  } catch (error) {
    throw new Error(error);
  } finally {
    dispatch({ type: "SET_MODE", payload: null });
  }
};

export const putUser = async (dispatch, payload, user) => {
  try {
    const data = await API.updateUser(user, payload);
    dispatch({ type: "UPDATE_USER", payload: data });
  } catch (error) {
    throw new Error(error);
  } finally {
    dispatch({ type: "SET_MODE", payload: null });
  }
};
