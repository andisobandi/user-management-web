import React from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { useComboboxContext } from "./combobox-context";
import { comboboxClasses } from "./combobox-styles";

export function ComboboxContent(props) {
  const { children, className, ...rest } = props;

  const combobox = useComboboxContext();
  const classes = comboboxClasses.getContentClasses(combobox);

  const contentStyles = {
    itemPaddingX: {
      xs: "0.375rem",
      sm: "0.5rem",
      md: "0.5rem",
      lg: "0.75rem",
    },
    itemPaddingY: {
      xs: "0.25rem",
      sm: "0.375rem",
      md: "0.375rem",
      lg: "0.5rem",
    },
    indicatorSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1rem",
      lg: "1.25rem",
    },
  };

  return (
    <ArkCombobox.Content
      className={cx(classes, className)}
      style={{
        "--combobox-item-padding-x": contentStyles.itemPaddingX[combobox.size],
        "--combobox-item-padding-y": contentStyles.itemPaddingY[combobox.size],
        "--combobox-indicator-size": contentStyles.indicatorSize[combobox.size],
      }}
      {...rest}
    >
      {children}
    </ArkCombobox.Content>
  );
}
