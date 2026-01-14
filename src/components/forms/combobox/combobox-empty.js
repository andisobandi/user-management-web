import React from "react";
import { useComboboxContext as useArkComboboxContext } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const ComboboxEmpty = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const arkCombobox = useArkComboboxContext();

  if (arkCombobox.collection.size !== 0) return null;

  return (
    <div
      ref={ref}
      role="presentation"
      data-scope="combobox"
      data-part="empty"
      className={cx(
        "py-[var(--combobox-item-padding-y)] px-[var(--combobox-item-padding-x)]",
        className
      )}
      {...rest}
    />
  );
});

ComboboxEmpty.id = "ComboboxEmpty";
