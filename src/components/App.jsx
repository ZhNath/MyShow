import { ThemeProvider } from "../globalContext/ThemeContext";
import Root from "./Root";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </>
  );
};
