"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton, Line } from "@/once-ui/components";
import styles from "@/components/components/Header.module.scss";

import { routes } from "@/app/resources/config";

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
                vertical={'center'}
            >
                <Flex
                    fillWidth
                    horizontal={'start'}
                    vertical={'center'}
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
                    vertical={'center'}
                    horizontal={'center'}
                >
                    <Flex
                        background={"overlay"}
                        border={"neutral-alpha-medium"}
                        radius="m-4"
                        shadow="l"
                        padding="4"
                        vertical={'center'}
                    >
                        <Flex
                            gap="4"
                            horizontal={'center'}
                            textVariant="body-default-s">
                            {routes["/"] && (
                                <ToggleButton prefixIcon="person" href="/" selected={pathname === "/"} />
                            )}
                            <Line
                                vert={true}
                                height={2}
                                background={"neutral-alpha-medium"}
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
                    horizontal={'end'}
                    vertical={'center'}
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