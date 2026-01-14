import React from "react";
import { Field as ArkField } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { getTextareaClasses } from "./textarea-styles";

export const Textarea = React.forwardRef((props, ref) => {
  const {
    variant = "outline",
    size = "md",
    colorScheme = "gray",
    unstyled,
    className,
    ...rest
  } = props;

  const textareaProps = {
    variant,
    size,
    colorScheme,
  };

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

  const computedClass = !unstyled ? cx(getTextareaClasses(textareaProps), className) : undefined;

  return (
    <ArkField.Textarea
      ref={ref}
      {...(!unstyled && { className: computedClass })}
      style={{
        "--focus-color": focusColorMap[colorScheme],
      }}
      {...rest}
    />
  );
});
