'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
} from '@/once-ui/components';

import { User } from '@/lib/types';
import { AvatarSection } from "@/components/home/AvatarSection";
import { InfoSection } from "@/components/home/InfoSection";

import styles from '@/components/home/InfoSection.module.scss';

export default function Home() {
    const [data, setData] = React.useState<User>();

    useEffect(() => {
        const cacheKey = 'user-661867805368516630';
        const cached = localStorage.getItem(cacheKey);
        const now = Date.now();

        if (cached) {
            const { timestamp, data } = JSON.parse(cached);
            if (now - timestamp < 600_000) {
                setData(data);
                return;
            }
        }

        fetch('https://api.hitomihiumi.xyz/v1/users/661867805368516630?content=withoutPresence')
            .then(res => res.json() as Promise<User>)
            .then(res => {
                let data = res;
                data.avatarURL = data.avatarURL.replace('?size=4096', '?size=256');
                setData(data);
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
                                {data ? data.globalName : 'Katerina'}
                            </Heading>
                            <Text
                                variant={'display-default-xs'}
                                className={styles.textAlign}
                                onBackground="neutral-weak"
                            >
                                {data ? data.username : '__.katerina.__'}
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
                                Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow.
                            </Text>
                        </Flex>
                    </Flex>
                </InfoSection>
            </Flex>
        </Flex>
    );
}