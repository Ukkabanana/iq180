
import './ShowPlayer.css'
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
    Route
  } from "react-router-dom";

import {
    Button,
    Grid,
    Box,
} from '@chakra-ui/core';

function ShowPlayer() {// to handle add todo
    const [player1, setPlayer1] = useState("Player1");
    const [player2, setPlayer2] = useState("Player2");

    return (
        <Grid className="container">
            <Box className="box">
                {/* <NameForm submit={submit} /> */}
                <h1>{player1}</h1>
                <h1>{player2}</h1>
                <Link to="/game">
                    <Button bg="teal">Start</Button>
                </Link>
            </Box>
        </Grid>
    );
}

export default ShowPlayer