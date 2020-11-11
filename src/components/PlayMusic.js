import React, { useContext, useState } from 'react';
import {
    Input,
    Button,
    Box,
    ThemeProvider,
    CSSReset,
    Text
} from '@chakra-ui/core';

function PlayMusic() {
    let audio = new Audio("/music1.mp3")
    const start = () => {
        audio.play()
        console.log("Play music")
        audio.loop = true;
    }
    const pause = () => {
        audio.pause()
        console.log("Pause music")
    }

    return (
        <ThemeProvider>
            <CSSReset />
            <Box>
                <Text>Music :
                <Button onClick={start}>Play</Button>
                <Button onClick={pause}>Pause</Button>
                </Text>
            </Box>
        </ThemeProvider>
    )
}

export default PlayMusic