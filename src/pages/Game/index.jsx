import React, { useEffect } from 'react';
import Status from '../../components/Status'
import Numbers from '../../components/Numbers'
import { Box, Grid } from '@chakra-ui/core'




function Game(props) {

  const submit = (name) => {
    // handle socket submit
    console.log('now running')
  }

  useEffect(() => {
    props.socket.on("SET_CURRENT_STATE", (toState) => {
      console.log(toState)
      switch (toState) {
        case "WAITING":
          console.log("Waiting")
          break;
        case "ONGOING":
          console.log("Ongoing")
          break;
        case "FINISHED":
          console.log("Finished")
          break;
      }
    })
  }, [])

  return (
    <Grid className="container">
      <Box className="box">
        <Status socket={props.socket} />
      </Box>
      <Box d="flex" justifyContent="center" alignSelf="flex-top">
        <Numbers socket={props.socket} />
      </Box>
    </Grid>
  )
}

export default Game;
