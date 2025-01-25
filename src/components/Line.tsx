"use client";

import React, { forwardRef } from "react";
import { Flex } from "@/once-ui/components";

interface LineProps extends React.ComponentProps<typeof Flex> {
    vertical?: boolean;
    size?: number;
    style?: React.CSSProperties;
}

const Line = forwardRef<HTMLDivElement, LineProps>(
    ({ vertical, size, className, style, ...rest }, ref) => {
        return (
            <Flex
                ref={ref}
                minWidth={(vertical ? '1' : size) || undefined}
                minHeight={(!vertical ? '1' : size) || undefined}
                width={(vertical ? '1' : size) || undefined}
                height={(!vertical ? '1' : size) || undefined}
                fillWidth={!vertical}
                fillHeight={vertical}
                background="neutral-strong"
                direction={vertical ? "column" : "row"}
                className={className}
                style={style}
                {...rest}
            />
        );
    },
);

Line.displayName = "Line";
export { Line };