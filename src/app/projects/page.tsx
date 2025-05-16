'use client';

import React, {useEffect} from 'react';

import {
    Heading,
    Text,
    Flex,
} from '@/once-ui/components';
import {
    ProjectCard,
    ComponentCarousel } from "@/components/components";
import { Project } from "@/lib/types";

const list: Project[] = [
    {
        key: 1,
        name: '@nmmty/lazycanvas',
        description: 'LazyCanvas provides you with classes and methods to interact with @napi-rs/canvas more easily.',
        image: 'https://raw.githubusercontent.com/NMMTY/LazyCanvas/6a9c4163f7e72ab9b2bf006e6b26d78b1869607e/resources/logo.svg',
        github: 'https://github.com/NMMTY/LazyCanvas',
        npm: 'https://www.npmjs.com/package/@nmmty/lazycanvas',
        status: 'progress',
        language: 'TypeScript',
        tags: [
            {
                variant: 'info',
                size: 's',
                label: 'npm'
            },
            {
                variant: 'neutral',
                size: 's',
                label: 'canvas'
            },
            {
                variant: 'neutral',
                size: 's',
                label: 'napi-rs'
            }
        ]
    },
    {
        key: 2,
        name: '@hitomihiumi/filewatcher',
        description: 'A simple file watcher for Node.js. This is a simple file watcher that uses chokidar to watch files and directories.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/hitomihiumi/filewatcher',
        npm: 'https://www.npmjs.com/package/@hitomihiumi/filewatcher',
        status: 'progress',
        language: 'TypeScript',
        tags: [
            {
                variant: 'info',
                size: 's',
                label: 'npm'
            },
            {
                variant: 'neutral',
                size: 's',
                label: 'file'
            },
            {
                variant: 'neutral',
                size: 's',
                label: 'watcher'
            }
        ]
    },
    {
        key: 3,
        name: '@hitomihiumi/micro-docgen',
        description: 'TypeScript documentation generator on steroids 💉. MicroDocgen is built on top of typedoc to leverage its power and add more features.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/hitomihiumi/micro-docgen',
        npm: 'https://www.npmjs.com/package/@hitomihiumi/micro-docgen',
        status: 'progress',
        language: 'TypeScript',
        tags: [
            {
                variant: 'info',
                size: 's',
                label: 'npm'
            },
            {
                variant: 'neutral',
                size: 's',
                label: 'docgen'
            }
        ]
    },
    {
        key: 4,
        name: '@hitomihiumi/colors.ts',
        description: 'A simple module to get colors in the terminal. This is a version of colors.js that causes minimal problems when used with TS.',
        image: '/trademark/icon.svg',
        github: 'https://github.com/hitomihiumi/colors.ts',
        npm: 'https://www.npmjs.com/package/@hitomihiumi/colors.ts',
        status: 'completed',
        language: 'TypeScript',
        tags: [
            {
                variant: 'info',
                size: 's',
                label: 'npm'
            },
            {
                variant: 'neutral',
                size: 's',
                label: 'colors'
            }
        ]
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
                    direction={'column'}
                    gap={'l'}
                    horizontal={'center'}
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
                            align={'center'}>
                            Here is a partial list of my projects, some are no longer in development and some are waiting to be replaced.
                        </Text>
                    </Flex>
                    <Flex
                        fit
                    >
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
            </Flex>
        </>
    )
}