import React from "react";
export interface IButtonProps {
    onClick?: React.MouseEventHandler;
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    dashed?: boolean;
    link?: boolean;
    text?: boolean;
    xLarge?: boolean;
    large?: boolean;
    small?: boolean;
    xSmall?: boolean;
    xxSmall?: boolean;
    success?: boolean;
    warn?: boolean;
    danger?: boolean;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
