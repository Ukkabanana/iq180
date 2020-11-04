import React from 'react';
import RoundComp from  '../../components/RoundComp'
import { Box, Grid } from '@chakra-ui/core'


function Round() {


  return (
    <Grid className="container">
      <Box className="box">
        {/* <NameForm submit={submit} /> */}
        <RoundComp />
      </Box>
    </Grid>
  )
}

export default Round;
