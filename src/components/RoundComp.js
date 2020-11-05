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
    CSSReset
} from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';

function RoundComp() {
    const [round, setRound] = useState(1);
    const [eachResult, setEachResult] = useState("You win!");
    const [score, setScore] = useState("You win!");
    const [time, setTime] = useState("You win!");
    return (
        <Box borderWidth="1px" rounded="lg" mx="24" my="32" boxShadow="sm">
            <Grid className="container">
                <Box className="box">
                    <h3> Round {round} </h3>
                    <h2> {eachResult}</h2>
                    <h2>Score : {score}</h2>
                    <h2>Time used : {time}</h2>
                    <Link to="/game">
                        <Button bg="teal">Next round</Button>
                    </Link>
                </Box>
            </Grid>
        </Box>
    );
}

export default RoundComp;