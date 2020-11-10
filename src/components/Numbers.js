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

function Numbers(props) {


    const { numbers, answer, socket, currentPlayer, myUID } = useContext(SocketContext)
    const [isCurrent, setIsCurrent] = useState(true);
    const [userAnswer, setUserAnswer] = useState("");

    const checkAnswer = e => {
        e.preventDefault();
        socket.emit("SUBMIT", userAnswer)
        setUserAnswer("")
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            socket.emit("SUBMIT", userAnswer)
            setUserAnswer("")
        }

    }

    useEffect(() => {
        if (myUID !== currentPlayer) {
            setIsCurrent(false)
            console.log("Not your turn")
        } else {
            setIsCurrent(true)
            console.log("It's your turn")
        }
    }, [myUID, currentPlayer])






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
            <Box d="flex" bg='orange'>
                {answer}
            </Box>
            <Input
                placeholder="Your answer"
                value={userAnswer}
                onKeyDown={handleKeyDown}
                onChange={e => setUserAnswer(e.target.value)}

            />
            <Box textAlign="center">
                <Button
                    variant="solid"
                    variantColor={props.colors['button_color']}
                    my="4"
                    onClick={checkAnswer}
                >
                    Enter
                        </Button>
            </Box>
        </Grid>
    );
}

export default Numbers;