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
    Text
} from '@chakra-ui/core';
import { SocketContext } from './Socket';
import { useTranslation } from "react-i18next";

function ResultComp() {
    const { t } = useTranslation();
    const { socket, allPlayers, myUID } = useContext(SocketContext)
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
    const [userScore, setUserScore] = useState(0);
    const victoryString = t("Victory");
    const drawString = t("Draw");
    const defeatString = t("Defeat");

    useEffect(() => {
        if (myUID === allPlayers[0]?.UID) {
            setName(allPlayers[0]?.name)
            setUserScore(allPlayers[0]?.currentScore)
            if (allPlayers[0]?.currentScore > allPlayers[1]?.currentScore) {
                setResult(victoryString)
            } else if (allPlayers[0]?.currentScore < allPlayers[1]?.currentScore) {
                setResult(defeatString)
            } else {
                setResult(drawString)
            }
        } else if (myUID === allPlayers[1]?.UID) {
            setName(allPlayers[1].name)
            setUserScore(allPlayers[1]?.currentScore)
            if (allPlayers[1]?.currentScore > allPlayers[0]?.currentScore) {
                setResult(victoryString)
            } else if (allPlayers[1]?.currentScore < allPlayers[0]?.currentScore) {
                setResult(defeatString)
            } else {
                setResult(drawString)
            }
        }
    }, [])
    return (
        <Box d="flex" justifyContent="center">
            <Grid>
                <Box d="flex" justifyContent="center">
                    <Text fontWeight="bold" fontSize="4xl">{t("Result!")}</Text>
                </Box>
                <Box d="flex" justifyContent="center">
                    <Text fontSize="2xl" fontWeight="semibold"> {name}{t("'s")} </Text>
                </Box>
                <Box d="flex" justifyContent="center">
                    <Text fontSize="6xl" fontWeight="bold" color="orange.400">{result}</Text>
                </Box>
                <Box d="flex" justifyContent="center">
                    <Text fontSize="2xl" fontWeight="semibold">{t("By score of")}: {userScore}</Text>
                </Box>
                <Box>
                    <Link to="/">
                        <Button variantColor="orange" m={4}>{t("Quit")}</Button>
                    </Link>
                    <Link to="/waiting">
                        <Button variantColor="orange" m={4}>{t("Play Again")}</Button>
                    </Link>
                </Box>
            </Grid>
        </Box>
    );
}

export default ResultComp;