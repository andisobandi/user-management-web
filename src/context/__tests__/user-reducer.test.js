import { userReducer } from "../user-reducer";

describe("userReducer", () => {
  const initialState = {
    users: [],
    selectedUser: null,
    loading: false,
    mode: null,
  };

  const mockUsers = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
  ];

  it("returns initial state for unknown action", () => {
    const state = userReducer(initialState, { type: "UNKNOWN" });
    expect(state).toEqual(initialState);
  });

  it("handles SET_USERS", () => {
    const state = userReducer(initialState, {
      type: "SET_USERS",
      payload: mockUsers,
    });

    expect(state.users).toEqual(mockUsers);
  });

  it("handles SELECT_USER", () => {
    const state = userReducer(initialState, {
      type: "SELECT_USER",
      payload: mockUsers,
    });

    expect(state.selectedUser).toEqual(mockUsers);
  });

  it("handles SET_MODE", () => {
    const state = userReducer(initialState, {
      type: "SET_MODE",
      payload: "add",
    });

    expect(state.mode).toBe("add");
  });

  it("handles ADD_USER", () => {
    const user = { id: 1, name: "John" };

    const state = userReducer(
      { ...initialState, users: [{ id: 2 }] },
      {
        type: "ADD_USER",
        payload: user,
      }
    );

    expect(state.users[0]).toEqual(user);
    expect(state.users).toHaveLength(2);
  });

  it("handles UPDATE_USER", () => {
    const state = userReducer(
      {
        ...initialState,
        users: [
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
        ],
      },
      {
        type: "UPDATE_USER",
        payload: { id: 2, name: "Jane Updated" },
      }
    );

    expect(state.users).toEqual([
      { id: 1, name: "John" },
      { id: 2, name: "Jane Updated" },
    ]);
  });

  it("handles DELETE_USER", () => {
    const state = userReducer(
      {
        ...initialState,
        users: [{ id: 1 }, { id: 2 }],
      },
      {
        type: "DELETE_USER",
        payload: 1,
      }
    );

    expect(state.users).toEqual([{ id: 2 }]);
  });

  it("handles SET_LOADING", () => {
    const state = userReducer(initialState, {
      type: "SET_LOADING",
      payload: true,
    });

    expect(state.loading).toBe(true);
  });
});
