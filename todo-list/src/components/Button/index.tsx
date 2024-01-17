import { forwardRef } from "react";
import { IButtonProps } from "./types";
import { StyledButton } from "./styles";

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { ...rest } = props;
  return <StyledButton {...rest} ref={ref}></StyledButton>;
});

export default Button;
