import React from "react";
import { render } from "@testing-library/react";

import { Button } from "./button";

it("should render with default type 'button' when no type is provided", () => {
  const { getByRole } = render(<Button type="button">Click me</Button>);

  const buttonElement = getByRole("button");

  expect(buttonElement.getAttribute("type")).toBe("button");
});
