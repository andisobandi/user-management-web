import React from "react";
import { screen, fireEvent } from "@testing-library/react";

import { deleteUser } from "@context/user-actions";
import { toaster } from "@components/compositions/ui/toaster";
import { renderWithUserContext } from "@test-utils/render-with-user-context";
import { UserDelete } from "../user-delete";

jest.mock("@context/user-actions");

describe("UserDelete", () => {
  const selectedUser = {
    id: 99,
    name: "John Doe",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders dialog when mode is delete", () => {
    renderWithUserContext(<UserDelete />, {
      contextOverrides: {
        state: { mode: "delete", selectedUser },
      },
    });

    expect(screen.getByTestId("dialog-root")).toBeInTheDocument();
    expect(screen.getByText(/delete users\?/i)).toBeInTheDocument();
    expect(screen.getByText(/are you sure want to delete this user/i)).toBeInTheDocument();
  });

  it("does not render dialog when mode is not delete", () => {
    renderWithUserContext(<UserDelete />, {
      contextOverrides: {
        state: { selectedUser },
      },
    });

    expect(screen.queryByTestId("dialog-root")).not.toBeInTheDocument();
  });

  it("calls deleteUser and toaster when delete is confirmed", () => {
    const { context } = renderWithUserContext(<UserDelete />, {
      contextOverrides: {
        state: { mode: "delete", selectedUser },
      },
    });

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));

    expect(deleteUser).toHaveBeenCalledTimes(1);
    expect(deleteUser).toHaveBeenCalledWith(context.dispatch, selectedUser.id);

    expect(toaster.create).toHaveBeenCalledWith({
      description: "User deleted successfully.",
      type: "success",
    });
  });

  it("does not call deleteUser when selectedUser is null", () => {
    renderWithUserContext(<UserDelete />, {
      contextOverrides: {
        state: { mode: "delete", selectedUser: null },
      },
    });

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));

    expect(deleteUser).not.toHaveBeenCalled();
    expect(toaster.create).not.toHaveBeenCalled();
  });

  it("dispatches SET_MODE null when dialog is closed", () => {
    const { context } = renderWithUserContext(<UserDelete />, {
      contextOverrides: {
        state: { mode: "delete", selectedUser },
      },
    });

    fireEvent.click(screen.getByTestId("close-dialog"));

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SET_MODE",
      payload: null,
    });
  });
});
