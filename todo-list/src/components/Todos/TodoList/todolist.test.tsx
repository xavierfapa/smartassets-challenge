import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import TodoList from "./index";
import { useTodos } from "../../../context/todosContext";
import { DarkTheme } from "../../../utils/Theme/theme";
import { Todo } from "./types";

jest.mock("../../../context/todosContext");

describe("TodoList", () => {
  it("renders a paragraph when there are no todos", () => {
    const mockEmptyTodos: Todo[] = [];

    (useTodos as jest.Mock).mockReturnValue({
      todos: mockEmptyTodos,
    });

    render(
      <ThemeProvider theme={DarkTheme}>
        <TodoList todos={mockEmptyTodos} />
      </ThemeProvider>
    );

    const noTodosMessage = screen.getByText("No todos available.");
    expect(noTodosMessage).toBeInTheDocument();
  });
});
