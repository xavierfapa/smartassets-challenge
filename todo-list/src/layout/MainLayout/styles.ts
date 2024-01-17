import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  background: ${({
    theme: {
      colors: {
        primary: { main },
      },
    },
  }) => main};
  background: ${({
    theme: {
      colors: {
        primary: { main, light },
      },
    },
  }) => `
  linear-gradient(
    0deg,
    ${light} 50%,
    ${main} 100%
  );`};
  color: #000;
`;

export { StyledContainer };
