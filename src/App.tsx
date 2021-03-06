import "./normalize.css";
import "./index.css";
import { Grid } from "./components/Grid/Grid";
import { Header } from "./components/Header/Header";
import { AboutTechnologies } from "./components/AboutTechnologies/AboutTechnologies";
import { createContext, useState, Dispatch, SetStateAction } from "react";

export const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}>({ theme: "light", setTheme: () => undefined });

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App theme-${theme}`}>
        <Grid>
          <Header />
          <AboutTechnologies />
        </Grid>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
