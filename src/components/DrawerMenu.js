import React from 'react';
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
} from '@chakra-ui/core';

function DrawerMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <>
            <Button ref={btnRef} variantColor="teal" mx="4" my="4" onClick={onOpen}>
                Setting
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
                    <DrawerHeader>Setting</DrawerHeader>
                    <DrawerBody>
                        <Text>Setting menu's here</Text>
                    </DrawerBody>
                    <DrawerFooter>
                        <Text>We love Netcentric Architecture XD</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    );
}

export default DrawerMenu;