import React, { useContext, useState } from 'react';
import { Box, Grid, Text } from '@chakra-ui/core'
import ShowPlayer from '../../components/ShowPlayer'
import { SocketContext } from '../../components/Socket';
import DrawerMenu from '../../components/DrawerMenu';
function Waiting() {
    const { roomCode } = useContext(SocketContext)
    const submit = (name) => {
        // handle socket submit
        console.log(`submit ${name}`)
    }

    const [player1, setPlayer1] = useState("Player1");
    const [player2, setPlayer2] = useState("Player2");




    return (
        <Box mx={4}>
            <Box d="flex" alignItems="center" justify="space-between" >
                <Text fontSize="xl" fontWeight="bold"> Hello Players </Text>
                <Text ml={4} fontSize="l" fontWeight="md">Room code: {roomCode}</Text>
            </Box>
            <Box>
                <Text mt={4} fontSize="l" fontWeight="bold">Players in the room</Text>
            </Box>
            <ShowPlayer player1={player1} player2={player2} />
        </Box>

    );
}

export default Waiting;
