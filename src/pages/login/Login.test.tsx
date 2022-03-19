import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  test("should be render logo", () => {
    render(<Login />);
    const loginImageElement: HTMLImageElement = screen.getByAltText("Logo");
    expect(loginImageElement.src).toBe("http://localhost/Logo.png");
    expect(loginImageElement).toBeInTheDocument();
  });

  test("should be render logo short", () => {
    render(<Login />);
    const loginImageElement: HTMLImageElement =
      screen.getByAltText("Logo Short");
    expect(loginImageElement.src).toBe("http://localhost/Logo_Short.png");
    expect(loginImageElement).toBeInTheDocument();
  });
});
