import { FC } from "react";
import {
  StyledContainer,
  StyledFooter,
  StyledHeader,
  StyledBody,
} from "./styles";
import { IMainLayoutProps } from "./types";
import { Link } from "react-router-dom";

const MainLayout: FC<IMainLayoutProps> = ({ children, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      <StyledHeader>Todo List</StyledHeader>
      <StyledBody>{children}</StyledBody>
      <StyledFooter>
        <Link to="http://portfolioxavierfabrega.com" target="_blank">
          Portfolio web
        </Link>
        <p>Developed by Xavier Fàbrega</p>
      </StyledFooter>
    </StyledContainer>
  );
};

export default MainLayout;
