"use client";

import styles from "@/components/home/PresenceSection.module.scss";

import { Flex } from "@/once-ui/components";
import React, { forwardRef } from "react";
import type { Presence as IPresence } from "@/lib/types";
import { ComponentCarousel, Presence } from "@/components/components";

export interface PresenceSectionProps {
    data?: IPresence;
    flexProps?: React.ComponentProps<typeof Flex>;
}

export const PresenceSection = forwardRef<HTMLDivElement, PresenceSectionProps & React.ComponentProps<typeof Flex>> (
    ({
         className, style, children, data, flexProps, ...props }, ref) => {
        return (
            <Flex
                fit
                horizontal={'center'}
                className={styles.position}
                ref={ref}
                style={{
                    ...style
                }}
                {...props}
            >
                {data && (
                    <>
                        <ComponentCarousel
                            fit>
                            {data.activities.map((activity, index) => (
                                <>
                                    <Presence data={activity} key={index}/>
                                </>
                            ))}
                        </ComponentCarousel>
                    </>
                )}
                {children}
            </Flex>
        )
    })