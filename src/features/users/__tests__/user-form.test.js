import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { UserForm } from "../user-form";

jest.mock("@components/compositions/ui/button", () => ({
  ButtonPrimary: ({ children, ...props }) => <button {...props}>{children}</button>,
}));

const renderForm = (props = {}) => {
  const defaultProps = {
    onSubmit: jest.fn(),
    defaultValues: null,
  };

  return {
    onSubmit: defaultProps.onSubmit,
    ...render(<UserForm {...defaultProps} {...props} />),
  };
};

describe("UserForm", () => {
  it("renders form fields correctly", () => {
    renderForm();

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Website")).toBeInTheDocument();
  });

  it("prefills form when defaultValues is provided", async () => {
    renderForm({
      defaultValues: {
        name: "John Doe",
        username: "johndoe",
        email: "john@mail.com",
        phone: "08123456789",
        website: "https://example.com",
      },
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue("John Doe")).toBeInTheDocument();
      expect(screen.getByDisplayValue("johndoe")).toBeInTheDocument();
      expect(screen.getByDisplayValue("john@mail.com")).toBeInTheDocument();
    });
  });

  it("calls onSubmit with form data when form is valid", async () => {
    const { onSubmit } = renderForm();

    fireEvent.change(screen.getByPlaceholderText(/enter name/i), {
      target: { value: "Jane Doe" },
    });

    fireEvent.change(screen.getByPlaceholderText(/enter username/i), {
      target: { value: "janedoe" },
    });

    fireEvent.change(screen.getByPlaceholderText(/enter email/i), {
      target: { value: "jane@mail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/enter phone number/i), {
      target: { value: "0812345678" },
    });

    fireEvent.change(screen.getByPlaceholderText(/enter website/i), {
      target: { value: "https://example.com" },
    });

    const submitButton = screen.getByRole("button", { name: /save/i });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    expect(onSubmit).toHaveBeenCalledWith(
      {
        name: "Jane Doe",
        username: "janedoe",
        email: "jane@mail.com",
        phone: "0812345678",
        website: "https://example.com",
      },
      expect.any(Function)
    );
  });

  it("disables submit button when form is invalid", () => {
    renderForm();

    const submitButton = screen.getByText(/save/i);
    expect(submitButton).toBeDisabled();
  });
});
