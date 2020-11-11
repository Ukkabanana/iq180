import customTheme from './themes';
import { Box, IconButton } from '@chakra-ui/core';
export default function ThemeToggler() {
  var colorMode = customTheme.colors.light;
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={toggleTheme ? 'moon' : 'sun'}
        onClick={toggleTheme(colorMode)}
        variant="ghost"
      />
    </Box>
  );
}

function toggleTheme(colorMode) {
  if(colorMode === 'light') {
  colorMode = customTheme.colors.dark
  }
  else if(colorMode === 'dark') {
    colorMode = customTheme.colors.light
  }
}
