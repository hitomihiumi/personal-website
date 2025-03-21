'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
    Grid, Column, Background, Avatar, SmartImage, TiltFx, Button
} from '@/once-ui/components';
import { SteamAvatar } from "@/components/SteamAvatar";
import { ExtendedSteamProfile, ExtendedSteamResponse, ExtendedSteamUsers, ExtendedSteamGame } from "@/lib/types";

import { GameCard } from "@/components/GameCard";
import { BlurFlex } from "@/components/BlurFlex";

export default function Home() {
    const [data, setData] = React.useState<ExtendedSteamProfile>();

    useEffect(() => {
        fetch('https://api.hitomihiumi.xyz/v2/steam/user/76561198904028626', { next: { revalidate: 6000 }, cache: 'default' })
            .then(res => res.json() as Promise<ExtendedSteamUsers>)
            .then(res => setData(res.response.players[0]))
    }, [])

    return (
        <>
            <Flex
                paddingX={'l'}
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                fillWidth
                fillHeight
            >
                <Flex
                    fillWidth
                    fillHeight
                    justifyContent={'center'}
                    alignItems={'center'}
                    direction={'column'}
                    gap={'m'}
                >
                    {data && (
                        <>
                            <Column
                                fillWidth
                                maxWidth={'s'}
                                position="relative"
                                hide={'s'}
                            >
                                <Flex
                                    borderWidth={2}
                                    radius={'xl'}
                                    overflow={'hidden'}
                                    position="relative"
                                    justifyContent={'center'}
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
                                            alignItems={'center'}
                                            justifyContent={'center'}
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
                                                alignItems={'left'}
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
                                                        alignItems={'center'}
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
                            <Column
                                fillWidth
                                maxWidth={'xs'}
                                position="relative"
                                show={'s'}
                            >
                                <Flex
                                    borderWidth={2}
                                    radius={'xl'}
                                    overflow={'hidden'}
                                    position="relative"
                                    justifyContent={'center'}
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
                                        fillWidth
                                        blurAmount={20}
                                        blurColor="rgba(0, 0, 0, 0.4)"
                                        blurFade={0.8}
                                        flexProps={{
                                            fillWidth: true,
                                            fillHeight: true,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '12',
                                            padding: 's',
                                            direction: 'column'
                                        }}
                                    >
                                        <Flex
                                            fillWidth
                                            fillHeight
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            gap={'12'}
                                            padding={'s'}
                                            direction={'column'}
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
                                                alignItems={'left'}
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
                                                    fillHeight
                                                    gap={'4'}
                                                    alignItems={'center'}
                                                    justifyContent={'flex-end'}
                                                    direction={'column'}
                                                >
                                                    {data?.locstatecode && (
                                                        <Flex
                                                            fillWidth
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
                                    </BlurFlex>
                                </Flex>
                            </Column>
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
                        </>
                    )}
                    {data === undefined && (
                        <Heading
                            variant={'display-strong-m'}
                        >Loading...</Heading>
                    )}
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
                                alignItems={'center'}
                                justifyContent={'center'}
                                gap={'32'}
                            >
                                    <Flex
                                        fillWidth
                                        gap={'24'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
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
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    gap={'32'}
                                >
                                    <Flex
                                        fillWidth
                                        gap={'24'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
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
                                justifyContent={'center'}
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
                                        alignItems={'center'}
                                        justifyContent={'center'}
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
                                            alignItems={'left'}
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
                                                    alignItems={'center'}
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