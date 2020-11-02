
import './NameForm.css'
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Text,
    Input,
    Button,
    Box,
    FormControl,
    FormLabel,
    ThemeProvider,
    CSSReset,
} from '@chakra-ui/core';

function NameForm({ submit }) {// to handle add todo
    const [name, setName] = useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if (!name) return;
        submit(name);
        setName("")
        history.push("/waiting")
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            submit(name);
            setName("")
            history.push("/waiting")
        }
    }

    return (
        <ThemeProvider>
            <CSSReset />
            <Box borderWidth="1px" rounded="lg" mx="24" my="32" boxShadow="sm">
                <Box>
                    <Text fontSize="4xl" color='blue.500' textAlign="center" mx="8" p="6">
                        Welcome to IQ 180
                        </Text>
                </Box>
                <Box>
                    <FormControl p="16" mx="4" onSubmit={handleSubmit}>
                        <FormLabel color='gray.600'>
                            Please tell us your name
                            </FormLabel>
                        <Input
                            placeholder="Player name"
                            value={name}
                            onKeyDown={handleKeyDown}
                            onChange={e => setName(e.target.value)}
                        />
                    </FormControl>
                </Box>
                <Box textAlign="center">
                    <Button
                        variant="solid"
                        variantColor="orange"
                        my="4"
                        onClick={handleSubmit}
                    >
                        Enter
                        </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default NameForm