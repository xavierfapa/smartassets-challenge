import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ $isActive, children }) => {
  return <StyledButton $isActive={$isActive}>{children}</StyledButton>;
};
