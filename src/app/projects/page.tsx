'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
    Grid
} from '@/once-ui/components';
import {
    ProjectCard,
    ProjectCardMobile,
    ComponentCarousel } from "@/components/components";
import { Project } from "@/lib/types";

const list: Project[] = [
    {
        key: 1,
        name: '@nmmty/lazycanvas',
        description: 'LazyCanvas provides you with classes and methods to interact with @napi-rs/canvas more easily.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/NMMTY/LazyCanvas',
        npm: 'https://www.npmjs.com/package/@nmmty/lazycanvas',
        status: 'progress',
        language: 'TypeScript'
    },
    {
        key: 2,
        name: '@hitomihiumi/filewatcher',
        description: 'A simple file watcher for Node.js. This is a simple file watcher that uses chokidar to watch files and directories.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/hitomihiumi/filewatcher',
        npm: 'https://www.npmjs.com/package/@hitomihiumi/filewatcher',
        status: 'progress',
        language: 'TypeScript'
    },
    {
        key: 3,
        name: '@hitomihiumi/micro-docgen',
        description: 'TypeScript documentation generator on steroids 💉. MicroDocgen is built on top of typedoc to leverage its power and add more features.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/hitomihiumi/micro-docgen',
        npm: 'https://www.npmjs.com/package/@hitomihiumi/micro-docgen',
        status: 'progress',
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
                horizontal={'center'}
                vertical={'center'}>
                <Flex
                    //@ts-ignore
                    hide={'m' || 's'}
                    direction={'column'}
                    gap={'l'}
                >
                    <Flex
                        fillWidth
                        paddingX={'m'}
                        horizontal={'center'}
                        vertical={'center'}
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
                    horizontal={'center'}
                    fillWidth
                    gap={'l'}
                >
                    <Flex
                        fillWidth
                        paddingX={'m'}
                        horizontal={'center'}
                        vertical={'center'}
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
                        horizontal={'center'}
                        gap={'l'}>
                        <ComponentCarousel>
                            {list.map((item) => {
                                return (
                                    <ProjectCard
                                        key={item.key}
                                        data={item}
                                    />
                                )
                            })}
                        </ComponentCarousel>
                    </Flex>
                </Flex>
                <Flex
                    show={'s'}
                    direction={'column'}
                    horizontal={'center'}
                    fillWidth
                    gap={'l'}
                >
                    <Flex
                        fillWidth
                        paddingX={'m'}
                        horizontal={'center'}
                        vertical={'center'}
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
                        horizontal={'center'}
                        gap={'l'}>
                        <ComponentCarousel
                        >
                            {list.map((item) => {
                                return (
                                    <ProjectCardMobile
                                        key={item.key}
                                        data={item}
                                    />
                                )
                            })}
                        </ComponentCarousel>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}