import React from "react";
import { screen } from "@testing-library/react";

import { fetchUsers } from "@context/user-actions";
import { renderWithUserContext } from "@test-utils/render-with-user-context";
import { UserList } from "../user-list";

jest.mock("@context/user-actions");

jest.mock("@components/compositions/ui/user-card", () => ({
  UserCardEmpty: () => <div data-testid="empty-state">Empty</div>,
  UserCardLoading: () => <div data-testid="loading-card">Loading</div>,
  UserCardContainer: ({ children }) => <div>{children}</div>,
}));

jest.mock("../user-list-item", () => ({
  UserListItem: ({ user }) => <div data-testid="user-item">{user.name}</div>,
}));

describe("UserList", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state when loading is true", () => {
    renderWithUserContext(<UserList />, {
      contextOverrides: {
        state: { loading: true },
      },
    });

    expect(screen.getAllByTestId("loading-card")).toHaveLength(3);
  });

  it("renders empty state when users is empty and not loading", () => {
    renderWithUserContext(<UserList />);
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  it("renders list of users when data exists", () => {
    renderWithUserContext(<UserList />, {
      contextOverrides: {
        state: {
          users: [
            { id: "1", name: "John" },
            { id: "2", name: "Jane" },
          ],
        },
      },
    });

    expect(screen.getAllByTestId("user-item")).toHaveLength(2);
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
  });

  it("calls fetchUsers on mount", () => {
    const { context } = renderWithUserContext(<UserList />);
    expect(fetchUsers).toHaveBeenCalledWith(context.dispatch);
  });
});
