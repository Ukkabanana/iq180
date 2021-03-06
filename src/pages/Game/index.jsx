import React, { useContext, useEffect } from 'react';
import Status from '../../components/Status'
import Numbers from '../../components/Numbers'
import { Box, Grid } from '@chakra-ui/core'
import { SocketContext } from '../../components/Socket';




function Game() {

  const submit = (name) => {
    // handle socket submit
    console.log('now running')
  }

  const { socket } = useContext(SocketContext)

  useEffect(() => {
    socket.on("SET_CURRENT_STATE", (toState) => {
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
    <Box className="container">
      <Box className="box">
        <Status />
      </Box>
      <Box d="flex" justifyContent="center" alignSelf="flex-top">
        <Numbers />
      </Box>
    </Box>
  )
}

export default Game;
