import React from "react";
import { screen, fireEvent } from "@testing-library/react";

import { renderWithUserContext } from "@test-utils/render-with-user-context";
import { Users } from "../users";

jest.mock("../user-list", () => ({
  UserList: () => <div data-testid="user-list" />,
}));

jest.mock("../user-add", () => ({
  UserAdd: () => <div data-testid="user-add" />,
}));

jest.mock("../user-edit", () => ({
  UserEdit: () => <div data-testid="user-edit" />,
}));

jest.mock("../user-delete", () => ({
  UserDelete: () => <div data-testid="user-delete" />,
}));

jest.mock("../user-detail", () => ({
  UserDetail: () => <div data-testid="user-detail" />,
}));

describe("Users", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders users page and all child components", () => {
    renderWithUserContext(<Users />);

    expect(screen.getByText(/add user/i)).toBeInTheDocument();

    expect(screen.getByTestId("user-list")).toBeInTheDocument();
    expect(screen.getByTestId("user-add")).toBeInTheDocument();
    expect(screen.getByTestId("user-edit")).toBeInTheDocument();
    expect(screen.getByTestId("user-delete")).toBeInTheDocument();
    expect(screen.getByTestId("user-detail")).toBeInTheDocument();
  });

  it("dispatches SET_MODE add when Add User button is clicked", () => {
    const { context } = renderWithUserContext(<Users />);

    fireEvent.click(screen.getByText(/add user/i));

    expect(context.dispatch).toHaveBeenCalledTimes(1);
    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SET_MODE",
      payload: "add",
    });
  });
});
