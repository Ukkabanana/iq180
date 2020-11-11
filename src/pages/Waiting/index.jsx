import React, { useContext, useState } from 'react';
import { Box, Grid, Text } from '@chakra-ui/core'
import ShowPlayer from '../../components/ShowPlayer'
import { SocketContext } from '../../components/Socket';

function Waiting() {
    const { roomCode } = useContext(SocketContext)
    const submit = (name) => {
        // handle socket submit
        console.log(`submit ${name}`)
    }

    const [player1, setPlayer1] = useState("Player1");
    const [player2, setPlayer2] = useState("Player2");




    return (
        <Grid className="container">
            <Box className="box">
                <Text> Hello Players </Text>
                <Text>Room code: {roomCode}</Text>
                <Text>Players in the room</Text>
                <ShowPlayer player1={player1} player2={player2} />
            </Box>
        </Grid>

    );
}

export default Waiting;
