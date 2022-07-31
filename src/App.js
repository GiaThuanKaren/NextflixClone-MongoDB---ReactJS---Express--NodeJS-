import "./grid.css";
import "./App.css";
import { deepmerge } from "@mui/utils";

import MainComponent from "./Components/Header/Header";
import { useSelector } from "react-redux";
import { createTheme, Paper, ThemeProvider } from "@mui/material";
function App() {
  const { IsLightTheme } = useSelector((state) => state);

  const theme = createTheme(
    deepmerge({
      palette: {
        mode: true ? "light" : "dark",
      },
    })
  );
  // console.log(useSelector((state) => state));
  return (
    <div className="App grid">
      <ThemeProvider theme={theme}>
        <Paper>
          <MainComponent />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
