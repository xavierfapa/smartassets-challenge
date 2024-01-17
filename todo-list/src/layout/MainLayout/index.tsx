import { FC } from "react";
import { StyledContainer } from "./styles";
import { IMainLayoutProps } from "./types";

const MainLayout: FC<IMainLayoutProps> = ({ ...rest }) => {
  return <StyledContainer {...rest} />;
};

export default MainLayout;
