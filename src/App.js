import './App.css';
import React from 'react';
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

function App() {
  let history = useHistory();
  const submit = (name) => {
    // handle socket submit
    console.log(`submit ${name}`)
  }
  // const goToGame = () => {
  //   history.push("/game")
  // };

  return (

    <ThemeProvider>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/">
            <Grid className="container">
              <Box className="box">
                <NameForm submit={submit} />
                <Link to="/game">
                  <Button
                    my="4"
                  // onClick={goToGame}
                  >
                    Go to Game
                  </Button>
                </Link>
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
    </ThemeProvider>

  )
}

export default App;
