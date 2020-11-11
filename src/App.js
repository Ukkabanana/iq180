import './App.css';
import React, { useEffect, useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import { Box, Grid, Button, ThemeProvider, CSSReset } from '@chakra-ui/core'
import NameForm from './components/NameForm'
import Waiting from './pages/Waiting/index'
import Game from './pages/Game/index'
import Round from './pages/Round/index'
import Result from './pages/Result/index'
import DrawerMenu from './components/DrawerMenu'
import Socket from './components/Socket'




function App() {

  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Socket>
          <Switch>
            <Route exact path="/">
              <DrawerMenu />
              <Grid className="container">
                <Box className="box">
                  <NameForm />
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
