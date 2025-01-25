"use client";

import React, { useState } from "react";
import { Flex, Heading, Row, Text, Button } from "@/once-ui/components";

export default function NotFound() {
    return (
        <Flex
            direction={'column'}
            mobileDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap="24"
            maxWidth="l"
            fillHeight
            fillWidth
        >
            <Heading
                align={'center'}
                variant={'display-strong-l'}
            >
                404 - Page Not Found
            </Heading>
            <Row justifyContent={'center'} maxWidth={'l'} >
                <Text align={'center'} variant={'body-default-l'}>
                    The page you are looking for might don't exist or have been removed, had its name changed, or is temporarily unavailable.
                </Text>
            </Row>
        </Flex>
    );
}
