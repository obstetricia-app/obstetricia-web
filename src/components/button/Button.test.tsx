import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("should render submit button type", () => {
  render(<Button isSubmit name="My Button" />);
  const buttonElement: HTMLButtonElement = screen.getByTestId("button");
  expect(buttonElement.type).toBe("submit");
});

test("should render button type", () => {
  render(<Button isSubmit={false} name="My Button" />);
  const buttonElement: HTMLButtonElement = screen.getByTestId("button");
  expect(buttonElement.type).toBe("button");
});
