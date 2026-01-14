import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useComboboxContext } from "./combobox-context";
import { comboboxClasses } from "./combobox-styles";

export const ComboboxInput = React.forwardRef((props, ref) => {
  const { className, unstyled = false, ...rest } = props;

  const combobox = useComboboxContext();
  const classes = !unstyled ? comboboxClasses.getInputClasses(combobox) : null;

  const focusColorMap = {
    gray: "#a1a1aa",
    red: "#f87171",
    green: "#4ade80",
    blue: "#60a5fa",
    teal: "#2dd4bf",
    pink: "#f472b6",
    cyan: "#22d3ee",
    purple: "#c084fc",
    orange: "#fb923c",
    yellow: "#facc15",
  };

  return (
    <ArkCombobox.Input
      ref={ref}
      className={cx(classes, className)}
      style={{
        "--input-height": "var(--combobox-input-height)",
        "--focus-color": focusColorMap[combobox.colorScheme],
      }}
      {...rest}
    />
  );
});
