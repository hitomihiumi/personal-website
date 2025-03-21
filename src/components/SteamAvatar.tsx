"use client";

import React, { forwardRef } from "react";

import { Skeleton, Icon, Text, StatusIndicator, Flex, SmartImage } from "@/once-ui/components";
import styles from "./SteamAvatar.module.scss";

interface SteamAvatarProps extends React.ComponentProps<typeof Flex> {
    size?: "xs" | "s" | "m" | "l" | "xl";
    value?: string;
    src?: string;
    frame?: string | null;
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

const SteamAvatar = forwardRef<HTMLDivElement, SteamAvatarProps>(
    ({ size = "m", value, src, frame, loading, empty, statusIndicator, className, style, ...rest }, ref) => {
        const isEmpty = empty || (!src && !value);

        if (value && src) {
            throw new Error("Avatar cannot have both 'value' and 'src' props.");
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

            if (src) {
                return (
                    <>
                        <SmartImage
                            src={src}
                            alt="Avatar"
                            fill
                            maxWidth={'160'}
                            maxHeight={'160'}
                            sizes={`${sizeMapping[size]}px`}
                            className={styles.image}
                        />
                        {frame && (
                            <SmartImage
                                src={frame}
                                fill
                                alt="Frame"
                                sizes={`${styles[size]}px`}
                                position={'absolute'}
                                className={styles.frame}
                            />
                        )}
                    </>
                );
            }

            if (value) {
                return (
                    <Text
                        as="span"
                        onBackground="neutral-weak"
                        variant={`body-default-${size}`}
                        className={styles.value}
                        aria-label={`Avatar with initials ${value}`}
                    >
                        {value}
                    </Text>
                );
            }

            return null;
        };

        return (
            <Flex
                ref={ref}
                role="img"
                position="relative"
                justifyContent="center"
                alignItems="center"
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

SteamAvatar.displayName = "Avatar";

export { SteamAvatar };
export type { SteamAvatarProps };
