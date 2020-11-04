import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import {
    Text,
    Button,
    Box,
    ThemeProvider,
    CSSReset,
    Flex
} from '@chakra-ui/core';

function Numbers() {
    const [numbers, setNumbers] = useState([1, 1, 3, 4]);
    return (
        <Box d="flex" alignItems="center" justify="space-between">
            {numbers.map((number, index) => (
                <Box key={index} bg="gray.100" mx="2" p="4" >
                    {number}
                </Box>
            ))}
        </Box>

    );
}

export default Numbers;