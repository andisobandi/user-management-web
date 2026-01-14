import React from "react";

import { cx } from "@utils/cx";
import { dataAttr } from "@utils/attr-utils";
import { ButtonLoader } from "./button-loader";
import { useButtonContext } from "./button-context";
import { getButtonClasses } from "./button-styles";

export const Button = React.forwardRef((props, ref) => {
  const {
    children,
    loading = false,
    spinner,
    loadingText = "",
    spinnerPlacement,
    disabled = false,
    size,
    variant,
    colorScheme,
    rounded,
    className,
    type = "button",
    ...rest
  } = props;

  const button = useButtonContext();

  const getButtonVariant = () => {
    if (variant) return variant;
    if (button?.variant) return button.variant;
    return "solid";
  };

  const getButtonColor = () => {
    if (colorScheme) return colorScheme;
    if (button?.colorScheme) return button.colorScheme;
    return "gray";
  };

  const getButtonSize = () => {
    if (size) return size;
    if (button?.size) return button.size;
    return "md";
  };

  const buttonSize = getButtonSize();
  const buttonColor = getButtonColor();
  const buttonVariant = getButtonVariant();

  const classes = getButtonClasses({
    size: buttonSize,
    variant: buttonVariant,
    colorScheme: buttonColor,
  });

  return (
    <button
      ref={ref}
      type={type}
      data-loading={dataAttr(loading)}
      disabled={disabled || loading}
      className={cx(classes, className)}
      {...rest}
    >
      {loading ? (
        <ButtonLoader spinner={spinner} text={loadingText} spinnerPlacement={spinnerPlacement}>
          {children}
        </ButtonLoader>
      ) : (
        children
      )}
    </button>
  );
});
