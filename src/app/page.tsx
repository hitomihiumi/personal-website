'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
    Button,
    Line
} from '@/once-ui/components';

import { User, Presence } from '@/lib/types';
import { ButtonMenu } from "@/components/components/ButtonMenu";
import { AvatarSection } from "@/components/home/AvatarSection";
import { InfoSection } from "@/components/home/InfoSection";
import { PresenceSection } from "@/components/home/PresenceSection";

import styles from '@/components/home/InfoSection.module.scss';

export default function Home() {
    const [data, setData] = React.useState<User>();
    const [presence, setPresence] = React.useState<Presence>();

    useEffect(() => {
        const cacheKey = 'user-991777093312585808';
        const cached = localStorage.getItem(cacheKey);
        const now = Date.now();

        if (cached) {
            const { timestamp, data } = JSON.parse(cached);
            if (now - timestamp < 600_000) {
                setData(data);
                return;
            }
        }

        fetch('https://api.hitomihiumi.xyz/v1/users/991777093312585808?content=withoutPresence')
            .then(res => res.json() as Promise<User>)
            .then(res => {
                let data = res;
                data.avatarURL = data.avatarURL.replace('?size=4096', '?size=256');
                setData(data);
                localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, data: data }));
            });
    }, []);

    useEffect(() => {
        const cacheKey = 'presence-991777093312585808';
        const cached = localStorage.getItem(cacheKey);
        const now = Date.now();

        if (cached) {
            const { timestamp, data } = JSON.parse(cached);
            if (now - timestamp < 5_000) {
                setPresence(data);
                return;
            }
        }

        fetch('https://api.hitomihiumi.xyz/v1/users/991777093312585808?content=presence')
            .then(res => res.json() as Promise<Presence>)
            .then(res => {
                let data = res;
                setPresence(data);
                localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, data: data }));
            });
    }, []);

    return (
        <Flex
            fill
            paddingX="l"
            paddingY="l"
            direction="column"
            gap={'24'}
            horizontal={'center'}
            vertical={'center'}>
            <Flex
                fillWidth
                direction="row"
                mobileDirection={'column'}
                horizontal={'center'}
            >
                <AvatarSection
                    size={'xl'}
                    src={data?.avatarURL}
                    frame={data?.avatarDecorationURL}
                    loading={!data}
                >
                    <Flex
                        direction={'column'}
                        horizontal={'center'}>
                        <ButtonMenu
                            prefixIcon={'clipboard'}
                            label={'Utils'}
                            size={'s'}
                            dropdown={
                            <>
                                <Flex
                                    direction={'column'}
                                    gap={'2'}
                                    padding={'4'}
                                    horizontal={'space-between'}>
                                    <Button
                                        fillWidth
                                        label={'Find avatar?'}
                                        prefixIcon={'search'}
                                        href={'https://lens.google.com/uploadbyurl?url=' + data?.avatarURL}
                                        variant={'tertiary'}
                                        size={'s'}
                                        target={'_blank'}
                                    />
                                    <Line
                                        vert={false}
                                        background={'neutral-alpha-medium'}/>
                                    <Button
                                        fillWidth
                                        label={'Meow'}
                                        prefixIcon={'cat'}
                                        href={'/meow'}
                                        variant={'tertiary'}
                                        size={'s'}
                                    />
                                </Flex>
                            </>}
                        />
                    </Flex>
                </AvatarSection>
                <InfoSection>
                    <Flex
                        direction={'column'}
                        gap={'s'}
                        maxWidth={'xs'}>
                        <Flex
                            direction={'column'}
                            gap={'2'}
                        >
                            <Heading
                                variant={'display-strong-xl'}
                                className={styles.textAlign}
                            >
                                {data ? data.globalName : '...'}
                            </Heading>
                            <Text
                                variant={'display-default-xs'}
                                className={styles.textAlign}
                                onBackground="neutral-weak"
                            >
                                {data ? data.username : 'hitomihiumi'}
                            </Text>
                        </Flex>
                        <Flex
                            direction={'column'}
                            gap={'s'}
                            className={styles.about}
                        >
                            <Text
                                variant={'body-default-l'}
                            >
                                Just another JS/TS developer. Doing my own projects, writing libraries, writing bots and trying to make websites.
                            </Text>
                        </Flex>
                    </Flex>
                </InfoSection>
            </Flex>
            {presence && (
                <>
                    <PresenceSection
                        data={presence}
                    >
                    </PresenceSection>
                </>
            )}
        </Flex>
    );
}