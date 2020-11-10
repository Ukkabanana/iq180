
import './ShowPlayer.css'
import React, { useState, useEffect, useContext } from 'react';
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
import { SocketContext } from '../components/Socket';

function ShowPlayer() {// to handle add todo
    const { allPlayers, socket } = useContext(SocketContext)
    const handleSubmit = () => {
        socket.emit("START", null)
    }
    // const [room, setR]

    return (
        <Grid className="container">
            <Box className="box">
                {/* <NameForm submit={submit} /> */}
                {/* <h1>{player1.name}</h1>
                <h1>{player2.name}</h1> */}
                <h1>{allPlayers[0]?.name}</h1>
                <h1>{allPlayers[1]?.name}</h1>
                <Button onClick={handleSubmit}>START</Button>
            </Box>
        </Grid>
    );
}

export default ShowPlayer