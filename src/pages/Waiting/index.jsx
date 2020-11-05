import React, { useContext, useState } from 'react';
import { Box, Grid, Button } from '@chakra-ui/core'
import ShowPlayer from '../../components/ShowPlayer'
import {
    BrowserRouter as Router,
    Link,
    useHistory,
    Route
} from "react-router-dom";
import { SocketContext } from '../../components/Socket';

function Waiting() {

    const submit = (name) => {
        // handle socket submit
        console.log(`submit ${name}`)
    }

    const [player1, setPlayer1] = useState("Player1");
    const [player2, setPlayer2] = useState("Player2");




    return (
        <Grid className="container">
            <Box className="box">
                <h1> HELLO Waiting </h1>
                <h1>Players</h1>
                <ShowPlayer player1={player1} player2={player2} />
            </Box>
        </Grid>

    );
}

export default Waiting;
