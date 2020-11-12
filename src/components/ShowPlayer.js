
import './ShowPlayer.css'
import React, { useState, useEffect, useContext } from 'react';
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
    Text,
    Avatar
} from '@chakra-ui/core';
import { SocketContext } from '../components/Socket';
import { useTranslation } from "react-i18next";

function ShowPlayer() {// to handle add todo
    const { t } = useTranslation();
    const { allPlayers, socket } = useContext(SocketContext)
    const handleSubmit = () => {
        socket.emit("START", null)
    }
    // const [room, setR]

    return (
        <Box mt={2}>
            <Box d="flex" alignItems="center" justify="space-between">
                <Avatar name={allPlayers[0]?.name} m={2}></Avatar>
                <Text>{allPlayers[0]?.name}</Text>
            </Box>
            <Box d="flex" alignItems="center" justify="space-between">
                <Avatar name={allPlayers[1]?.name} m={2}></Avatar>
                <Text>{allPlayers[1]?.name}</Text>
            </Box>
            <Box display="flex" justifyContent="center">
                <Button variantColor="orange" my={8} onClick={handleSubmit}>{t('START')}</Button>
            </Box>
        </Box>

    );
}

export default ShowPlayer