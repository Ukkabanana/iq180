import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Box, Grid, ThemeProvider, CSSReset,theme } from '@chakra-ui/core'
import NameForm from './components/NameForm'
import Waiting from './pages/Waiting/index'
import Game from './pages/Game/index'
import Round from './pages/Round/index'
import Result from './pages/Result/index'
//ßimport customTheme from './themes';
import Socket from './components/Socket'

// import CustomTheme from './themes';
const customTheme = {
    ...theme,
    fonts: {
        heading: "'David Libre', serif",
        body: "'Roboto', sans-serif",
        mono: "'Source Code Pro', monospace",
    },
    colors: {
        ...theme.colors,
        palettes: {
            orange: {
                heading: "#9C4221",
                label: "#FFFAF0",
                countdown: "#ED8936",
                body: "#652B19",
            },
            purple: {
                900: "#1a365d",
                800: "#153e75",
                700: "#2a69ac",
            },
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
