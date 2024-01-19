import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TodoForm from "./index";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../../../utils/theme";
import { useTodos } from "../../../context/todosContext";

jest.mock("../../../context/todosContext");

describe("TodoForm", () => {
  it("calls addTodo function on form submission", async () => {
    const mockAddTodo = jest.fn();

    (useTodos as jest.Mock).mockReturnValue({
      addTodo: mockAddTodo,
    });

    render(
      <ThemeProvider theme={DarkTheme}>
        <TodoForm />
      </ThemeProvider>
    );

    fireEvent.change(screen.getByLabelText("Enter a new Task"), {
      target: { value: "New Task" },
    });

    fireEvent.click(screen.getByText("Add Todo"));

    await waitFor(() => {
      expect(mockAddTodo).toHaveBeenCalledWith("New Task");
    });
  });
});
