import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

function Button({ $isActive, children }: ButtonProps) {
  return <StyledButton $isActive={$isActive}>{children}</StyledButton>;
}

export default Button;
