//"use client";

import React from 'react';
import Image from 'next/image';
import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Avatar, Background, LetterFx, SparkleFx, SmartImage } from '@/once-ui/components';

export interface PresenceProps {
    name: string;
    type: number;
    details: string;
    state: string;
    applicationId: string;
    timestamps: {
        start: number;
        end: number;
    };
    assets: {
        largeImage: string;
        largeText: string;
        smallImage: string;
        smallText: string;
    };
    createdTimestamp: number;
}

/*
xs: 20,
    s: 24,
    m: 32,
    l: 48,
    xl: 160,
 */

export const Presence: React.FC<PresenceProps> = ({ name, type, details, state, applicationId, timestamps, assets, createdTimestamp }: PresenceProps) => {

    return (
        <Flex
            border="brand-medium"
            borderStyle="solid-1"
            gap="24"
            padding="12"
            radius="xl"
            onBackground="brand-strong"
            background="brand-medium"
            className="w-max"
        >
            <Flex className="relative w-[140px] h-[140px]"> {/* Установите фиксированные размеры контейнера */}
                <Image
                    src={assets.largeImage}
                    alt=""
                    width={140}
                    height={140}
                    className="block"
                />
                <Flex className="absolute bottom-0 right-0 ">
                    <Avatar
                        src={assets.smallImage}
                        size="l"
                        className="block"
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}