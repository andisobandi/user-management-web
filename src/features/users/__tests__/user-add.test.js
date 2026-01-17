import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";

import { postUser } from "@context/user-actions";
import { toaster } from "@components/compositions/ui/toaster";
import { renderWithUserContext } from "@test-utils/render-with-user-context";
import { UserAdd } from "../user-add";

jest.mock("@context/user-actions");

jest.mock("../user-form", () => ({
  UserForm: ({ onSubmit }) => (
    <button
      data-testid="submit-form"
      onClick={() =>
        onSubmit({
          name: "John",
          username: "john",
          email: "john@mail.com",
          phone: "08123",
          website: "https://example.com",
        })
      }
    >
      Submit
    </button>
  ),
}));

describe("UserAdd", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders dialog when mode is add", () => {
    renderWithUserContext(<UserAdd />, {
      contextOverrides: {
        state: { mode: "add" },
      },
    });

    expect(screen.getByTestId("dialog-root")).toBeInTheDocument();
    expect(screen.getByText(/add new users/i)).toBeInTheDocument();
  });

  it("does not render dialog when mode is not add", () => {
    renderWithUserContext(<UserAdd />);
    expect(screen.queryByTestId("dialog-root")).not.toBeInTheDocument();
  });

  it("submits form and calls postUser and toaster", async () => {
    const { context } = renderWithUserContext(<UserAdd />, {
      contextOverrides: {
        state: { mode: "add" },
      },
    });

    postUser.mockResolvedValueOnce();

    fireEvent.click(screen.getByTestId("submit-form"));

    await waitFor(() => {
      expect(postUser).toHaveBeenCalledTimes(1);
      expect(postUser).toHaveBeenCalledWith(context.dispatch, {
        name: "John",
        username: "john",
        email: "john@mail.com",
        phone: "08123",
        website: "https://example.com",
      });

      expect(toaster.create).toHaveBeenCalledWith({
        description: "User added successfully.",
        type: "success",
      });
    });
  });

  it("dispatches SET_MODE null when dialog is closed", () => {
    const { context } = renderWithUserContext(<UserAdd />, {
      contextOverrides: {
        state: { mode: "add" },
      },
    });

    fireEvent.click(screen.getByTestId("close-dialog"));

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SET_MODE",
      payload: null,
    });
  });
});
