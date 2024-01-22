import styled from "styled-components";

const StyledContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  color: #000;
`;

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px;
  font-weight: 600;
  font-size: 30px;
  font-style: italic;
  text-align: center;
  height: 74px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  padding-inline: 20px;
  padding-bottom: 100px;
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};

  & p {
    font-size: 16px;
    font-style: italic;
  }
`;

export { StyledContainer, StyledHeader, StyledBody, StyledFooter };
