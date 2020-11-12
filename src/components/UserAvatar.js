import React, { useContext, useEffect, useState } from 'react';
import {
    Avatar, Badge, Box, Text
} from '@chakra-ui/core';
import UserBadge from './UserBadge'
import { SocketContext } from './Socket';

function UserAvatar() {
    const { allPlayers } = useContext(SocketContext);
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [firstLeading, setFirstLeading] = useState(false);
    const [secondLeading, setSecondLeading] = useState(false);
    useEffect(() => {
        setName1(allPlayers[0].name)
        setName2(allPlayers[1].name)
        if (allPlayers[0].currentScore > allPlayers[1].currentScore) {
            setFirstLeading(true)
        } else if (allPlayers[0].currentScore < allPlayers[1].currentScore) {
            setSecondLeading(true)
        }
    }, [allPlayers])
    return (
        <Box bg="purple.800" p="4" textAlign="center" color="white">
            <Box d="flex" alignItems="center" justify="space-between">
                <Avatar name={name1} m={2}></Avatar>
                {firstLeading && <UserBadge />}
                <Text ml={4} fontSize="md" fontWeight="600">: {allPlayers[0].currentScore} </Text>
            </Box>
            <Box d="flex" alignItems="center" justify="space-between">
                <Avatar name={name2} m={2}></Avatar>
                {secondLeading && <UserBadge />}
                <Text ml={4} fontSize="md" fontWeight="600">: {allPlayers[1].currentScore} </Text>
            </Box>
        </Box>
    );
}

export default UserAvatar;