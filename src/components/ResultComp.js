import './ShowPlayer.css'
import React, { useContext, useEffect, useState } from 'react';
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
import { SocketContext } from './Socket';
import { useTranslation } from "react-i18next";

function ResultComp() {
    const {t} = useTranslation();
    const { socket, allPlayers, myUID } = useContext(SocketContext)
    const [name, setName] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        if (myUID === allPlayers[0]?.UID) {
            setName(allPlayers[0].name)
            if (allPlayers[0]?.currentScore > allPlayers[1]?.currentScore) {
                setResult("Victory")
            } else if (allPlayers[0]?.currentScore < allPlayers[1]?.currentScore) {
                setResult("Defeat")
            } else {
                setResult("Draw")
            }
        } else if (myUID === allPlayers[1]?.UID) {
            setName(allPlayers[1].name)
            if (allPlayers[1]?.currentScore > allPlayers[0]?.currentScore) {
                setResult("Victory")
            } else if (allPlayers[1]?.currentScore < allPlayers[0]?.currentScore) {
                setResult("Defeat")
            } else {
                setResult("Draw")
            }
        }
    }, [allPlayers, myUID])
    return (
        <Box borderWidth="1px" rounded="lg" mx="24" my="32" boxShadow="sm">
            <Grid className="container">
                <Box className="box">
                    <h3> {name}'s </h3>
                    <h1>{result}</h1>
                    <Link to="/">
                        <Button bg="teal">{t("Quit")}</Button>
                    </Link>
                    <Link to="/waiting">
                        <Button bg="teal">{t("Play Again")}</Button>
                    </Link>
                </Box>
            </Grid>
        </Box>
    );
}

export default ResultComp;