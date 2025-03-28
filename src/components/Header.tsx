"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton } from "@/once-ui/components";
import { Line } from "@/components/Line";
import styles from "@/components/Header.module.scss";

import { routes } from "@/once-ui/resources/config";

type TimeDisplayProps = {
    timeZone: string;
    locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
    const pathname = usePathname() ?? "";

    return (
        <>
            <Flex
                fitHeight
                className={styles.position}
                as={"header"}
                zIndex={9}
                fillWidth
                padding={"16"}
                justifyContent={'center'}
            >
                <Flex
                    fillWidth
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                >
                    <Flex
                        paddingLeft={'40'}
                        textVariant={"label-strong-l"}
                        gap={"20"}
                    >
                        <Flex hide="s">Europe/Kiev</Flex>
                    </Flex>
                </Flex>
                <Flex
                    fillWidth
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Flex
                        background="surface"
                        border="neutral-medium"
                        radius="m-4"
                        shadow="l"
                        padding="4"
                        alignItems={'center'}
                    >
                        <Flex
                            gap="4"
                            justifyContent={'center'}
                            textVariant="body-default-s">
                            {routes["/"] && (
                                <ToggleButton prefixIcon="person" href="/" selected={pathname === "/"} />
                            )}
                            <Line
                                vertical
                                fillWidth
                                size={2}
                                maxHeight="24"
                            />
                            {routes["/projects"] && (
                                <>
                                    <Flex hide={'s'}>
                                        <ToggleButton
                                            prefixIcon="grid"
                                            href="/projects"
                                            label={'Projects'}
                                            selected={pathname === "/projects"}
                                        />
                                    </Flex>
                                    <Flex show={'s'}>
                                        <ToggleButton
                                            prefixIcon="grid"
                                            href="/projects"
                                            selected={pathname === "/projects"}
                                        />
                                    </Flex>
                                </>
                            )}
                            {routes["/steam"] && (
                                <>
                                    <Flex hide={'s'}>
                                        <ToggleButton
                                            prefixIcon="steam"
                                            href="/steam"
                                            label={'Steam'}
                                            selected={pathname === "/steam"}
                                        />
                                    </Flex>
                                    <Flex show={'s'}>
                                        <ToggleButton
                                            prefixIcon="steam"
                                            href="/steam"
                                            selected={pathname === "/steam"}
                                        />
                                    </Flex>
                                </>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    fillWidth
                    justifyContent={'flex-end'}
                    alignItems={'center'}
                >
                    <Flex
                        paddingRight={"40"}
                        textVariant={"label-strong-l"}
                        gap={"20"}
                    >
                        <Flex hide="s"><TimeDisplay timeZone={`Europe/Kiev`} /></Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};