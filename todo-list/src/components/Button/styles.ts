import styled from "styled-components";
import { ButtonProps } from "./types";
import { ThemeType } from "../../utils/themeTypes";

interface StyledButtonProps extends ButtonProps {
  theme?: ThemeType;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 6px 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskContainer};
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ isActive, theme }) =>
    isActive &&
    theme &&
    `
    background-color: ${theme.colors.taskContainer};
    color: black;
  `}

  &.theme-button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export { StyledButton };
