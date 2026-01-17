import React from "react";
import { screen, fireEvent } from "@testing-library/react";

import { renderWithUserContext } from "@test-utils/render-with-user-context";
import { UserListItem } from "../user-list-item";

jest.mock("@components/common/button", () => ({
  Button: ({ children, onClick }) => <button onClick={onClick}>{children}</button>,
  IconButton: ({ children, onClick }) => <button onClick={onClick}>{children}</button>,
}));

describe("UserListItem", () => {
  const user = {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    avatar: "avatar.png",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches delete mode when delete button is clicked", () => {
    const { context } = renderWithUserContext(<UserListItem user={user} />);

    const buttons = screen.getAllByRole("button");
    const deleteButton = buttons[0];

    fireEvent.click(deleteButton);

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SELECT_USER",
      payload: user,
    });

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SET_MODE",
      payload: "delete",
    });
  });

  it("dispatches edit mode when edit button is clicked", () => {
    const { context } = renderWithUserContext(<UserListItem user={user} />);

    fireEvent.click(screen.getByText(/edit/i));

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SELECT_USER",
      payload: user,
    });

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SET_MODE",
      payload: "edit",
    });
  });

  it("dispatches detail mode when profile button is clicked", () => {
    const { context } = renderWithUserContext(<UserListItem user={user} />);

    fireEvent.click(screen.getByText(/profile/i));

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SELECT_USER",
      payload: user,
    });

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SET_MODE",
      payload: "detail",
    });
  });
});
