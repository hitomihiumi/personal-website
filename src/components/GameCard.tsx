"use client";

import React, { forwardRef } from "react";

import { Skeleton, Icon, Text, StatusIndicator, Flex, SmartImage } from "@/once-ui/components";
import styles from "./GameCard.module.scss";
import { ExtendedSteamGame } from "@/lib/types";

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
        const isEmpty = empty || (!data);

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
                        <SmartImage
                            src={data.library_capsule}
                            alt="Capsule"
                            fill
                            maxWidth={'xl'}
                            maxHeight={'xl'}
                            radius={'m'}
                            sizes={`${sizeMapping[size]}px`}
                            className={styles.image}
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
                onClick={() => window.open("https://store.steampowered.com/app/" + data.appid, "_blank")}
                justifyContent="center"
                alignItems="center"
                border={'neutral-strong'}
                radius={'m'}
                style={style}
                className={`${styles.avatar} ${styles[size]} ${className || ""}`}
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
            </Flex>
        );
    },
);

GameCard.displayName = "GameCard";

export { GameCard };
export type { GameCardProps };
