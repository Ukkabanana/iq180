import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import {
    Text,
    Button,
    Box,
    ThemeProvider,
    CSSReset,
    Flex
} from '@chakra-ui/core';

function Numbers(props) {
    const [numbers, setNumbers] = useState([]);
    const [answer, setAnswer] = useState();

    useEffect(() => {
        props.socket.on("SET_CURRENT_QUESTION", (question) => {
            console.log(question)
            setNumbers(question.numbers);
            setAnswer(question.expectedAnswer);
        })//wait for result of joining game from backend.

    }, [])

    return (
        <div>
            <Box d="flex" alignItems="center" justify="space-between">
                {numbers.map((number, index) => (
                    <Box key={index} bg="gray.100" mx="2" p="4" >
                        {number}
                    </Box>
                ))}
            </Box>
            <Box d="flex" bg="teal">
                {answer}
            </Box>
        </div>
    );
}

export default Numbers;