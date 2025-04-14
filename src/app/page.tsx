'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
    IconButton,
    RevealFx,
    Option
} from '@/once-ui/components';

import { Data } from '@/lib/types';
import { ButtonMenu } from "@/components/ButtonMenu";
import { AvatarWFrame } from "@/components/AvatarWFrame";

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
            vertical="center"
            horizontal={'center'}>
            <RevealFx
                speed={'fast'}
                delay={0}
            >
                <Flex
                    position="relative"
                    overflow="hidden"
                    fillWidth
                    minHeight="0"
                    maxWidth={36}
                    direction="column"
                    vertical="center"
                    flex={1}>
                    <Flex
                        fillWidth
                        fillHeight
                        direction={'column'}
                        vertical={'center'}
                        horizontal={'center'}
                    >
                        <Flex
                            fillWidth
                            fitHeight
                            direction={'column'}
                            vertical={'center'}
                            horizontal={'center'}
                            gap={'s'}
                        >
                            <Flex
                                direction={'row'}
                                gap={'s'}
                                vertical={'center'}
                                background={'page'}
                                border={'neutral-alpha-strong'}
                                radius={'xl-8'}
                                padding={'s'}
                            >
                                <AvatarWFrame
                                    size="xl"
                                    style={{zIndex: '1'}}
                                    src={data ? data.data.avatarURL : ''}
                                    frame={data ? data.data.avatarDecorationURL : ''}
                                    radius={'full'}
                                />
                                <Flex
                                    direction={'column'}
                                    gap={'s'}
                                    maxWidth={'xs'}>
                                    <Flex
                                        direction={'column'}
                                        gap={'2'}
                                        horizontal={'space-between'}
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
                                horizontal={'space-between'}
                                gap={'s'}>
                                <IconButton
                                    icon={'github'}
                                    href={'https://github.com/hitomihiumi'}
                                    variant={'secondary'}
                                    target={'_blank'}
                                />
                                <IconButton
                                    icon={'telegram'}
                                    href={'https://t.me/tutachyota'}
                                    variant={'secondary'}
                                    target={'_blank'}
                                />
                                <IconButton
                                    icon={'steam'}
                                    href={'https://steamcommunity.com/id/Fan_Doctor_Who_Fan/'}
                                    variant={'secondary'}
                                    target={'_blank'}
                                />
                                <IconButton
                                    icon={'youtube'}
                                    href={'https://www.youtube.com/@hitomihiumi'}
                                    variant={'secondary'}
                                    target={'_blank'}
                                />
                                <IconButton
                                    icon={'discord'}
                                    href={'https://discord.com/users/991777093312585808'}
                                    variant={'secondary'}
                                    target={'_blank'}
                                />
                                <ButtonMenu
                                    icon={'search'}
                                    dropdown={
                                    <>
                                       <Option
                                            value={'avatar'}
                                            label={'Find avatar?'}
                                            href={'https://lens.google.com/uploadbyurl?url=' + data?.data.avatarURL}
                                       />
                                    </>}
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </RevealFx>
        </Flex>
    );
}