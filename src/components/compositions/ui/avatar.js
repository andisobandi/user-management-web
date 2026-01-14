import React from "react";

import { Avatar as BaseAvatar, AvatarGroup as BaseAvatarGroup } from "@components/common/avatar";

export const Avatar = React.forwardRef((props, ref) => {
  const {
    name: avatarName,
    src: srcAvatar,
    srcSet,
    loading,
    icon,
    fallback,
    children,
    ...rest
  } = props;
  return (
    <BaseAvatar.Root ref={ref} {...rest}>
      <BaseAvatar.Fallback name={avatarName}>{icon || fallback}</BaseAvatar.Fallback>
      <BaseAvatar.Image src={srcAvatar} srcSet={srcSet} loading={loading} />
      {children}
    </BaseAvatar.Root>
  );
});

export const AvatarGroup = BaseAvatarGroup;
