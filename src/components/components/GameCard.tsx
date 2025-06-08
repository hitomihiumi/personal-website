"use client";

import React, { forwardRef } from "react";

import {Skeleton, Icon, Text, StatusIndicator, Flex, Media, Spinner} from "@/once-ui/components";
import styles from "./GameCard.module.scss";
import { ExtendedSteamGame } from "@/lib/types";
import { minutesToHours } from "@/lib/utils"

interface GameCardProps extends React.ComponentProps<typeof Flex> {
    size?: "xs" | "s" | "m" | "l" | "xl";
    data: ExtendedSteamGame;
    loading?: boolean;
    empty?: boolean;
    statusIndicator?: {
        color: "green" | "yellow" | "red" | "gray";
    };
    style?: React.CSSProperties;
    className?: string;
}

const sizeMapping: Record<"xs" | "s" | "m" | "l" | "xl", number> = {
    xs: 20,
    s: 24,
    m: 32,
    l: 48,
    xl: 160,
};

const statusIndicatorSizeMapping: Record<"xs" | "s" | "m" | "l" | "xl", "s" | "m" | "l"> = {
    xs: "s",
    s: "s",
    m: "m",
    l: "m",
    xl: "l",
};

const GameCard = forwardRef<HTMLDivElement, GameCardProps>(
    ({ size = "m", data, loading, empty, statusIndicator, className, style, ...rest }, ref) => {
        const [active, setActive] = React.useState<boolean>(false);
        const isEmpty = empty || (!data);

        const handleMouseEnter = () => {
            setActive(true);
        }

        const handleMouseLeave = () => {
            setActive(false);
        }

        if (loading) {
            return (
                <Skeleton
                    {...rest}
                    style={{
                        border: "1px solid var(--neutral-border-medium)",
                    }}
                    shape="circle"
                    width={size}
                    height={size}
                    className={`${styles.avatar} ${className}`}
                    aria-busy="true"
                    aria-label="Loading avatar"
                />
            );
        }

        const renderContent = () => {
            if (isEmpty) {
                return (
                    <Icon
                        onBackground="neutral-medium"
                        name="person"
                        size={size as "xs" | "s" | "m" | "l" | "xl"}
                        className={styles.icon}
                        aria-label="Empty avatar"
                    />
                );
            }

            if (data.library_capsule) {
                return (
                    <>
                        <Media
                            src={data.library_capsule}
                            alt={data.name + " capsule"}
                            fill
                            maxWidth={'xl'}
                            maxHeight={'xl'}
                            radius={'m'}
                            sizes={`${sizeMapping[size]}px`}
                            className={styles.image}
                            style={{
                                cursor: "pointer",
                                filter: active ? "grayscale(1)" : "",
                            }}
                        />
                    </>
                );
            }
            return null;
        };

        return (
            <Flex
                ref={ref}
                role="img"
                position="relative"
                cursor="interactive"
                overflow={'hidden'}
                onClick={() => window.open("https://store.steampowered.com/app/" + data.appid, "_blank")}
                vertical="center"
                horizontal="center"
                border={'neutral-strong'}
                radius={'m'}
                style={style}
                className={`${styles.avatar} ${styles[size]} ${styles.upload}} ${className || ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...rest}
            >
                {renderContent()}
                {statusIndicator && (
                    <StatusIndicator
                        size={statusIndicatorSizeMapping[size]}
                        color={statusIndicator.color}
                        className={`${styles.className || ""} ${styles.indicator} ${size === "xl" ? styles.position : ""}`}
                        aria-label={`Status: ${statusIndicator.color}`}
                    />
                )}
                <Flex
                    className={styles.upload}
                    zIndex={1}
                    transition="micro-medium"
                    position="absolute"
                    fill
                    padding="4"
                    horizontal="center"
                    vertical="center"
                >
                    {active && (
                        <Flex direction={'column'} fill vertical={'center'} gap={'8'}>
                            <Text variant="body-default-s" onBackground="neutral-strong"  align={'left'}>
                                {data.name}
                            </Text>
                            <Flex direction={'column'} gap={'2'}>
                                <Text variant="body-default-s" onBackground="neutral-medium"  align={'left'}>
                                    Total: {data.playtime_forever ? minutesToHours(data.playtime_forever) + "" : "No playtime recorded"}
                                </Text>
                                <Text variant="body-default-s" onBackground="neutral-medium"  align={'left'}>
                                    2 weeks: {data.playtime_2weeks ? minutesToHours(data.playtime_2weeks) : "Never"}
                                </Text>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        );
    },
);

GameCard.displayName = "GameCard";

export { GameCard };
export type { GameCardProps };
