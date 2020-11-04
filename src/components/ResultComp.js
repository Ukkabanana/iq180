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

function ResultComp() {
    const [name, setName] = useState("Player 1");
    const [result, setResult] = useState("Victory!");
    return (
        <ThemeProvider>
            <CSSReset />
            <Box borderWidth="1px" rounded="lg" mx="24" my="32" boxShadow="sm">
                <Grid className="container">
                    <Box className="box">
                        <h3> {name}'s </h3>
                        <h1>{result}</h1>
                        <Link to="/">
                            <Button bg="teal">Quit</Button>
                        </Link>
                        <Link to="/waiting">
                            <Button bg="teal">Play again</Button>
                        </Link>
                    </Box>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default ResultComp;