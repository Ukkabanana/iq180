
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
    const handleSubmit = () => {
        props.socket.emit("START", null)
    }
    let history = useHistory();
    // const [room, setR]
    useEffect(() => {
        props.socket.on("SET_PLAYERS", (players) => {
            console.log(players)
            setName(players.map(p => p.name))
            if (name.length >= 2) console.log("Players exceed 2!")

        })//wait for result of joining game from backend.
        props.socket.on("SET_STATE", (toState) => {
            switch(toState){ 
              case "WAITING":
                break;
                // Game state changed to "WAITING" ~ Game Lobby
              case "ONGOING":
                  break;
                // Game state changed to "ONGOING"
              case "FINISHED":
                history.push("/waiting")
                break;
                // Game state changed to "FINISHED" -> Display Leaderboard
            }
          })
    }, [])

    useEffect(()=> {
        console.log(props.socket);
        props.socket.on("START_RESULT", (result) => {
            console.log('On start result',result)
            if (result.isOK) {
                console.log("Game is started!")
                history.push('/game')
            } else {
                console.log("Game cannot be started. Please try again later.")
            }
        })
    }, [])
    
    return (
        <Grid className="container">
            <Box className="box">
                {/* <NameForm submit={submit} /> */}
                {/* <h1>{player1.name}</h1>
                <h1>{player2.name}</h1> */}
                <h1>{name[0]}</h1>
                <h1>{name[1]}</h1>
                <Button onClick={handleSubmit}>START</Button>
            </Box>
        </Grid>
    );
}

export default ShowPlayer