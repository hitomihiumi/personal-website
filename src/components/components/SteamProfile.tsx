"use client";

import React, { forwardRef } from "react";
import classNames from "classnames";
import { Flex, Media, Text } from "@/once-ui/components";
import { ExtendedSteamProfile } from "@/lib/types";
import { AvatarWFrame, BlurFlex } from "@/components/components";

import styles from "@/components/components/SteamProfile.module.scss";

interface SteamProfileProps {
    profileData?: ExtendedSteamProfile;
}

const SteamProfile = forwardRef<HTMLDivElement, SteamProfileProps & React.ComponentProps<typeof Flex>>(
    ({ profileData, className, style, children, ...props }, ref) => {

        return (
            <Flex
                borderWidth={2}
                radius={'xl'}
                overflow={'hidden'}
                position="relative"
                horizontal={'center'}
            >
                <Media
                    position={'absolute'}
                    objectFit={'cover'}
                    zIndex={-1}
                    src={profileData?.background ? profileData.background : ''}
                    loading={!profileData?.background}
                />
                <BlurFlex
                    blurAmount={20}
                    blurColor="rgba(0, 0, 0, 0.4)"
                    blurFade={0.8}
                >
                    <Flex
                        fillWidth
                        fillHeight
                        horizontal={'center'}
                        vertical={'center'}
                        className={styles.contentFlex}
                        padding={'s'}
                    >
                        <AvatarWFrame
                            size={'xl'}
                            src={profileData ? profileData.avatarfull : ''}
                            frame={profileData ? profileData.frame : ''}
                        />
                        <Flex
                            fillHeight
                            gap="12"
                            direction={'column'}
                            horizontal={'start'}
                        >
                            <Flex
                                direction={'column'}
                            >
                                <Text
                                    variant={'display-strong-s'}
                                    className={styles.white}
                                >{profileData ? profileData.personaname : ''}</Text>
                                <Text
                                    variant={'body-strong-xl'}
                                    className={styles.white}
                                >{profileData ? profileData.realname : ''}</Text>
                            </Flex>
                            <Flex
                                fillWidth
                            >
                                <Flex
                                    fillWidth
                                    gap={'4'}
                                    horizontal={'center'}
                                    direction={'column'}
                                >
                                    {profileData?.locstatecode && (
                                        <Flex
                                            fillWidth
                                            fillHeight
                                            gap={'8'}
                                        >
                                            <Media
                                                src={`/country/${profileData.loccountrycode?.toLowerCase()}.svg`}
                                                fill
                                                maxWidth={'24'}
                                                maxHeight={'24'}
                                                minHeight={'24'}
                                                minWidth={'24'}
                                                radius={'full'}
                                                alt={profileData.loccountrycode}
                                                sizes={'20px'}
                                            />
                                            <Text
                                                variant={'body-strong-l'}
                                                className={styles.white}
                                            >
                                                {profileData ? profileData.loccountrycode : ''}
                                            </Text>
                                        </Flex>
                                    )}
                                    {profileData?.level && (
                                        <Flex
                                            fillWidth
                                        >
                                            <Text
                                                variant={'body-strong-l'}
                                                className={styles.white}
                                            >
                                                Level {profileData ? profileData.level : '0'}
                                            </Text>
                                        </Flex>
                                    )}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </BlurFlex>
            </Flex>
        );
    }
);

SteamProfile.displayName = "SteamProfile";

export { SteamProfile };
