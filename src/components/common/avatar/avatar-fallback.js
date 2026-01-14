import React from "react";
import { Avatar as ArkAvatar } from "@ark-ui/react";

import { cx } from "@utils/cx";

const AvatarIcon = React.forwardRef((props, ref) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1.2em"
      width="1.2em"
      ref={ref}
      {...props}
    >
      <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
    </svg>
  );
});

function getInitials(name) {
  const names = name.trim().split(" ");
  const firstName = names[0] != null ? names[0] : "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

function getFallbackChildren(props) {
  if (props.children || props.asChild) return props.children;
  if (props.name) return getInitials(props.name);
  return <AvatarIcon />;
}

export const AvatarFallback = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <ArkAvatar.Fallback
      ref={ref}
      className={cx(
        "leading-4 uppercase font-medium text-[length:var(--avatar-font-size)] rounded-[var(--avatar-radius)]",
        className
      )}
      {...rest}
    >
      {getFallbackChildren(rest)}
    </ArkAvatar.Fallback>
  );
});
