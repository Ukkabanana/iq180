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

import Socket from './components/Socket'




function App() {
    const colors = {
        buttons_color: 'orange.500',
        buttons_textColor: 'blue',
        text_color: 'blue.500',
        label_color: '',
        heading_color: '',
        placeholder_color: '',
        box_background: 'gray',
    }
    
    const [colorState, setColorState] = useState(colors); 
    console.log(colorState.button_color);
    return (
        <ThemeProvider>
        <CSSReset />
        <Router>
            <Socket>
            <Switch>
                <Route exact path="/">
                <Grid className="container">
                    <Box className="box">
                    <NameForm 
                        colors = {colorState}
                    />
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
                <Game colors = {colorState}/>
                </Route>
                <Route path="/waiting">
                <Waiting colors={colorState}/>
                </Route>
                <Route path="/round">
                <Round colors={colorState}/>
                </Route>
                <Route path="/result">
                <Result colors={colorState}/>
                </Route>
            </Switch>
            </Socket>
        </Router>
        </ThemeProvider>
    )
}

export default App;
