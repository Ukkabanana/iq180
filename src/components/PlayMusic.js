import React, { useContext, useState } from 'react';
import {
    Input,
    Button,
    Box,
    ThemeProvider,
    CSSReset,
    Text,
    ButtonGroup
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
                <Text fontWeight="semibold" fontSize="l">{t('Music ')}</Text>
                <ButtonGroup spacing={2}>
                    <Button variantColor="green" onClick={start}>{t('Play')}</Button>
                    <Button variantColor="red" onClick={pause}>{t('Pause')}</Button>
                </ButtonGroup>
            </Box>
        </ThemeProvider>
    )
}

export default PlayMusic