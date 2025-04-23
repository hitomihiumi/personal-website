"use client";

import { useEffect, useState } from "react";
import type { Activity } from "@/lib/types";

import { Flex, Heading, Text, SmartImage } from "@/once-ui/components";

import styles from "@/components/components/Presence.module.scss";

type PresenceTimeProps = {
    startTime: number;
    endTime?: number;
};

const PresenceTime: React.FC<PresenceTimeProps> = ({ startTime, endTime }) => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = Date.now();
            const elapsed = Math.max(0, now - startTime);
            const remaining = endTime ? Math.max(0, endTime - now) : 0;

            const totalSeconds = endTime ? remaining : elapsed;
            const hours = Math.floor(totalSeconds / 3600000);
            const minutes = Math.floor((totalSeconds % 3600000) / 60000);
            const seconds = Math.floor((totalSeconds % 60000) / 1000);

            const timeString = [
                hours > 0 ? String(hours).padStart(2, "0") : null,
                String(minutes).padStart(2, "0"),
                String(seconds).padStart(2, "0"),
            ]
                .filter(Boolean)
                .join(":");

            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [startTime, endTime]);

    return <>{currentTime} {endTime ? 'remains' : 'elapsed'}</>;
};

interface PresenceProps {
    data: Activity;
}

export const Presence: React.FC<PresenceProps> = ({ data }) => {

    return (
        <>
            <Flex
                fill
                direction={'column'}
                background={"overlay"}
                border={"neutral-alpha-medium"}
                radius={'l'}
                className={styles.base}
            >
                <Flex
                    fillWidth
                    padding={'12'}
                    gap={'16'}
                >
                    {data.assets.largeImage && (
                        <>
                            <SmartImage
                                src={data.assets.largeImage || ''}
                                aspectRatio={"1 / 1"}
                                alt={data.assets.largeText || ''}
                                fill
                                maxWidth={'104'}
                                maxHeight={'104'}
                                position={'relative'}
                                radius={'m'}
                            />
                        </>
                    )}
                    {data.assets.smallImage && (
                        <>
                            <SmartImage
                                src={data.assets.smallImage || ''}
                                aspectRatio={"1 / 1"}
                                alt={data.assets.smallText || ''}
                                fill
                                maxWidth={'32'}
                                maxHeight={'32'}
                                position={'fixed'}
                                radius={'full'}
                                marginLeft={'80'}
                                marginTop={'80'}
                                zIndex={1}
                            />
                        </>
                    )}
                    <Flex
                        direction={'column'}
                    >
                        {data.name && (
                            <>
                                <Heading
                                    variant={'heading-strong-xl'}
                                >
                                    {data.name.length > 14 ? data.name.slice(0, 11) + '...' : data.name}
                                </Heading>
                            </>
                        )}
                        {data.details && (
                            <>
                                <Text
                                    variant={'body-default-m'}
                                    onBackground={'neutral-medium'}>
                                    {data.details.length > 28 ? data.details.slice(0, 24) + '...' : data.details}
                                </Text>
                            </>
                        )}
                        {data.state && (
                            <>
                                <Text
                                    variant={'body-default-m'}
                                    onBackground={'neutral-medium'}>
                                    {data.state.length > 28 ? data.state.slice(0, 24) + '...' : data.state}
                                </Text>
                            </>
                        )}
                        {data.timestamps && (
                            <>
                                <Text
                                    variant={'body-default-m'}
                                    onBackground={'neutral-weak'}>
                                    <PresenceTime startTime={data.timestamps.start} endTime={data.timestamps.end} />
                                </Text>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};