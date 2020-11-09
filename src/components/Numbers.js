import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import {
    Text,
    Button,
    Box,
    ThemeProvider,
    CSSReset,
    Flex,
    Grid,
    Input
} from '@chakra-ui/core';
import { SocketContext } from './Socket';

function Numbers() {


    const { numbers, answer, socket } = useContext(SocketContext)
    const [isCurrent, setIsCurrent] = useState(true);

    const checkAnswer = e => {
        e.preventDefault();
        socket.emit("", e)
        socket.on("", (response) => {

        })
    }

    useEffect(() => {
        socket.on('connect', () => {
            let myUID = socket.id;
            if (myUID != currentPlayer) {
                setIsCurrent(false)
            } else {
                setIsCurrent(true)
            }
        })
    })



    if (!isCurrent) {
        return null;
    }

    return (
        <Grid>
            <Box d="flex" alignItems="center" justify="space-between">
                {numbers.map((number, index) => (
                    <Box key={index} bg="gray.100" mx="2" p="4" >
                        {number}
                    </Box>
                ))}
            </Box>
            <Box d="flex" bg="orange.400">
                {answer}
            </Box>
            <Input
                placeholder="Your answer"
                value={answer}
                onKeyDown={handleKeyDown}
                onChange={e => checkAnswer(e.target.value)}
            />
        </Grid>
    );
}

export default Numbers;