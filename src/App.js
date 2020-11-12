import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Box, Grid, ThemeProvider, CSSReset,theme, ColorModeProvider, useColorMode, IconButton, Button } from '@chakra-ui/core'
import NameForm from './components/NameForm'
import Waiting from './pages/Waiting/index'
import Game from './pages/Game/index'
import Round from './pages/Round/index'
import Result from './pages/Result/index'
import DrawerMenu from './components/DrawerMenu'
import Socket from './components/Socket'
import customTheme from './components/themes';


function App() {
    
    return (
        <ThemeProvider theme={customTheme}>
        <ColorModeProvider>
        <CSSReset />
        <Router>
            <Socket>
            <Switch>
                <Route exact path="/">
                <DrawerMenu />
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
                <DrawerMenu />                                             
                <Game />
                </Route>
                <Route path="/waiting">
                <DrawerMenu />                                              
                <Waiting />
                </Route>
                <Route path="/round">
                <DrawerMenu />                                             
                <Round />
                </Route>
                <Route path="/result">
                <DrawerMenu />                                              
                <Result />
                </Route>
            </Switch>
            </Socket>
        </Router>
        </ColorModeProvider>                           
        </ThemeProvider>
    )
 }

export default App;
