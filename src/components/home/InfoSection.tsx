"use client";

import styles from "@/components/home/InfoSection.module.scss";

import { Flex } from "@/once-ui/components";
import React, { forwardRef } from "react";

export interface AvatarSectionProps {
    flexProps?: React.ComponentProps<typeof Flex>;
}

export const InfoSection = forwardRef<HTMLDivElement, AvatarSectionProps & React.ComponentProps<typeof Flex>> (
    ({
         className, style, children, flexProps, ...props }, ref) => {
        return (
            <Flex
                className={styles.position}
                ref={ref}
                style={{
                    ...style
                }}
                {...props}
            >
                {children}
            </Flex>
        )
    })