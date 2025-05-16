"use client";

import React from "react";
import { DropdownWrapper, IconButton, ButtonProps, Button } from "@/once-ui/components";
import { DropdownWrapperProps } from "@/once-ui/components/DropdownWrapper";

interface ButtonMenuProps extends ButtonProps,
    Pick<DropdownWrapperProps, "minHeight" | "minWidth" | "maxWidth"> {
    selected?: boolean;
    dropdown?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    label?: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({
    selected = false,
    dropdown,
    minWidth,
    maxWidth,
    minHeight,
    className,
    style,
    label,
    ...buttonProps
}) => {
    return (
        <DropdownWrapper
            minWidth={minWidth}
            maxWidth={maxWidth}
            minHeight={minHeight}
            floatingPlacement={'bottom'}
            style={{
                borderRadius: "var(--radius-full)",
            }}
            trigger={
                <>
                    {label ? (
                    <Button
                        label={label}
                        variant="secondary"
                        size="m"
                        {...buttonProps}
                    />
                    ) : (
                    <IconButton
                        variant="secondary"
                        size="m"
                        icon={buttonProps.prefixIcon}
                        {...buttonProps}
                    />
                    )}
                </>
            }
            dropdown={<>{dropdown}</>}
            className={className}
        />
    );
};

ButtonMenu.displayName = "ButtonMenu";
export { ButtonMenu };