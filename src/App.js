import './App.css';
import React, { useEffect, useState } from 'react';
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
import io from 'socket.io-client'
function App() {
  const socket = io("https://netcentric-iq180.herokuapp.com");
  let history = useHistory();
  const [joinRoomResult, setJoinRoomResult] = useState({});
  const submit = (name) => {
    // handle socket submit
    console.log("submit" + name)
    socket.emit("JOIN_ROOM", { name }) //define by backend.
  }
  useEffect(() => {
    socket.on("JOIN_ROOM_RESULT", (result) => {
      console.log(result)
      setJoinRoomResult(result);
    })//wait for result of joining game from backend.
  }, [])


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
            <Waiting joinRoomResult={joinRoomResult} />
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
