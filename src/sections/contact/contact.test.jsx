import React from "react";
import { expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from ".";
import { inputFields } from "./consts";

describe("Contact form", () => {
  test("should render with all input fields and submit button", () => {
    render(<Contact />);

    inputFields.forEach(({ placeholder }) =>
      checkInputField({ selector: placeholder, method: "isInTheDocument" })
    );
    expect(
      screen.getByRole("button", { name: /Submit now/i })
    ).toBeInTheDocument();
  });

  test("should not submit when some fields are empty", () => {
    render(<Contact />);
    const firstNameInput = screen.getByPlaceholderText(/First Name/i);
    const submitButton = screen.getByRole("button", { name: /Submit now/i });

    fireEvent.change(firstNameInput, {
      target: { value: "John" },
    });
    fireEvent.click(submitButton);

    // Checks if the form was not submitted by checking if it was not cleared
    checkInputField({ selector: "First Name", method: "isNotCleared" });
  });

  test("should format phone number correctly and limit it to 9 digits", () => {
    render(<Contact />);
    const phoneNumberInput = screen.getByPlaceholderText(/Phone Number/i);

    fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });

    expect(phoneNumberInput).toHaveValue("123 456 789");
  });

  test("should submit form correctly when all fields are filled", () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: /Submit now/i });

    inputFields.forEach(({ placeholder, testValue }) => { 
      const matchText = new RegExp(placeholder, "i");
      fireEvent.change(screen.getByPlaceholderText(matchText), {
        target: { value: testValue },
      });
    });

    fireEvent.click(submitButton);

    // Checks if the form was submitted by checking if it was cleared
    inputFields.forEach(({ placeholder }) =>
      checkInputField({ selector: placeholder, method: "isCleared" })
    );
  });
});

function checkInputField({ selector, method }) {
  const matchText = new RegExp(selector, "i");

  switch (method) {
    case "isInTheDocument":
      expect(screen.getByPlaceholderText(matchText)).toBeInTheDocument();
      break;
    case "isCleared":
      expect(screen.getByPlaceholderText(matchText)).toHaveValue("");
      break;
    case "isNotCleared":
      expect(screen.getByPlaceholderText(matchText)).not.toHaveValue("");
      break;
    default:
      break;
  }
}
