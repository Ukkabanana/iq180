import React from 'react';

import { Box, Grid } from '@chakra-ui/core'


function Round() {

  const submit = (name) => {
    // handle socket submit
    console.log(`submit ${name}`)
  }

  return (
    <Grid className="container">
      <Box className="box">
        {/* <NameForm submit={submit} /> */}
        <h1> HELLO Round </h1>
      </Box>
    </Grid>
  )
}

export default Round;
