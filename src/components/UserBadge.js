import React, { useContext, useEffect, useState } from 'react';
import {
    Box, Text, Badge
} from '@chakra-ui/core';
import { SocketContext } from './Socket';

function UserBadge() {

    return (
        <Badge variantColor="green">Leading</Badge>
    );
}

export default UserBadge;