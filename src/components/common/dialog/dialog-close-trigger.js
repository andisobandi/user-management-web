import React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const DialogCloseTrigger = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.CloseTrigger ref={ref} className={cx("absolute top-2 end-2", className)} {...rest} />
  );
});
