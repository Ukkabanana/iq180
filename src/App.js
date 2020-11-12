import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Box, Grid, ThemeProvider, CSSReset,theme, ColorModeProvider, useColorMode, IconButton } from '@chakra-ui/core'
import NameForm from './components/NameForm'
import Waiting from './pages/Waiting/index'
import Game from './pages/Game/index'
import Round from './pages/Round/index'
import Result from './pages/Result/index'
import Socket from './components/Socket'

import customTheme from './components/themes';
import ThemeToggler from './components/ThemeToggler';
// import TextToggler from './components/ThemeToggler';

function App() {

  return (
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
          <CSSReset />
          <ThemeToggler toggled={ThemeToggler} />
          {/* <ThemeToggler toggled={TextToggler} /> */}
          <Router>
              <Socket>
                  <Switch>
                      <Route exact path="/">
                          <Grid
                            className="container"
                            >
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
          </ColorModeProvider>
      </ThemeProvider>
  );
}

export default App;
