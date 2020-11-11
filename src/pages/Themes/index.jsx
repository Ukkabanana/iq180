import React from 'react';
import { Button, useColorMode, ThemeProvider, ColorModeProvider } from '@chakra-ui/core'

function Themes() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    )
  }

  export default Themes;