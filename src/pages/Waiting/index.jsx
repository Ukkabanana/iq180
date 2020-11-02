import React from 'react';

import { Box, Grid } from '@chakra-ui/core'


function Waiting() {

    const submit = (name) => {
        // handle socket submit
        console.log(`submit ${name}`)
    }

    return (
        <Grid className="container">
            <Box className="box">
                {/* <NameForm submit={submit} /> */}
                <h1> HELLO Waiting </h1>
            </Box>
        </Grid>
    )
}

export default Waiting;
