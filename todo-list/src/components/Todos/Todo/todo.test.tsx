import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Todo from "./index";
import { DarkTheme } from "../../../utils/theme";

test("renders Todo component", () => {
  const mockTodo = { id: "1", title: "Sample Todo", completed: false };
  const mockProps = {
    todo: mockTodo,
    deleteTodo: jest.fn(),
    onEdit: jest.fn(),
    toggleCompleteTodo: jest.fn(),
  };

  render(
    <ThemeProvider theme={DarkTheme}>
      <Todo {...mockProps} />
    </ThemeProvider>
  );
});
