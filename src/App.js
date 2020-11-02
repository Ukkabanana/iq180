import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Box, Grid } from '@chakra-ui/core'
import NameForm from './components/NameForm'
import Waiting from './pages/Waiting/index'
import Game from './pages/Game/index'
import Round from './pages/Round/index'
import Result from './pages/Result/index'

function App() {

  const submit = (name) => {
    // handle socket submit
    console.log(`submit ${name}`)
  }

  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Grid className="container">
            <Box className="box">
              <NameForm submit={submit} />
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
    </Router>

  )
}

export default App;
