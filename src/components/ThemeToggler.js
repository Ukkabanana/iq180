import customTheme from './themes';
import { Box, IconButton } from '@chakra-ui/core';



function ThemeToggler(props) {
  
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={toggleTheme ? 'moon' : 'sun'}
        onClick={props.toggled}
        variant="ghost"
      />
    </Box>
  );
}

function toggleTheme(colorMode) {
  if(colorMode === 'light') {
  colorMode = customTheme.colors.palettes.dark
  }
  else if(colorMode === 'dark') {
    colorMode = customTheme.colors.palettes.light
  }
}
export default ThemeToggler;
export var colorMode;