import React from "react";
import { Avatar as ArkAvatar } from "@ark-ui/react";

import { cx } from "@utils/cx";
import { AvatarProvider, useAvatarContext } from "./avatar-context";
import { avatarClasses } from "./avatar-styles";

export const AvatarRoot = React.forwardRef((props, ref) => {
  const { className, size, variant, shape, colorScheme, borderless, ...rest } = props;

  const avatar = useAvatarContext();

  const avatarVariant = variant ?? avatar?.variant ?? "subtle";
  const avatarSize = size ?? avatar?.size ?? "md";
  const avatarShape = shape ?? avatar?.shape ?? "full";
  const avatarColorScheme = colorScheme ?? avatar?.colorScheme ?? "gray";
  const avatarBorderless = borderless ?? avatar?.borderless ?? false;

  const avatarProps = {
    size: avatarSize,
    variant: avatarVariant,
    shape: avatarShape,
    colorScheme: avatarColorScheme,
    borderless: avatarBorderless,
  };

  const classes = avatarClasses.getRootClasses(avatarProps);

  return (
    <AvatarProvider value={avatarProps}>
      <ArkAvatar.Root ref={ref} className={cx(classes, className)} {...rest} />
    </AvatarProvider>
  );
});
