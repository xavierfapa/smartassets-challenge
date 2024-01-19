import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import FilterTodosBtns from "./index";
import { useTodos } from "../../../context/todosContext";
import { DarkTheme } from "../../../utils/theme";
import { waitFor } from "@testing-library/react";

jest.mock("../../../context/todosContext");

describe("FilterTodosBtns", () => {
  it("calls setFilterType on filter button click", () => {
    const setFilterTypeMock = jest.fn();
    (useTodos as jest.Mock).mockReturnValue({
      setFilterType: setFilterTypeMock,
    });

    render(
      <ThemeProvider theme={DarkTheme}>
        <FilterTodosBtns />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Completed"));

    expect(setFilterTypeMock).toHaveBeenCalledWith("completed");
  });
});
