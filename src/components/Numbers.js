import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import {
    Text,
    Button,
    Box,
    ThemeProvider,
    CSSReset,
    Flex
} from '@chakra-ui/core';
import { SocketContext } from './Socket';

function Numbers() {


    const { numbers, answer } = useContext(SocketContext)


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