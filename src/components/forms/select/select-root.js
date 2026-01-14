import React from "react";
import { Select as ArkSelect } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { SelectProvider } from "./select-context";

export const SelectRoot = React.forwardRef((props, ref) => {
  const {
    className,
    size = "md",
    variant = "outline",
    positioning = { sameWidth: true },
    ...rest
  } = props;

  const selectProps = {
    size,
    variant,
  };

  const rootStyles = {
    triggerHeight: {
      xs: "2rem",
      sm: "2.25rem",
      md: "2.5rem",
      lg: "3rem",
    },
    triggerPaddingX: {
      xs: "0.5rem",
      sm: "0.625rem",
      md: "0.75rem",
      lg: "1rem",
    },
  };

  return (
    <SelectProvider value={selectProps}>
      <ArkSelect.Root
        ref={ref}
        positioning={positioning}
        className={cx("flex flex-col gap-1.5 w-full", className)}
        style={{
          "--select-trigger-height": rootStyles.triggerHeight[size],
          "--select-trigger-padding-x": rootStyles.triggerPaddingX[size],
        }}
        {...rest}
      />
    </SelectProvider>
  );
});
