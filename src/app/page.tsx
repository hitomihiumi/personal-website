'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
    Button,
    Line
} from '@/once-ui/components';

import { User, UserData, Presence, PresenceData } from '@/lib/types';
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
            .then(res => res.json() as Promise<UserData>)
            .then(res => {
                let data = res.data;
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
            if (now - timestamp < 10_000) {
                setPresence(data);
                return;
            }
        }

        fetch('https://api.hitomihiumi.xyz/v1/users/991777093312585808?content=presence')
            .then(res => res.json() as Promise<PresenceData>)
            .then(res => {
                let data = res.data;
                setPresence(data);
                localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, data: data }));
            });
    }, []);

    return (
        <Flex
            fillWidth
            paddingX="l"
            paddingY="xl"
            maxWidth={'m'}
            direction="column"
            horizontal={'center'}>
            <Flex
                direction="row"
                mobileDirection={'column'}>
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
                            prefixIcon={'socialShare'}
                            label={'Socials'}
                            size={'s'}
                            dropdown={
                            <>
                                <Flex
                                    direction={'column'}
                                    gap={'4'}
                                    padding={'4'}
                                    horizontal={'space-between'}>
                                    <Button
                                        fillWidth
                                        label={'Github'}
                                        prefixIcon={'github'}
                                        href={'https://github.com/hitomihiumi'}
                                        variant={'tertiary'}
                                        size={'s'}
                                        target={'_blank'}
                                    />
                                    <Button
                                        fillWidth
                                        label={'Telegram'}
                                        prefixIcon={'telegram'}
                                        href={'https://t.me/tutachyota'}
                                        variant={'tertiary'}
                                        size={'s'}
                                        target={'_blank'}
                                    />
                                    <Button
                                        fillWidth
                                        label={'Steam'}
                                        prefixIcon={'steam'}
                                        href={'https://steamcommunity.com/id/Fan_Doctor_Who_Fan/'}
                                        variant={'tertiary'}
                                        size={'s'}
                                        target={'_blank'}
                                    />
                                    <Button
                                        fillWidth
                                        label={'Youtube'}
                                        prefixIcon={'youtube'}
                                        href={'https://www.youtube.com/@hitomihiumi'}
                                        variant={'tertiary'}
                                        size={'s'}
                                        target={'_blank'}
                                    />
                                    <Button
                                        fillWidth
                                        label={'Discord'}
                                        prefixIcon={'discord'}
                                        href={'https://discord.com/users/991777093312585808'}
                                        variant={'tertiary'}
                                        size={'s'}
                                        target={'_blank'}
                                    />
                                </Flex>
                                <Line
                                    vert={false}
                                    background={'neutral-alpha-medium'}/>
                                <Flex
                                    direction={'column'}
                                    gap={'4'}
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
                            <Text
                                variant={'body-default-l'}
                            >
                                I suffer from procrastination and problems with concentration.
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