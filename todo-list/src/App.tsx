import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/theme";
import GlobalStyles from "./Globalstyles";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <MainLayout>
        <h1>Sample project for new hires</h1>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
