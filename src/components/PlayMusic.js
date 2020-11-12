import React, { useContext, useState } from 'react';
import {
    Input,
    Button,
    Box,
    ThemeProvider,
    CSSReset,
    Text
} from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';

function PlayMusic() {
    const { t } = useTranslation();
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
                <Text>{t('Music ')}:
                <Button onClick={start}>{t('Play')}</Button>
                <Button onClick={pause}>{t('Pause')}</Button>
                </Text>
            </Box>
        </ThemeProvider>
    )
}

export default PlayMusic