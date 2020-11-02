
import React, { useState } from 'react';
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

function Waiting() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  return (
    <div className="Waiting">
      <div>
        {player1.text}
      </div>
      <div>
        {player2.text}
      </div>
    </div>
  );
}

export default Waiting