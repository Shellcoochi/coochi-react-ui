import React from "react";
import classNames from "classnames";

export interface IButtonProps {
  onClick?: React.MouseEventHandler;
  // 类型
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  dashed?: boolean;
  link?: boolean;
  text?: boolean;
  // 尺寸
  xLarge?: boolean;
  large?: boolean;
  small?: boolean;
  xSmall?: boolean;
  xxSmall?: boolean;
  // 颜色
  success?: boolean;
  warn?: boolean;
  danger?: boolean;
  // 禁用状态
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Button = (props: IButtonProps) => {
  const {
    className: tempClassName,
    style,
    onClick,
    children,
    primary,
    secondary,
    outline,
    dashed,
    link,
    text,
    xLarge,
    large,
    small,
    xSmall,
    xxSmall,
    success,
    danger,
    warn,
    disabled,
  } = props;

  const className = classNames(
    {
      "pony-button": true,
      "pony-button-primary": primary,
      "pony-button-secondary": secondary && !text,
      "pony-button-outline": outline,
      "pony-button-dashed": dashed,
      "pony-button-link": link,
      "pony-button-text": text && !secondary,
      "pony-button-text-secondary": secondary && text,
      "pony-button-xl": xLarge,
      "pony-button-lg": large,
      "pony-button-sm": small,
      "pony-button-xs": xSmall,
      "pony-button-xxs": xxSmall,
      "pony-button-success": success,
      "pony-button-warn": warn,
      "pony-button-danger": danger,
      "pony-button-disabled": disabled,
    },
    tempClassName
  );

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="pony-button__content">{children}</span>
    </button>
  );
};
