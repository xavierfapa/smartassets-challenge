import styled from "styled-components";

const StyledHoverBtsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  margin-left: 10px;
  display: flex;
  align-items: center;
  display: none;
`;

const StyledHoverBts = styled.div`
  display: flex;
  gap: 7px;

  & > * {
    cursor: pointer;
    width: 70px;
    background-color: ${({ theme }) => theme.colors.button};
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #333;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: ${({ theme }) => theme.colors.checked};
  }
`;

const StyledTitle = styled.p`
  // background-color: orange;
`;

export {
  StyledTitle,
  StyledHoverBtsContainer,
  StyledHoverBts,
  StyledCheckboxWrapper,
  StyledCheckbox,
};
