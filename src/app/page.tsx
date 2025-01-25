'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
    Avatar,
    IconButton, RevealFx
} from '@/once-ui/components';
import { Data } from '@/lib/types';

export default function Home() {
    const [data, setData] = React.useState<Data>();

    useEffect(() => {
        fetch('https://api.hitomihiumi.xyz/v1/users/991777093312585808', { next: { revalidate: 600 }, cache: 'default' })
            .then(res => res.json())
            .then(setData)
    }, [])

    return (
        <Flex
            fillWidth
            fillHeight
            paddingX="l"
            direction="column"
            alignItems="center"
            justifyContent={'center'}>
            <RevealFx
                speed={'fast'}
                delay={0}
            >
                <Flex
                    position="relative"
                    overflow="hidden"
                    fillWidth
                    minHeight="0"
                    maxWidth={68}
                    direction="column"
                    alignItems="center"
                    flex={1}>
                    <Flex
                        maxWidth={'m'}
                        fillWidth
                        fillHeight
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Flex
                            fillWidth
                            fitHeight
                            direction={'column'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            gap={'s'}
                        >
                            <Flex
                                direction={'row'}
                                gap={'s'}
                                alignItems={'center'}
                            >
                                <Avatar
                                    size="xl"
                                    style={{zIndex: '1'}}
                                    src={data ? data.data.avatarURL : ''}
                                />
                                <Flex
                                    direction={'column'}
                                    gap={'s'}
                                    maxWidth={'xs'}>
                                    <Flex
                                        direction={'column'}
                                        gap={'2'}
                                        justifyContent={'space-between'}
                                    >
                                        <Heading
                                            variant={'heading-strong-xl'}>
                                            {data ? data.data.globalName : ''}
                                        </Heading>
                                        <Text
                                            variant={'heading-default-s'}>
                                            {data ? data.data.username : ''}
                                        </Text>
                                    </Flex>
                                    <Text>
                                        Just another JS/TS developer. Doing my own projects, writing libraries, writing bots and trying to make websites.
                                    </Text>
                                    <Text>
                                        I suffer from procrastination and problems with concentration.
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex
                                justifyContent={'space-between'}
                                gap={'s'}>
                                <IconButton
                                    icon={'github'}
                                    href={'https://github.com/hitomihiumi'}
                                    variant={'secondary'}
                                />
                                <IconButton
                                    icon={'telegram'}
                                    href={'https://t.me/tutachyota'}
                                    variant={'secondary'}
                                />
                                <IconButton
                                    icon={'steam'}
                                    href={'https://steamcommunity.com/id/Fan_Doctor_Who_Fan/'}
                                    variant={'secondary'}
                                />
                                <IconButton
                                    icon={'youtube'}
                                    href={'https://www.youtube.com/@hitomihiumi'}
                                    variant={'secondary'}
                                />
                                <IconButton
                                    icon={'discord'}
                                    href={'https://discord.com/users/991777093312585808'}
                                    variant={'secondary'}
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </RevealFx>
        </Flex>
    );
}