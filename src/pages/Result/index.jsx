import React from 'react';
import ResultComp from  '../../components/ResultComp'
import { Box, Grid } from '@chakra-ui/core'

function Result() {

  const submit = (name) => {
    // handle socket submit
    console.log(`submit ${name}`)
  }

  return (
    <ResultComp />
  )
}

export default Result;

