'use client';
import React, {useEffect} from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Avatar, Background, LetterFx, SparkleFx } from '@/once-ui/components';
import Link from 'next/link';

export interface Data {
    status: number;
    message: string;
    data: {
        id: string;
        bot: boolean;
        system: boolean;
        flags: number;
        username: string;
        globalName: string;
        discriminator: string;
        avatar: string;
        banner: string;
        accentColor: string;
        avatarDecoration: string;
        badges: string[];
        avatarDecorationURL: string;
        avatarURL: string;
        bannerURL: string;
        presence: {
            userId: string;
            guild: string;
            status: string;
            activities: Array<{
                name: string;
                type: number;
                url: string;
                details: string;
                state: string;
                applicationId: string;
                timestamps: {
                    start: number;
                    end: number;
                };
                party: {
                    id: string;
                    size: [number, number];
                };
                assets: {
                    largeImage: string;
                    largeText: string;
                    smallImage: string;
                    smallText: string;
                };
                flags: number;
                emoji: string;
                buttons: Array<any>;
                createTimestamp: number;
            }>
        }
    }
}

export default function Home() {
    const [data, setData] = React.useState<Data>()

    useEffect(() => {
        fetch('https://api.hitomihiumi.xyz/v1/users/991777093312585808')
            .then(res => res.json())
            .then(setData)
    }, [])

    return (
        <Flex
            fillWidth paddingTop="l" paddingX="l"
            direction="column" alignItems="center" flex={1}>
            <Flex
                position="relative"
                as="section" overflow="hidden"
                fillWidth minHeight="0" maxWidth={68}
                direction="column" alignItems="center" flex={1}>
                <Flex
                    as="main"
                    direction="column" justifyContent="center"
                    fillWidth fillHeight padding="l" gap="l">
                    <Flex
                        mobileDirection="column"
                        fillWidth gap="24">
                        <Flex
                            position="relative"
                            flex={2}
                            className="lg:justify-end lg:items-center md:justify-end md:items-center sm:justify-left sm:items-center lg:pb-24 md:pb-24 sm:pl-6"
                        >
                            <Avatar
                                size="xl"
                                style={{zIndex: '1'}}
                                src={data ? data.data.avatarURL : ''}
                            />
                        </Flex>
                        <Flex
                            position="relative"
                            flex={4} gap="24" marginBottom="104"
                            direction="column">
                            <Heading
                                wrap="balance"
                                variant="display-strong-s">
								<span className="font-code">
									<SparkleFx
                                        speed="medium"
                                        count={50}
                                        trigger
                                    >
										<LetterFx
                                            trigger="instant">
										HitomiHiumi
										</LetterFx>
									</SparkleFx>
								</span>
                            </Heading>
                            <Text
                                variant="body-default-s"
                                className="lg:pr-0 md:pr-8 sm:pr-8"
                            >
                                <LetterFx
                                    trigger="instant">
                                    I'm a developer. I mostly write in JS/TS, Node.js. I mainly write various
                                    modules,
                                    as well as bots for Discord to order. On the buttons below you can go to the
                                    site
                                    with documentation on my modules.
                                </LetterFx>
                            </Text>
                            <Button
                                href="https://docs.hitomihiumi.xyz/"
                                suffixIcon="chevronRight"
                                variant="secondary">
                                Read docs
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                as="footer"
                position="relative"
                fillWidth paddingX="l" paddingY="m"
                justifyContent="space-between">
                <Text
                    variant="body-default-s" onBackground="neutral-weak">
                    © 2024 hitomihiumi, <Link
                    href="https://github.com/hitomihiumi/personal-website?tab=MIT-1-ov-file">MIT
                    License</Link>
                </Text>
                <Flex
                    gap="12">
                    <Button
                        href="https://github.com/hitomihiumi"
                        prefixIcon="github" size="s" variant="tertiary">
                        GitHub
                    </Button>
                    <Button
                        href="https://discord.com/users/991777093312585808"
                        prefixIcon="discord" size="s" variant="tertiary">
                        Discord
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}