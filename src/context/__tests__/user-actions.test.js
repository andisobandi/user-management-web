import { API } from "@services/api";
import { fetchUsers, postUser, putUser, deleteUser } from "../user-actions";

jest.mock("@services/api", () => ({
  API: {
    users: jest.fn(),
    createUser: jest.fn(),
    updateUser: jest.fn(),
  },
}));

describe("user-actions", () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    jest.clearAllMocks();
  });

  describe("fetchUsers", () => {
    it("dispatches users and loading states", async () => {
      const users = [{ id: 1 }];
      API.users.mockResolvedValue(users);

      await fetchUsers(dispatch);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: "SET_LOADING",
        payload: true,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: "SET_USERS",
        payload: users,
      });

      expect(dispatch).toHaveBeenLastCalledWith({
        type: "SET_LOADING",
        payload: false,
      });
    });
  });

  describe("postUser", () => {
    it("dispatches ADD_USER and closes mode", async () => {
      const user = { id: 1, name: "John" };
      API.createUser.mockResolvedValue(user);

      await postUser(dispatch, { name: "John" });

      expect(dispatch).toHaveBeenCalledWith({
        type: "ADD_USER",
        payload: user,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: "SET_MODE",
        payload: null,
      });
    });
  });

  describe("putUser", () => {
    it("dispatches UPDATE_USER and resets state", async () => {
      const updated = { id: 1, name: "Updated" };
      API.updateUser.mockResolvedValue(updated);

      await putUser(dispatch, { name: "Updated" }, { id: 1 });

      expect(dispatch).toHaveBeenCalledWith({
        type: "UPDATE_USER",
        payload: updated,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: "SELECT_USER",
        payload: null,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: "SET_MODE",
        payload: null,
      });
    });
  });

  describe("deleteUser", () => {
    it("dispatches DELETE_USER and resets state", () => {
      deleteUser(dispatch, 1);

      expect(dispatch).toHaveBeenCalledWith({
        type: "DELETE_USER",
        payload: 1,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: "SELECT_USER",
        payload: null,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: "SET_MODE",
        payload: null,
      });
    });
  });
});
