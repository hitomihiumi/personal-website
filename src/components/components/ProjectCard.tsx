"use client";

import { usePathname } from "next/navigation";

import {
    Flex,
    Text,
    SmartImage,
    Line,
    IconButton,
    Icon
} from "@/once-ui/components";
import { Project } from "@/lib/types";

export interface ProjectCardProps {
    data: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    data
                                                        }) => {
    let statusString = data.status === 'progress' ? 'In Progress' : (data.status === 'completed' ? 'Completed' : (data.status === 'frozen' ? 'Frozen' : (data.status === 'archived' ? 'Archived' : 'Abandoned')));

    return (
        <>
            <Flex
                maxWidth={36}
                maxHeight={16}
                minWidth={36}
                fitHeight
                radius={'l-4'}
                background={'overlay'}
                border={'neutral-alpha-medium'}
                direction={'column'}
            >
                <Flex
                    padding={'xs'}
                    paddingX={'m'}
                    gap={'s'}
                >
                    <Flex
                        fillWidth
                        direction={'row'}
                        gap={'s'}
                        vertical={'space-between'}
                    >
                        <Flex
                            direction={'column'}
                            gap={'xs'}
                        >
                            <Text variant="body-strong-xl">
                                {data.name}
                            </Text>
                            <Text
                                variant="body-default-m"
                                onBackground="neutral-weak">
                                {data.description}
                            </Text>
                        </Flex>
                        <SmartImage
                            sizes={'128px'}
                            fillWidth
                            maxWidth={7}
                            aspectRatio={'1 / 1'}
                            src={data.image}
                        />
                    </Flex>
                </Flex>
                <Line background={'neutral-alpha-medium'} />
                <Flex
                    padding={'xs'}
                    paddingX={'m'}
                    gap={'s'}
                    direction={'row'}
                    horizontal={'space-between'}
                    vertical={'center'}
                    >
                    <Flex
                        gap={'s'}>
                        <Icon
                            name={'code'}
                            size={'xs'}
                            onBackground={'neutral-weak'}
                        />
                        <Text
                            onBackground={'neutral-weak'}
                            variant={'body-default-s'}
                        >
                            {statusString}
                        </Text>
                    </Flex>
                    <Flex
                        gap={'xs'}>
                        <IconButton
                            href={data.github}
                            icon={'github'}
                            variant={'secondary'}
                        />
                        {data.website && (
                            <IconButton
                                href={data.website}
                                icon={'document'}
                                variant={'secondary'}
                            />
                        )}
                        {data.npm && (
                            <IconButton
                                href={data.npm}
                                icon={'npm'}
                                variant={'secondary'}
                            />
                        )}
                    </Flex>
                    <Flex
                        gap={'s'}>
                        <Icon
                            name={data.language.toLowerCase()}
                            size={'xs'}
                            onBackground={'neutral-weak'}
                        />
                        <Text
                            onBackground={'neutral-weak'}
                            variant={'body-default-s'}
                        >
                            {data.language}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export const ProjectCardMobile: React.FC<ProjectCardProps> = ({
    data
}) => {
    let statusString = data.status === 'progress' ? 'In Progress' : (data.status === 'completed' ? 'Completed' : (data.status === 'frozen' ? 'Frozen' : (data.status === 'archived' ? 'Archived' : 'Abandoned')));

    return (
        <>
            <Flex
                maxWidth={24}
                minWidth={24}
                radius={'l-4'}
                background={'overlay'}
                border={'neutral-alpha-medium'}
                direction={'column'}
            >
                <Flex
                    padding={'s'}
                    paddingX={'m'}
                    gap={'s'}
                >
                    <Flex
                        fillWidth
                        fillHeight
                        direction={'row'}
                        gap={'s'}
                        vertical={'space-between'}
                    >
                        <Flex
                            direction={'column'}
                            gap={'xs'}
                        >
                            <Text variant="body-strong-xl">
                                {data.name}
                            </Text>
                            <Text
                                variant="body-default-m"
                                onBackground="neutral-weak">
                                {data.description}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    direction={'column'}
                    vertical={'end'}
                >
                    <Line background={'neutral-alpha-medium'} />
                    <Flex
                        padding={'s'}
                        paddingX={'m'}
                        gap={'s'}
                        direction={'row'}
                        horizontal={'space-between'}
                        vertical={'center'}
                    >
                        <Flex
                            gap={'s'}>
                            <Icon
                                name={'code'}
                                size={'xs'}
                                onBackground={'neutral-weak'}
                            />
                            <Text
                                onBackground={'neutral-weak'}
                                variant={'body-default-s'}
                            >
                                {statusString}
                            </Text>
                        </Flex>
                        <Flex
                            gap={'xs'}>
                            <IconButton
                                href={data.github}
                                icon={'github'}
                                variant={'secondary'}
                            />
                            {data.website && (
                                <IconButton
                                    href={data.website}
                                    icon={'document'}
                                    variant={'secondary'}
                                />
                            )}
                            {data.npm && (
                                <IconButton
                                    href={data.npm}
                                    icon={'npm'}
                                    variant={'secondary'}
                                />
                            )}
                        </Flex>
                        <Flex
                            gap={'s'}>
                            <Icon
                                name={data.language.toLowerCase()}
                                size={'xs'}
                                onBackground={'neutral-weak'}
                            />
                            <Text
                                onBackground={'neutral-weak'}
                                variant={'body-default-s'}
                            >
                                {data.language}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}