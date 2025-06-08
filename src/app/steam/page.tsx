'use client';

import React, {useEffect} from 'react';

import {
    Flex,
    Column,
    Button,
    Background,
    Grid,
    TiltFx,
    Text, Accordion, CursorCard, Card
} from '@/once-ui/components';
import {
    ExtendedSteamGame,
    ExtendedSteamProfile,
    ExtendedSteamResponse,
    ExtendedSteamUsers
} from "@/lib/types";
import styles from "@/components/steam/page.module.scss";

import {GameCard, SteamProfile} from "@/components";

export default function Home() {
    const [data, setData] = React.useState<ExtendedSteamProfile>();
    const [recentlyPlayed, setRecentlyPlayed] = React.useState<ExtendedSteamGame[]>();

    useEffect(() => {
        const cacheKey = 'user-76561198904028626';
        const cached = localStorage.getItem(cacheKey);
        const now = Date.now();

        if (cached) {
            const { timestamp, data } = JSON.parse(cached);
            if (now - timestamp < 6000_000) {
                setData(data);
                return;
            }
        }

        fetch('https://api.hitomihiumi.xyz/v2/steam/user/76561198904028626')
            .then(res => res.json() as Promise<ExtendedSteamUsers>)
            .then(res => {
                setData(res.response.players[0]);
                localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, data: res.response.players[0] }));
            });
    }, []);

    useEffect(() => {
        const cacheKey = 'user-recently-76561198904028626';
        const cached = localStorage.getItem(cacheKey);
        const now = Date.now();

        if (cached) {
            const { timestamp, data } = JSON.parse(cached);
            if (now - timestamp < 6000_000) {
                setRecentlyPlayed(data);
                return;
            }
        }

        fetch('https://api.hitomihiumi.xyz/v2/steam/user/76561198904028626/games/recently')
            .then(res => res.json() as Promise<ExtendedSteamResponse>)
            .then(res => {
                setRecentlyPlayed(res.response.games)
                localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, data: res.response.games }));
            })
    }, []);

    return (
        <>
            <Flex
                paddingX={'l'}
                direction={'column'}
                vertical={'center'}
                horizontal={'center'}
                fillWidth
                fillHeight
            >
                <Flex
                    fillWidth
                    fillHeight
                    vertical={'center'}
                    horizontal={'center'}
                    direction={'column'}
                    gap={'m'}
                >
                    <Column
                        fillWidth
                        className={styles.baseColumn}
                        maxWidth={'s'}
                        gap={'s'}
                    >
                        <SteamProfile
                            profileData={data}/>
                        <Flex
                            fillWidth
                            horizontal={'center'}
                            direction={'column'}
                            gap={'s'}
                        >
                            <Flex
                                gap={'24'}
                            >
                                <Button
                                    variant={'secondary'}
                                    prefixIcon={'steam'}
                                    size={'m'}
                                    label={'Steam Profile'}
                                    href={'https://steamcommunity.com/id/Fan_Doctor_Who_Fan/'}
                                    target={'_blank'}
                                />
                            </Flex>

                            {recentlyPlayed && (
                                <Column
                                    fillWidth
                                    maxWidth={'s'}
                                    position="relative"
                                >
                                    <Accordion title={'Recently Played'}>
                                        <Column
                                            fillWidth
                                            fillHeight
                                            radius="xl"
                                            overflow="hidden"
                                            position="relative"
                                            border="neutral-alpha-weak"
                                        >
                                            <Background
                                                mask={{
                                                    x: 0,
                                                    y: 100,
                                                    radius: 100,
                                                }}
                                                position="absolute"
                                                lines={{
                                                    display: true,
                                                    opacity: 50,
                                                    size: '20',
                                                    thickness: 1,
                                                    angle: 135,
                                                    color: "brand-solid-strong"
                                                }}
                                                zIndex={-1}
                                            />
                                            <Background
                                                mask={{
                                                    x: 0,
                                                    y: 100,
                                                    radius: 100,
                                                }}
                                                position="absolute"
                                                gradient={{
                                                    display: true,
                                                    opacity: 100,
                                                    height: 100,
                                                    width: 100,
                                                    tilt: 0,
                                                    x: 100,
                                                    y: 0,
                                                    colorStart: "scheme-aqua-600",
                                                    colorEnd: "page-background",
                                                }}
                                                zIndex={-1}
                                            />
                                            <Column
                                                fillWidth
                                                fillHeight
                                                horizontal={'center'}
                                                vertical={'center'}
                                                paddingY={'m'}
                                                gap={'32'}
                                            >
                                                <Flex
                                                    fillWidth
                                                    gap={'24'}
                                                    horizontal={'center'}
                                                    vertical={'center'}
                                                    direction={'column'}
                                                >
                                                    <Text
                                                        variant={'body-strong-xl'}
                                                        onBackground={'neutral-strong'}
                                                    >Recently Played</Text>
                                                    <Grid
                                                        columns={'4'}
                                                        gap={'8'}
                                                    >
                                                        {recentlyPlayed.map((game: ExtendedSteamGame) => {
                                                            return (
                                                                <TiltFx
                                                                    key={game.appid}
                                                                >
                                                                    <GameCard
                                                                        key={game.appid}
                                                                        size={'xl'}
                                                                        data={game}
                                                                    />
                                                                </TiltFx>
                                                            )
                                                        })}
                                                    </Grid>
                                                </Flex>
                                            </Column>
                                        </Column>
                                    </Accordion>

                                </Column>
                            )}
                        </Flex>
                    </Column>
                </Flex>
            </Flex>
        </>
    )
}

/*
    const [recentGames, setRecentGames] = React.useState<ExtendedSteamResponse>();
    const [library, setLibrary] = React.useState<ExtendedSteamResponse>();
    const [page, setPage] = React.useState<number>(1);
        fetch('https://api.hitomihiumi.xyz/v2/steam/user/76561198904028626/games/recently', { next: { revalidate: 6000 }, cache: 'default' })
            .then(res => res.json() as Promise<ExtendedSteamResponse>)
            .then(res => setRecentGames(res))

        fetch('https://api.hitomihiumi.xyz/v2/steam/user/76561198904028626/games', { next: { revalidate: 6000 }, cache: 'default' })
            .then(res => res.json() as Promise<ExtendedSteamResponse>)
            .then(res => setLibrary(res))
{recentGames && (
                    <Column
                        fillWidth
                        maxWidth={'s'}
                        position="relative"
                    >
                        <Column
                            fillWidth
                            fillHeight
                            gap="48"
                            radius="xl"
                            padding={'m'}
                            overflow="hidden"
                            position="relative"
                            border="neutral-alpha-weak"
                        >
                            <Background
                                mask={{
                                    x: 50,
                                    y: 50,
                                }}
                                position="absolute"
                                grid={{
                                    display: true,
                                    color: "neutral-alpha-medium",
                                    width: "1.5rem",
                                    height: "1.5rem",
                                }}
                            />
                            <Background
                                mask={{
                                    x: 0,
                                    y: 100,
                                    radius: 100,
                                }}
                                position="absolute"
                                gradient={{
                                    display: true,
                                    opacity: 60,
                                    height: 100,
                                    width: 100,
                                    tilt: 0,
                                    x: 0,
                                    y: 100,
                                    colorStart: "brand-solid-strong",
                                    colorEnd: "brand-background-medium",
                                }}
                            />
                            <Column
                                fillWidth
                                fillHeight
                                horizontal={'center'}
                                vertical={'center'}
                                gap={'32'}
                            >
                                    <Flex
                                        fillWidth
                                        gap={'24'}
                                        horizontal={'center'}
                                        vertical={'center'}
                                        direction={'column'}
                                    >
                                        <Text
                                            variant={'body-strong-xl'}
                                            >Recently Played</Text>
                                        <Grid
                                            columns={'4'}
                                            gap={'8'}
                                        >
                                            {recentGames.response.games.map((game: ExtendedSteamGame) => {
                                                return (
                                                    <TiltFx
                                                        key={game.appid}
                                                    >
                                                        <GameCard
                                                            key={game.appid}
                                                            size={'xl'}
                                                            data={game}
                                                        />
                                                    </TiltFx>
                                                )
                                            })}
                                        </Grid>
                                    </Flex>
                            </Column>
                        </Column>
                    </Column>
                    )}
{library && (
                        <Column
                            fillWidth
                            maxWidth={'s'}
                            position="relative"
                        >
                            <Column
                                fillWidth
                                fillHeight
                                gap="48"
                                radius="xl"
                                padding={'m'}
                                overflow="hidden"
                                position="relative"
                                border="neutral-alpha-weak"
                            >
                                <Background
                                    mask={{
                                        x: 50,
                                        y: 50,
                                    }}
                                    position="absolute"
                                    grid={{
                                        display: true,
                                        color: "neutral-alpha-medium",
                                        width: "1.5rem",
                                        height: "1.5rem",
                                    }}
                                />
                                <Background
                                    mask={{
                                        x: 0,
                                        y: 100,
                                        radius: 100,
                                    }}
                                    position="absolute"
                                    gradient={{
                                        display: true,
                                        opacity: 60,
                                        height: 100,
                                        width: 100,
                                        tilt: 0,
                                        x: 0,
                                        y: 0,
                                        colorStart: "brand-solid-strong",
                                        colorEnd: "brand-background-medium",
                                    }}
                                />
                                <Column
                                    fillWidth
                                    fillHeight
                                    horizontal={'center'}
                                    vertical={'center'}
                                    gap={'32'}
                                >
                                    <Flex
                                        fillWidth
                                        gap={'24'}
                                        horizontal={'center'}
                                        vertical={'center'}
                                        direction={'column'}
                                    >
                                        <Text
                                            variant={'body-strong-xl'}
                                        >Library</Text>
                                        <Grid
                                            columns={'5'}
                                            gap={'8'}
                                        >
                                            {library.response.games.slice(10 * page, 10 + 10 * page).map((game: ExtendedSteamGame) => {
                                                return (
                                                    <TiltFx
                                                        key={game.appid}
                                                    >
                                                        <GameCard
                                                            key={game.appid}
                                                            size={'xl'}
                                                            data={game}
                                                        />
                                                    </TiltFx>
                                                )
                                            })}
                                        </Grid>
                                    </Flex>
                                </Column>
                            </Column>
                        </Column>
                    )}

                    {data && (
                        <Column
                            fillWidth
                            maxWidth={'s'}
                            position="relative"
                        >
                            <Flex
                                border={'neutral-alpha-weak'}
                                radius={'xl'}
                                overflow={'hidden'}
                                position="relative"
                                vertical={'center'}
                            >
                                {data.background && (
                                    <SmartImage
                                        position={'absolute'}
                                        objectFit={'cover'}
                                        zIndex={-1}
                                        src={data ? data.background : ''}
                                    />
                                )}
                                <BlurFlex
                                    blurAmount={20}
                                    blurColor="rgba(0, 0, 0, 0.4)"
                                    blurFade={0.8}
                                >
                                    <Flex
                                        fillWidth
                                        fillHeight
                                        horizontal={'center'}
                                        vertical={'center'}
                                        gap={'24'}
                                        padding={'s'}
                                    >
                                        <SteamAvatar
                                            size={'xl'}
                                            src={data ? data.avatarfull : ''}
                                            frame={data ? data.frame : ''}
                                        />
                                        <Flex
                                            fillHeight
                                            gap="12"
                                            direction={'column'}
                                            horizontal={'left'}
                                        >
                                            <Flex
                                                direction={'column'}
                                            >
                                                <Text
                                                    variant={'display-strong-s'}
                                                >{data ? data.personaname : ''}</Text>
                                                <Text
                                                    variant={'body-strong-xl'}
                                                >{data ? data.realname : ''}</Text>
                                            </Flex>
                                            <Flex
                                                fillWidth
                                            >
                                                <Flex
                                                    fillWidth
                                                    gap={'4'}
                                                    horizontal={'center'}
                                                    direction={'column'}
                                                >
                                                    {data?.locstatecode && (
                                                        <Flex
                                                            fillWidth
                                                            fillHeight
                                                            gap={'8'}
                                                        >
                                                            <SmartImage
                                                                src={`/country/${data.loccountrycode?.toLowerCase()}.svg`}
                                                                fill
                                                                maxWidth={'24'}
                                                                maxHeight={'24'}
                                                                radius={'full'}
                                                                alt={data.loccountrycode}
                                                                sizes={'20px'}
                                                            />
                                                            <Text
                                                                variant={'body-strong-l'}
                                                            >
                                                                {data ? data.loccountrycode : ''}
                                                            </Text>
                                                        </Flex>
                                                    )}
                                                    {data?.level && (
                                                        <Flex
                                                            fillWidth
                                                        >
                                                            <Text
                                                                variant={'body-strong-l'}
                                                            >
                                                                Level {data ? data.level : ''}
                                                            </Text>
                                                        </Flex>
                                                    )}
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </BlurFlex>
                            </Flex>
                        </Column>
                    )}
 */