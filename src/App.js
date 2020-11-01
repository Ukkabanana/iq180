import './App.css';
import React from 'react';

import {Box, Grid} from '@chakra-ui/core'
import NameForm from './components/NameForm'


function App() {

  const submit = (name) => {
    // handle socket submit
    console.log(`submit ${name}`)
  }

  return (
        <Grid className="container">
          <Box className="box">
              <NameForm submit={submit} />
          </Box>
        </Grid>
  )
}

export default App;
