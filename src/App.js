import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Box, Grid, ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import NameForm from './components/NameForm'
import Waiting from './pages/Waiting/index'
import Game from './pages/Game/index'
import Round from './pages/Round/index'
import Result from './pages/Result/index'

import Socket from './components/Socket'

// 2. Extend the theme to include custom colors, fonts, etc.
const customTheme = {
    ...theme,
    fonts: {
        heading: '"Avenir Next", sans-serif',
        body: "system-ui, sans-serif",
        mono: "Menlo, monospace",
    },
    colors: {
        ...theme.colors,
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
};



function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Socket>
          <Switch>
            <Route exact path="/">
              <Grid className="container">
                <Box className="box">
                  <NameForm />
                  {/* <Link to="/game">
                    <Button
                      my="4"
                    // onClick={goToGame}
                    >
                      Go to Game
                    </Button>
                  </Link> */}
                </Box>
              </Grid>
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/waiting">
              <Waiting />
            </Route>
            <Route path="/round">
              <Round />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </Socket>
      </Router>
    </ThemeProvider>
  )
}

export default App;
