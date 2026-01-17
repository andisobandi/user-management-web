import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";

import { putUser } from "@context/user-actions";
import { toaster } from "@components/compositions/ui/toaster";
import { renderWithUserContext } from "@test-utils/render-with-user-context";
import { UserEdit } from "../user-edit";

jest.mock("@context/user-actions");

jest.mock("../user-form", () => ({
  UserForm: ({ onSubmit, defaultValues }) => (
    <div>
      <div data-testid="default-name">{defaultValues?.name}</div>
      <button
        data-testid="submit-form"
        onClick={() =>
          onSubmit({
            name: "Jane",
            username: "jane",
            email: "jane@mail.com",
            phone: "08123",
            website: "https://example.com",
          })
        }
      >
        Submit
      </button>
    </div>
  ),
}));

describe("UserEdit", () => {
  const selectedUser = {
    id: 1,
    name: "Old Name",
    username: "oldname",
    email: "old@mail.com",
    phone: "08000",
    website: "https://old.com",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders dialog when mode is edit", () => {
    renderWithUserContext(<UserEdit />, {
      contextOverrides: {
        state: { mode: "edit", selectedUser },
      },
    });

    expect(screen.getByTestId("dialog-root")).toBeInTheDocument();
    expect(screen.getByText(/edit users/i)).toBeInTheDocument();
    expect(screen.getByTestId("default-name")).toHaveTextContent("Old Name");
  });

  it("does not render dialog when mode is not edit", () => {
    renderWithUserContext(<UserEdit />);
    expect(screen.queryByTestId("dialog-root")).not.toBeInTheDocument();
  });

  it("submits form and calls putUser and toaster", async () => {
    const { context } = renderWithUserContext(<UserEdit />, {
      contextOverrides: {
        state: { mode: "edit", selectedUser },
      },
    });

    putUser.mockResolvedValueOnce();

    fireEvent.click(screen.getByTestId("submit-form"));

    await waitFor(() => {
      expect(putUser).toHaveBeenCalledTimes(1);
      expect(putUser).toHaveBeenCalledWith(
        context.dispatch,
        {
          name: "Jane",
          username: "jane",
          email: "jane@mail.com",
          phone: "08123",
          website: "https://example.com",
        },
        selectedUser
      );

      expect(toaster.create).toHaveBeenCalledWith({
        description: "User updated successfully.",
        type: "success",
      });
    });
  });

  it("dispatches SET_MODE null when dialog is closed", () => {
    const { context } = renderWithUserContext(<UserEdit />, {
      contextOverrides: {
        state: { mode: "edit", selectedUser },
      },
    });

    fireEvent.click(screen.getByTestId("close-dialog"));

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SET_MODE",
      payload: null,
    });
  });
});
