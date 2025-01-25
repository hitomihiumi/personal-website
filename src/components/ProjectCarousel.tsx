"use client";

import { Flex, RevealFx } from "@/once-ui/components";
import { useEffect, useState, useRef } from "react";
import { Project } from "@/lib/types";
import { ProjectCard, ProjectCardMobile } from "@/components/ProjectCard";

interface ProjectCarouselProps extends React.ComponentProps<typeof Flex> {
    projects: Project[];
    mobile?: boolean;
    revealedByDefault?: boolean;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
                                                             projects = [],
                                                             mobile = false,
                                               revealedByDefault = false,
                                               ...rest
                                           }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState(revealedByDefault);
    const [initialTransition, setInitialTransition] = useState(revealedByDefault);
    const transitionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const handleImageClick = () => {
        if (projects.length > 1) {
            const nextIndex = (activeIndex + 1) % projects.length;
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

    if (projects.length === 0) {
        return null;
    }

    return (
        <Flex fillWidth gap="12" direction="column" {...rest}>
            <Flex
                maxHeight={12}
                minHeight={12}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <RevealFx
                    onClick={handleImageClick}
                    fillWidth
                    trigger={isTransitioning}
                    translateY="16"
                    speed="fast"
                >
                    {mobile ? (
                        <ProjectCardMobile
                            key={projects[activeIndex].key}
                            data={projects[activeIndex]}
                        />
                    ) : (
                        <ProjectCard
                            key={projects[activeIndex].key}
                            data={projects[activeIndex]}
                        />
                    )}
                </RevealFx>
            </Flex>
            {projects.length > 1 && (
                <>
                    <Flex gap="4" paddingX="s" fillWidth justifyContent="center">
                        {projects.map((_, index) => (
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

ProjectCarousel.displayName = "ProjectCarousel";
export { ProjectCarousel };
