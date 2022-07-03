import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDartAtom } from "@atoms/colorAtoms";

function App() {
  const isDark = useRecoilValue(isDartAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
