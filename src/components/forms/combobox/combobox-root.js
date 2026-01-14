import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { ComboboxProvider } from "./combobox-context";

export const ComboboxRoot = React.forwardRef((props, ref) => {
  const { className, size = "md", variant = "outline", colorScheme = "gray", ...rest } = props;

  const comboboxProps = {
    size,
    variant,
    colorScheme,
  };

  const rootStyles = {
    height: {
      xs: "2rem",
      sm: "2.25rem",
      md: "2.5rem",
      lg: "3rem",
    },
    paddingX: {
      xs: "0.5rem",
      sm: "0.625rem",
      md: "0.75rem",
      lg: "1rem",
    },
    indicatorSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1rem",
      lg: "1.25rem",
    },
  };

  return (
    <ComboboxProvider value={comboboxProps}>
      <ArkCombobox.Root
        ref={ref}
        className={cx("flex flex-col gap-1.5 w-full", className)}
        style={{
          "--combobox-input-height": rootStyles.height[size],
          "--combobox-input-padding-x": rootStyles.paddingX[size],
          "--combobox-indicator-size": rootStyles.indicatorSize[size],
        }}
        {...rest}
      />
    </ComboboxProvider>
  );
});
