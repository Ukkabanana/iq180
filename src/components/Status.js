
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import {
    Text,
    Box,
    ThemeProvider,
    CSSReset,
    Flex
} from '@chakra-ui/core';
import { SocketContext } from './Socket';


function Status() {// to handle status box
    const [round, setRound] = useState("1");
    const [score, setScore] = useState("0");



    const { time, currentPlayer } = useContext(SocketContext)


    return (
        <ThemeProvider>
            <CSSReset />
            <Flex alignItems="center" justify="space-between">
                <Box bg="purple.800" p="4" textAlign="left" color="white" >
                    <Text>
                        Round: {round}
                    </Text>
                    <Text>
                        Score: {score}
                    </Text>
                </Box>
                <Box textAlign="center">
                    <Text fontSize="4xl" fontWeight="800" color="purple.800">It's {currentPlayer}'s Turn!</Text>
                </Box>
                <Box d="flex" alignItems="baseline">
                    <Text fontWeight="800" fontSize="xl" color="orange.400" mx="2">{time}</Text>
                    <Text fontWeight="400" color="purple.800" mr="8">Seconds left!</Text>
                </Box>
            </Flex>
        </ThemeProvider>
    );
}

export default Status;