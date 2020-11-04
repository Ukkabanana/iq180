import React from 'react';
import Status from '../../components/Status'
import Numbers from '../../components/Numbers'
import { Box, Grid } from '@chakra-ui/core'



function Game() {

  const submit = (name) => {
    // handle socket submit
    console.log('now running')
  }

  return (
    <Grid className="container">
      <Box className="box">
        <Status />
      </Box>
      <Box d="flex" justifyContent="center" alignSelf="flex-top">
        <Numbers />
      </Box>
    </Grid>
  )
}

export default Game;
