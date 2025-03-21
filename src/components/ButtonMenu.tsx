"use client";

import React from "react";
import classNames from "classnames";
import { Flex, DropdownWrapper, IconButton, IconButtonProps } from "@/once-ui/components";
import styles from "./ButtonMenu.module.scss";
import { DropdownWrapperProps } from "@/once-ui/components/DropdownWrapper";

interface ButtonMenuProps extends IconButtonProps,
    Pick<DropdownWrapperProps, "minHeight" | "minWidth" | "maxWidth"> {
    selected?: boolean;
    dropdown?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({
    selected = false,
    dropdown,
    minWidth,
    maxWidth,
    minHeight,
    className,
    style,
    ...buttonProps
}) => {
    return (
        <DropdownWrapper
            minWidth={minWidth}
            maxWidth={maxWidth}
            minHeight={minHeight}
            style={{
                borderRadius: "var(--radius-full)",
            }}
            trigger={
                <IconButton
                    variant="secondary"
                    size="m"
                    {...buttonProps}
                />
            }
            dropdown={<>{dropdown}</>}
        />
    );
};

ButtonMenu.displayName = "ButtonMenu";
export { ButtonMenu };