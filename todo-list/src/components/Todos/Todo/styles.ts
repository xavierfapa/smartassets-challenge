import styled from "styled-components";

const StyledHoverBtsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -55px;
  transform: translateY(-50%);
  background-color: white;
  padding-left: 20px;
  display: flex;
  align-items: center;
  display: none;
  height: 100%;
`;

const StyledHoverBts = styled.div`
  background-color: red;
  display: flex;
  gap: 7px;

  & > * {
    cursor: pointer;
  }
`;

const StyledTitle = styled.p`
  background-color: orange;
`;

export { StyledTitle, StyledHoverBtsContainer, StyledHoverBts };
