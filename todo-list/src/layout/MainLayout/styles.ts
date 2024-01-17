import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
