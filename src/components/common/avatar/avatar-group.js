import React from "react";

import { cx } from "@utils/cx";
import { Group } from "@components/common/group";
import { AvatarProvider } from "./avatar-context";

export const AvatarGroup = React.forwardRef((props, ref) => {
  const { size, borderless, variant, shape, colorScheme, className, ...rest } = props;

  const avatarProps = {
    size,
    borderless,
    variant,
    shape,
    colorScheme,
  };

  return (
    <AvatarProvider value={avatarProps}>
      <Group ref={ref} className={cx("gap-0 -space-x-3", className)} {...rest} />
    </AvatarProvider>
  );
});
