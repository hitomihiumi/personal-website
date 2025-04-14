"use client";

import styles from "@/components/home/AvatarSection.module.scss";

import { AvatarWFrame } from "@/components/AvatarWFrame";
import { Flex } from "@/once-ui/components";
import React, { forwardRef } from "react";

export interface AvatarSectionProps {
    avatarURL: string;
    avatarDecorationURL: string;
    flexProps?: React.ComponentProps<typeof Flex>;
}

export const AvatarSection = forwardRef<HTMLDivElement, AvatarSectionProps & React.ComponentProps<typeof Flex>> (
    ({
        avatarURL,
        avatarDecorationURL,
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
                size="xl"
                style={{zIndex: '1'}}
                src={avatarURL}
                frame={avatarDecorationURL}
                radius={'full'}
            />
            {children}
        </Flex>
    )
})