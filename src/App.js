import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Box,
  Grid,
  ThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider,
  useColorMode,
  IconButton,
  Button,
} from "@chakra-ui/core";
import NameForm from "./components/NameForm";
import Waiting from "./pages/Waiting/index";
import Game from "./pages/Game/index";
import Round from "./pages/Round/index";
import Result from "./pages/Result/index";
import DrawerMenu from "./components/DrawerMenu";
import Socket from "./components/Socket";
import customTheme from "./components/themes";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import PlayMusic from "./components/PlayMusic";

function App() {
  let lang = "th";
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    lang = i18next.language === "en" ? "th" : "en";
    i18n.changeLanguage(lang);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />

        <Router>
          <Socket>
            <Box d="flex" justifyContent="space-between">
              <DrawerMenu />
              <PlayMusic />
            </Box>
            <Switch>
              <Route exact path="/">
                {/* <DrawerMenu /> */}
                <Grid className="container">
                  <Box className="box">
                    <NameForm />
                  </Box>
                </Grid>
              </Route>
              <Route path="/game">
                {/* <DrawerMenu /> */}
                <Game />
              </Route>
              <Route path="/waiting">
                {/* <DrawerMenu /> */}
                <Waiting />
              </Route>
              <Route path="/round">
                {/* <DrawerMenu /> */}
                <Round />
              </Route>
              <Route path="/result">
                {/* <DrawerMenu /> */}
                <Result />
              </Route>
            </Switch>
          </Socket>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
