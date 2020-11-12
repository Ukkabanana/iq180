import { Box, IconButton, useColorMode } from '@chakra-ui/core';



function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="left" py={4} mr={12}>
      <IconButton
        icon={colorMode ==='light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}

// export function TextToggler() {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Box textAlign="right" py={4} mr={12}>
//       <IconButton
//         icon={colorMode ==='light' ? 'moon' : 'sun'}
//         onClick={toggleColorMode}
//         variant="ghost"
//       />
//     </Box>
//   );
// }

export default ThemeToggler;
export var colorMode;