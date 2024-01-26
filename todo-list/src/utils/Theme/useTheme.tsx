import { useState } from "react";
import { DarkTheme, LightTheme } from "./theme";
import {
  StyledButton,
  StyledButtonWrapper,
} from "../../components/Button/styles";
import { ThemeType } from "./themeTypes";

function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(DarkTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === DarkTheme ? LightTheme : DarkTheme
    );
  };

  const ThemedButton = (
    <StyledButtonWrapper>
      <StyledButton onClick={toggleTheme}>
        {currentTheme === LightTheme ? "☀️" : "🌙"}
      </StyledButton>
    </StyledButtonWrapper>
  );

  return { currentTheme, toggleTheme, ThemedButton };
}

export default useTheme;
