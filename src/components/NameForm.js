import React, { useContext, useState } from "react";
import FocusLock from "react-focus-lock";
import { useHistory } from "react-router-dom";
import {
  Text,
  Input,
  Button,
  Box,
  FormControl,
  FormLabel,
  ThemeProvider,
  useDisclosure,
  CSSReset,
  Popover,
  ButtonGroup,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import { SocketContext } from "./Socket";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import customTheme from "./themes";
import colorMode from "./ThemeToggler";


function NameForm() {// to handle add todo
  const [name, setName] = useState("");
  const history = useHistory();
  const firstFieldRef = React.useRef(null);
  const { t } = useTranslation();
  const { socket } = useContext(SocketContext)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return;
    socket.emit("JOIN_ROOM", { name })
    setName("")
    history.push("/waiting")
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      socket.emit("JOIN_ROOM", { name });
      setName("");
      history.push("/waiting");
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Box borderWidth="1px" rounded="lg" mx="24" my="32" boxShadow="sm">
        <Box>

          <Text fontSize="4xl" fontWeight="bold" color='gray' textAlign="center" mx="8" p="6">
            {t('Welcome to IQ180')}
          </Text>
        </Box>
        <Box>
          <FormControl p="16" mx="4" onSubmit={handleSubmit}>
            <FormLabel color='gray'>
              {t('Please tell us your name')}
            </FormLabel>

            <Input
              placeholder={t("Player name")}
              value={name}
              onKeyDown={handleKeyDown}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        </Box>
        <Button
          onClick={onOpen}
          variant="solid"
          variantColor="blue"
          ml="6"
          mr="2"
        >
          {t("How to play!")}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{t("How to play!")}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {t('- Each player has only 1 minute to solve the equation by choosing the right mathematical symbols.')}
              <br />
              {t('- Each digit can be used only once.')}
              <br />
              {t('- Player who can solve the equation will receive 1 point.')}
              <br />
              {t('- If both players can solve the equation, player who spend less time will receive 1 point.')}
              <br />
              {t('- And the player who get the higher score is the winner!')}

            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                {t("Close")}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <ButtonGroup textAlign="center" d="flex" justifyContent="center" my="4">
          <Button
            variant="solid"
            variantColor="orange"
            mx="4"
            onClick={handleSubmit}
          >
            {t('Create game')}
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button
                variant="solid"
                variantColor="orange"
                mx="4"
              >
                {t('Join game')}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <FocusLock returnFocus persistentFocus={false}>
                <PopoverArrow bg="white" />
                <PopoverCloseButton />
                <Stack spacing={4}>
                  <FormControl p="8" onSubmit={handleSubmit}>
                    <FormLabel color='gray'>
                      {t('Room code')}
                    </FormLabel>
                    <Input
                      placeholder={t("Please enter room code")}
                      onKeyDown={handleKeyDown}
                    />
                  </FormControl>
                  <ButtonGroup d="flex" justifyContent="flex-end">
                    <Button variantColor="orange" onClick={handleSubmit} m="4">
                      {t('Join')}
                    </Button>
                  </ButtonGroup>
                </Stack>
              </FocusLock>
            </PopoverContent>
          </Popover>
        </ButtonGroup>
      </Box>
    </ThemeProvider>
  );
}

export default NameForm;
