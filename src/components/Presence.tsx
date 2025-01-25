"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Data } from "@/lib/types";

import { Flex, Heading, Text, SmartImage } from "@/once-ui/components";

interface PresenceProps {
    data: Data;
}

export const Presence: React.FC<PresenceProps> = ({ data }) => {
    const pathname = usePathname() ?? "";

    return (
        <>
            <Flex
            >
                <SmartImage
                    src={data.data.presence.activities[1].assets.largeImage}
                    aspectRatio={"1/1"}
                    height={100}
                />
            </Flex>
        </>
    );
};