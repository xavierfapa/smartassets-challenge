import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/theme";
import GlobalStyles from "./Globalstyles";
import TodosContainer from "./components/Todos/TodosContainer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <MainLayout>
        <h1>Sample project for new hires</h1>
        <TodosContainer />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
