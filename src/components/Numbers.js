import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import i18n from "i18next";
import {
    Text,
    Button,
    Box,
    ThemeProvider,
    CSSReset,
    Flex,
    Grid,
    Input,
    Stack
} from '@chakra-ui/core';
import { SocketContext } from './Socket';
import { useTranslation } from 'react-i18next';

function Numbers() {

    const { t } = useTranslation();
    const { numbers, answer, socket, currentPlayer, myUID } = useContext(SocketContext)
    const [isCurrent, setIsCurrent] = useState(true);
    const [userAnswer, setUserAnswer] = useState("");
    const [checker, setChecker] = useState([]);

    const checkAnswer = e => {
        e.preventDefault();
        setChecker(userAnswer.split('').filter(i => !Number.isNaN(Number(i))).map(Number))
        socket.emit("SUBMIT", userAnswer)
        setUserAnswer("")
    }

    const [notUsed, setNotUsed] = useState(numbers);

    useEffect(() => {
        const inputNumber = userAnswer.split('').filter(i => !Number.isNaN(Number(i))).map(Number)
        // console.log("checker is: ", inputNumber)
        const clonedInput = [...inputNumber]
        const localNotUsed = []
        for (const i of numbers) {
            const index = clonedInput.indexOf(i)
            if (index === -1) {
                localNotUsed.push(i)
            } else {
                clonedInput[index] = null
            }
        }
        setNotUsed(localNotUsed)
    }, [userAnswer])


    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            socket.emit("SUBMIT", userAnswer)
            setUserAnswer("")
            return;
        }
        if (e.key === 'Backspace') {
            const input = e.target.value
            setUserAnswer(input)
        }


    }

    const handleChange = e => {
        console.log('value ', e.target.value)
        const input = e.target.value
        setUserAnswer(input)
    }

    useEffect(() => {
        if (myUID !== currentPlayer) {
            setIsCurrent(false)
            console.log("Not your turn")
        } else {
            setIsCurrent(true)
            console.log("It's your turn")
        }
    }, [myUID, currentPlayer])






    if (!isCurrent) {
        return null;
    }

    return (
        <Stack spacing={4}>
            <Box d="flex" justifyContent="center">
                <Text fontSize="l" fontWeight="medium">
                    {t("Index")}
                </Text>
            </Box>
            <Box d="flex" alignItems="center" justify="space-between" mb="4">
                {notUsed.map((number, index) => (
                    <Box key={index} bg="orange.200" mx="2" p="4" rounded="md" >
                        {number}
                    </Box>
                ))}
            </Box>
            <Box d="flex" justifyContent="center">
                <Text fontSize="l" fontWeight="medium">
                    {t("Expected Answer")}
                </Text>
            </Box>
            <Box bg="orange.200" d="flex" justifyContent="center" rounded="lg">
                <Text fontWeight="semibold" fontSize="2xl">
                    {answer}
                </Text>
            </Box>
            <Box d="flex" justifyContent="center">
                <Text fontSize="l" fontWeight="medium">
                    {t("Please type in your answer")}
                </Text>
            </Box>
            <Input
                placeholder={t("Your answer")}
                value={userAnswer}
                onKeyDown={handleKeyDown}
                onChange={handleChange}

            />
            <Button
                variant="solid"
                variantColor="orange"
                my="4"
                onClick={checkAnswer}
            >
                {t("Enter")}
            </Button>
        </Stack>
    );
}

export default Numbers;