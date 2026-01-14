import React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const DialogBackdrop = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Backdrop
      ref={ref}
      className={cx(
        "bg-tw-black-alpha-500 fixed left-0 top-0 w-screen h-dvh z-[var(--z-index)]",
        "tw-open:animate-[fade-in_300ms]",
        "tw-close:animate-[fade-out_200ms]",
        className
      )}
      {...rest}
    />
  );
});
