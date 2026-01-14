import React from "react";
import { Avatar as ArkAvatar } from "@ark-ui/react";

import { cx } from "@utils/cx";

export const AvatarImage = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <ArkAvatar.Image
      ref={ref}
      className={cx("size-full object-cover rounded-[var(--avatar-radius)]", className)}
      {...rest}
    />
  );
});
