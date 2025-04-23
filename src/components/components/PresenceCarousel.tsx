"use client";

import { Flex, RevealFx } from "@/once-ui/components";
import { useEffect, useState, useRef } from "react";
import { Presence as IPresence } from "@/lib/types";
import { Presence } from "@/components/components/Presence";

interface PresenceCarouselProps extends React.ComponentProps<typeof Flex> {
    presence: IPresence;
    revealedByDefault?: boolean;
}

const PresenceCarousel: React.FC<PresenceCarouselProps> = ({
                                                             presence,
                                                             revealedByDefault = false,
                                                             ...rest
                                                         }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState(revealedByDefault);
    const [initialTransition, setInitialTransition] = useState(revealedByDefault);
    const transitionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const handleImageClick = () => {
        if (presence.activities.length > 1) {
            const nextIndex = (activeIndex + 1) % presence.activities.length;
            handleControlClick(nextIndex);
        }
    };

    const handleControlClick = (nextIndex: number) => {
        if (nextIndex !== activeIndex && !transitionTimeoutRef.current) {

            setIsTransitioning(false);

            transitionTimeoutRef.current = setTimeout(() => {
                setActiveIndex(nextIndex);

                setTimeout(() => {
                    setIsTransitioning(true);
                    transitionTimeoutRef.current = undefined;
                }, 300);
            }, 800);
        }
    };

    useEffect(() => {
        if (!revealedByDefault && !initialTransition) {
            setIsTransitioning(true);
            setInitialTransition(true);
        }
        return () => {
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        };
    }, [revealedByDefault, initialTransition]);

    if (presence.activities.length === 0) {
        return null;
    }

    return (
        <Flex
            fillWidth
            gap="8"
            direction="column"
            {...rest}>
            <Flex
                maxHeight={8}
                minHeight={8}
                vertical={'center'}
                horizontal={'center'}
            >
                <RevealFx
                    onClick={handleImageClick}
                    fillWidth
                    trigger={isTransitioning}
                    translateY="16"
                    speed="fast"
                >
                    <Presence data={presence.activities[activeIndex]}/>
                </RevealFx>
            </Flex>
            {presence.activities.length > 1 && (
                <>
                    <Flex gap="4" paddingX="s" fillWidth vertical="center">
                        {presence.activities.map((_, index) => (
                            <Flex
                                key={index}
                                onClick={() => handleControlClick(index)}
                                style={{
                                    background:
                                        activeIndex === index
                                            ? "var(--neutral-on-background-strong)"
                                            : "var(--neutral-alpha-medium)",
                                    cursor: "pointer",
                                    transition: "background 0.3s ease",
                                }}
                                fillWidth
                                height="2"
                            ></Flex>
                        ))}
                    </Flex>
                </>
            )}
        </Flex>
    );
};

PresenceCarousel.displayName = "PresenceCarousel";
export { PresenceCarousel };
