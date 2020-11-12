import React from 'react';
import ThemeToggler from './ThemeToggler';
import PlayMusic from './PlayMusic';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    Stack,
    useDisclosure,
    Button,
    Box,
} from '@chakra-ui/core';

function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    let lang = "th";
    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        lang = i18next.language === "en" ? "th" : "en";
        i18n.changeLanguage(lang)
    }
    return (
        <>
            <Button ref={btnRef} variantColor="teal" mx="4" my="4" onClick={onOpen}>
                {t('Setting')}
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                blockScrollOnMount={true}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{t('Setting')}</DrawerHeader>
                    <DrawerBody>
                        <Box my={4}>
                            <ThemeToggler />
                        </Box>
                        <Box my={4}>
                            <PlayMusic />
                        </Box>
                        <Button onClick={() => changeLanguage()}>{t('Change Language')}</Button>
                    </DrawerBody>
                    <DrawerFooter>
                        <Text>{t('We love Netcentric Architecture XD')}</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    );
}

export default DrawerMenu;