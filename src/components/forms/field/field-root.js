import React from "react";
import { Field as ArkField } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { FieldProvider } from "./field-context";

export const FieldRoot = React.forwardRef((props, ref) => {
  const { className, orientation = "vertical", ...rest } = props;

  return (
    <FieldProvider value={{ orientation, ...rest }}>
      <ArkField.Root
        ref={ref}
        className={cx(
          "flex w-full relative gap-1.5",
          {
            "flex-col items-start": orientation === "vertical",
            "flex-row items-center justify-between": orientation === "horizontal",
          },
          className
        )}
        {...rest}
      />
    </FieldProvider>
  );
});
