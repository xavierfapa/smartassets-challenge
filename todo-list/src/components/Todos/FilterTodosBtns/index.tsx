import { useState } from "react";
import { StyledButton } from "../../Button/styles";
import { StyledFilterWrapper } from "./styles";
import { useTodos } from "../../../context/todosContext";

export default function FilterTodosBtns() {
  const { setFilterType } = useTodos();
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filterType: any) => {
    setFilterType(filterType);
    setActiveFilter(filterType);
  };

  return (
    <StyledFilterWrapper>
      <StyledButton
        onClick={() => handleFilterClick("all")}
        $isActive={activeFilter === "all"}
      >
        All
      </StyledButton>
      <StyledButton
        onClick={() => handleFilterClick("completed")}
        $isActive={activeFilter === "completed"}
      >
        Completed
      </StyledButton>
      <StyledButton
        onClick={() => handleFilterClick("uncompleted")}
        $isActive={activeFilter === "uncompleted"}
      >
        Uncompleted
      </StyledButton>
    </StyledFilterWrapper>
  );
}
