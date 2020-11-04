
import './ShowPlayer.css'
import React, { useState, useEffect } from 'react';
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

function ShowPlayer(props) {// to handle add todo
    const [player1, setPlayer1] = useState("Player1");
    const [player2, setPlayer2] = useState("Player2");
    const [name, setName] = useState([])
    // const [room, setR]
    useEffect(() => {
        props.socket.on("SET_PLAYERS", (players) => {
            console.log(players)
            setName(players.map(p=>p.name))
            if(name.length>=2) console.log("Players exceed 2!")
            
        })//wait for result of joining game from backend.
    }, [])
    return (
        <Grid className="container">
            <Box className="box">
                {/* <NameForm submit={submit} /> */}
                {/* <h1>{player1.name}</h1>
                <h1>{player2.name}</h1> */}
                <h1>{name[0]}</h1>
                <h1>{name[1]}</h1>
                <Link to="/game">
                    <Button bg="teal">Start</Button>
                </Link>
            </Box>
        </Grid>
    );
}

export default ShowPlayer