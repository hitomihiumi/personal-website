'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
    Grid
} from '@/once-ui/components';
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/lib/types";
import { ProjectCarousel } from "@/components/ProjectCarousel";

const list: Project[] = [
    {
        key: 1,
        name: '@nmmty/lazycanvas',
        description: 'A simple way to interact with @napi-rs/canvas in an advanced way! LazyCanvas provides you with classes and methods to interact with canvas more easily.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/NMMTY/LazyCanvas',
        website: 'https://github.com/NMMTY/LazyCanvas',
        npm: 'https://www.npmjs.com/package/@nmmty/lazycanvas',
        status: 'progress',
        language: 'TypeScript'
    },
    {
        key: 2,
        name: '@hitomihiumi/lazy-animation',
        description: 'This extension for @hitomihiumi/lazy-canvas made for create gif animations.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/hitomihiumi/lazy-animation',
        website: 'https://docs.hitomihiumi.xyz/',
        npm: 'https://www.npmjs.com/package/@hitomihiumi/lazy-animation',
        status: 'frozen',
        language: 'TypeScript'
    },
    {
        key: 3,
        name: '@hitomihiumi/lazy-canvas',
        description: 'This is a simple module designed to simplify the interaction with canvas, for people who do not know how to work with it.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/hitomihiumi/lazy-canvas-ts',
        website: 'https://docs.hitomihiumi.xyz/',
        npm: 'https://www.npmjs.com/package/@hitomihiumi/lazy-canvas',
        status: 'abandoned',
        language: 'TypeScript'
    },
    {
        key: 4,
        name: '@hitomihiumi/colors.ts',
        description: 'A simple module to get colors in the terminal. This is a version of colors.js that causes minimal problems when used with TS.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/hitomihiumi/colors.ts',
        npm: 'https://www.npmjs.com/package/@hitomihiumi/colors.ts',
        status: 'completed',
        language: 'TypeScript'
    }
]

export default function Home() {
    return (
        <>
            <Flex
                fillWidth
                fillHeight
                paddingX={'l'}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Flex
                    hide={'m' || 's'}
                    direction={'column'}
                    gap={'l'}
                >
                    <Flex
                        fillWidth
                        paddingX={'m'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={'m'}
                        direction={'column'}
                    >
                        <Heading variant={'display-strong-s'}>Projects</Heading>
                        <Text
                            variant={'body-default-xl'}
                            onBackground={'neutral-weak'}
                            paddingX={'xl'}
                            align={'center'}>
                            Here is a partial list of my projects, some are no longer in development and some are waiting to be replaced.
                        </Text>
                    </Flex>
                    <Grid
                        gap={'l'}
                        columns={2}
                        paddingX={'l'}
                    >
                        {list.map((item) => {
                            return (
                                <ProjectCard
                                    key={item.key}
                                    data={item}
                                />
                            )
                        })}
                    </Grid>
                </Flex>
                <Flex
                    show={'m'}
                    hide={'s'}
                    direction={'column'}
                    alignItems={'center'}
                    fillWidth
                    gap={'l'}
                >
                    <Flex
                        fillWidth
                        paddingX={'m'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={'m'}
                        direction={'column'}
                    >
                        <Heading variant={'display-strong-s'}>Projects</Heading>
                        <Text
                            variant={'body-default-l'}
                            onBackground={'neutral-weak'}
                            paddingX={'xl'}
                            align={'center'}>
                            Here is a partial list of my projects, some are no longer in development and some are waiting to be replaced.
                        </Text>
                    </Flex>
                    <Flex
                        direction={'column'}
                        alignItems={'center'}
                        gap={'l'}>
                        <ProjectCarousel
                            mobile={false}
                            projects={list}
                        />
                    </Flex>
                </Flex>
                <Flex
                    show={'s'}
                    direction={'column'}
                    alignItems={'center'}
                    fillWidth
                    gap={'l'}
                >
                    <Flex
                        fillWidth
                        paddingX={'m'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={'m'}
                        direction={'column'}
                    >
                        <Heading variant={'heading-strong-xl'}>Projects</Heading>
                        <Text
                            variant={'body-default-m'}
                            onBackground={'neutral-weak'}
                            paddingX={'xl'}
                            align={'center'}>
                            Here is a partial list of my projects, some are no longer in development and some are waiting to be replaced.
                        </Text>
                    </Flex>
                    <Flex
                        direction={'column'}
                        alignItems={'center'}
                        gap={'l'}>
                        <ProjectCarousel
                            mobile={true}
                            projects={list} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}