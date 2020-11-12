import React, { useContext, useState } from 'react';
import { Box, Grid, Text } from '@chakra-ui/core'
import ShowPlayer from '../../components/ShowPlayer'
import { SocketContext } from '../../components/Socket';

import { useTranslation } from 'react-i18next';
import DrawerMenu from '../../components/DrawerMenu';
function Waiting() {
    const { roomCode } = useContext(SocketContext)
    const submit = (name) => {
        // handle socket submit
        console.log(`submit ${name}`)
    }
    const { t } = useTranslation();
    const [player1, setPlayer1] = useState("Player1");
    const [player2, setPlayer2] = useState("Player2");




    return (
        <Grid className="container">
            <DrawerMenu />
            <Box className="box">
                <Text> {t('Hello Players')} </Text>
                <Text>{t('Room code')}: {roomCode}</Text>
                <Text>{t('Players in the room')}</Text>
                <ShowPlayer player1={player1} player2={player2} />
            </Box>
        </Grid>

    );
}

export default Waiting;
