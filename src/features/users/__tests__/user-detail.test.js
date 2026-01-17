import React from "react";
import { screen, fireEvent } from "@testing-library/react";

import { renderWithUserContext } from "@test-utils/render-with-user-context";
import { UserDetail, formatDate } from "../user-detail";

describe("UserDetail", () => {
  const selectedUser = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@mail.com",
    phone: "08123456789",
    website: "https://example.com",
    avatar: "avatar.png",
    createdAt: "2024-01-01T10:00:00.000Z",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("formatDate", () => {
    it("formats date correctly", () => {
      expect(formatDate("2024-01-01T10:00:00.000Z")).toBe("January 1, 2024");
    });
  });

  it("returns null when selectedUser is null", () => {
    const { container } = renderWithUserContext(<UserDetail />, {
      contextOverrides: {
        state: { mode: "detail", selectedUser: null },
      },
    });

    expect(container.firstChild).toBeNull();
  });

  it("renders dialog and user details when mode is detail", () => {
    renderWithUserContext(<UserDetail />, {
      contextOverrides: {
        state: { mode: "detail", selectedUser },
      },
    });

    expect(screen.getByTestId("dialog-root")).toBeInTheDocument();
    expect(screen.getByText(/user details/i)).toBeInTheDocument();

    expect(screen.getAllByText("John Doe").length).toBeGreaterThan(0);
    expect(screen.getByText("johndoe")).toBeInTheDocument();
    expect(screen.getByText("john@mail.com")).toBeInTheDocument();
    expect(screen.getByText("08123456789")).toBeInTheDocument();
    expect(screen.getByText("https://example.com")).toBeInTheDocument();
    expect(screen.getByText("January 1, 2024")).toBeInTheDocument();
  });

  it("dispatches SET_MODE null when dialog is closed", () => {
    const { context } = renderWithUserContext(<UserDetail />, {
      contextOverrides: {
        state: { mode: "detail", selectedUser },
      },
    });

    fireEvent.click(screen.getByTestId("close-dialog"));

    expect(context.dispatch).toHaveBeenCalledWith({
      type: "SET_MODE",
      payload: null,
    });
  });
});
