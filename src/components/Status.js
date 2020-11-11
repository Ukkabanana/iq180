
import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    Box,
    ThemeProvider,
    CSSReset,
    Grid,
    Flex
} from '@chakra-ui/core';
import { SocketContext } from './Socket';
import customTheme from '../themes'

function Status() {// to handle status box
    const [displayName, setDisplayName] = useState("");
    const [displayScore, setDisplayScore] = useState(0);

    const { time, allPlayers, currentPlayer, round } = useContext(SocketContext)

    useEffect(() => {
        if (currentPlayer === allPlayers[0]?.UID) {
            setDisplayName(allPlayers[0]?.name)
            console.log(displayName)
        } else if (currentPlayer === allPlayers[1]?.UID) {
            setDisplayName(allPlayers[1]?.name)
            console.log(displayName)
        }
    }, [currentPlayer, allPlayers, displayName])




    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <Flex alignItems="center" justify="space-between">
                <Grid gap={2}>
                    <Box
                        bg="purple.800"
                        p="4"
                        textAlign="center"
                        color="palettes.orange.body_light"
                    >
                        <Text>Round: {round}</Text>
                    </Box>
                    <Box
                        bg="purple.800"
                        p="4"
                        textAlign="center"
                        color="palettes.orange.body_light"
                    >
                        <Text>Scoreboard</Text>
                        <Text>
                            {allPlayers[0].name} : {allPlayers[0].currentScore}
                        </Text>
                        <Text>
                            {allPlayers[1].name} : {allPlayers[1].currentScore}
                        </Text>
                    </Box>
                </Grid>
                <Box textAlign="center">
                    <Text fontSize="4xl" fontWeight="800" color="purple.800">
                        It's {displayName}'s Turn!
                    </Text>
                </Box>
                <Box d="flex" alignItems="baseline">
                    <Text
                        fontWeight="800"
                        fontSize="xl"
                        color="orange.400"
                        mx="2"
                    >
                        {time}
                    </Text>
                    <Text fontWeight="400" color="purple.800" mr="8">
                        Seconds left!
                    </Text>
                </Box>
            </Flex>
        </ThemeProvider>
    );
}

export default Status;