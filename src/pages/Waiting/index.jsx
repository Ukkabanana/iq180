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
        <Box borderWidth="1px" rounded="lg" mx="24" my="32" boxShadow="sm">
            <Box d="flex" justifyContent="center">
                <Box>
                    <Box d="flex" justifyContent="center">
                        <Text fontSize="4xl" fontWeight="bold" mb={12} mt={4}> {t('Hello Players')} </Text>
                    </Box>
                    <Box d="flex" justifyContent="center" mb={4}>
                        <Text fontWeight="semibold" fontSize="xl">{t('Room code')}: {roomCode}</Text>
                    </Box>
                    <Box d="flex" justifyContent="center">
                        <Text fontSize="l" fontWeight="medium">{t('Players in the room')}</Text>
                    </Box>
                    <ShowPlayer player1={player1} player2={player2} />
                </Box>
            </Box>
        </Box>


    );
}

export default Waiting;
