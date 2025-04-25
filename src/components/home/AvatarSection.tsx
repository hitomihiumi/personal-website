"use client";

import styles from "@/components/home/AvatarSection.module.scss";

import { AvatarWFrame } from "@/components/components";
import { Flex } from "@/once-ui/components";
import React, { forwardRef } from "react";

export interface AvatarSectionProps {
    size?: "xs" | "s" | "m" | "l" | "xl";
    value?: string;
    src?: string;
    frame?: string | null;
    loading?: boolean;
    empty?: boolean;
    statusIndicator?: {
        color: "green" | "yellow" | "red" | "gray";
    };
    flexProps?: React.ComponentProps<typeof Flex>;
}

export const AvatarSection = forwardRef<HTMLDivElement, AvatarSectionProps & React.ComponentProps<typeof Flex>> (
    ({
        size = "m",
        value,
        src,
        frame,
        loading,
        empty,
        statusIndicator,
        className, style, children, flexProps, ...props }, ref) => {
    return (
        <Flex
            className={styles.position}
            paddingX={'l'}
            direction={'column'}
            vertical={'center'}
            horizontal={'center'}
            gap={'s'}
            minWidth={'160'}
            ref={ref}
            style={{
                ...style
            }}
            {...props}
        >
            <AvatarWFrame
                size={size}
                style={{zIndex: '1'}}
                src={src}
                frame={frame}
                loading={loading}
                empty={empty}
                statusIndicator={statusIndicator}
                value={value}
                radius={'full'}
            />
            {children}
        </Flex>
    )
})