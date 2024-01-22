import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./utils/theme";
import GlobalStyles from "./Globalstyles";
import TodosContainer from "./components/Todos/TodosContainer";
import { useState } from "react";
import { ThemeType } from "./utils/themeTypes";
import { StyledButton, StyledButtonWrapper } from "./components/Button/styles";

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(DarkTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === DarkTheme ? (LightTheme as ThemeType) : DarkTheme
    );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <MainLayout>
        <StyledButtonWrapper>
          <StyledButton onClick={toggleTheme}>
            {currentTheme === LightTheme ? "☀️" : "🌙"}
          </StyledButton>
        </StyledButtonWrapper>
        <TodosContainer />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
