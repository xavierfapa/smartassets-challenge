import { render, fireEvent, screen } from "@testing-library/react";
import EditableTodo from "./index";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "../../../utils/Theme/theme";

describe("EditableTodo", () => {
  const mockSelectedEditTodo = {
    id: "1",
    title: "Sample Todo",
    completed: false,
  };

  it("updates the input value and calls editTodo on Save button click", () => {
    const mockOnEditChange = jest.fn();
    const mockEditTodo = jest.fn();

    render(
      <ThemeProvider theme={DarkTheme}>
        <EditableTodo
          selectedEditTodo={mockSelectedEditTodo}
          onEditChange={mockOnEditChange}
          editTodo={mockEditTodo}
        />
      </ThemeProvider>
    );

    expect(screen.getByDisplayValue("Sample Todo")).toBeInTheDocument();

    fireEvent.change(screen.getByDisplayValue("Sample Todo"), {
      target: { value: "Updated Todo" },
    });

    expect(mockOnEditChange).toHaveBeenCalledWith("Updated Todo");

    fireEvent.click(screen.getByText("Save"));

    expect(mockEditTodo).toHaveBeenCalled();
  });
});
