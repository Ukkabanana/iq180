import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

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
        // console.log('keydown', e.key)
        // console.log('value ', e.target.value)
        if (e.key === 'Enter') {
            socket.emit("SUBMIT", userAnswer)
            setUserAnswer("")
            return;
        }
        if (e.key === 'Backspace') {
            const input = e.target.value
            // const string = input.substring(0, input.length - 1)
            // console.log(string.substring(0, string.length - 1))
            setUserAnswer(input)
            // const inputNumber = input.split('').filter(i => !Number.isNaN(Number(i))).map(Number)
            // console.log("checker is: ", inputNumber)
            // const clonedInput = [...inputNumber]
            // const localNotUsed = []
            // for (const i of numbers) {
            //     const index = clonedInput.indexOf(i)
            //     if (index === -1) {
            //         localNotUsed.push(i)
            //     } else {
            //         clonedInput[index] = null
            //     }
            // }
            // setNotUsed(localNotUsed)
        }


    }

    const handleChange = e => {
        console.log('value ', e.target.value)
        const input = e.target.value
        setUserAnswer(input)
        // const inputNumber = input.split('').filter(i => !Number.isNaN(Number(i))).map(Number)
        // console.log("checker is: ", inputNumber)
        // const clonedInput = [...inputNumber]
        // const localNotUsed = []
        // for (const i of numbers) {
        //     const index = clonedInput.indexOf(i)
        //     if (index === -1) {
        //         localNotUsed.push(i)
        //     } else {
        //         clonedInput[index] = null
        //     }
        // }
        // setNotUsed(localNotUsed)
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
            <Box d="flex" alignItems="center" justify="space-between">
                {notUsed.map((number, index) => (
                    <Box key={index} bg="orange.400" mx="2" p="4" >
                        {number}
                    </Box>
                ))}
            </Box>
            <Box bg="orange.400" alingnItems="center" justify="space-between">
                {answer}
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