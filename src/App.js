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
import Socket from './components/Socket'

import customTheme from './components/themes';
import ThemeToggler, {colorMode} from './components/ThemeToggler';
var colorM = "light";
function App() {
    
    function toggleHandler() {
        console.log('Butonn clicked')
        if (colorM === "light") {
            colorM = 'dark';
        } else if (colorM === "dark") {
            colorM = 'light';
        }
        console.log(`palettes.${colorM}.background`);
    }
    
  return (
      <ThemeProvider theme={customTheme}>
          <CSSReset />
          <ThemeToggler toggled={toggleHandler} />
          <Router>
              <Socket>
                  <Switch>
                      <Route exact path="/">
                          <Grid
                              className="container"
                              bg={`palettes.${colorM}.background`}
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
      </ThemeProvider>
  );
}

export default App;
