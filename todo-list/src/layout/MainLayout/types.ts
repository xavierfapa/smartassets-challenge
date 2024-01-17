import { ComponentProps, PropsWithChildren } from "react";
import { StyledContainer } from "./styles";

interface IMainLayoutProps
  extends PropsWithChildren<ComponentProps<typeof StyledContainer>> {}

export type { IMainLayoutProps };
