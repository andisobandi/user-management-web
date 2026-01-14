import { cx } from "@utils/cx";

function getRootClasses(params) {
  return cx(
    "inline-flex items-center justify-center relative",
    "align-top shrink-0 select-none font-medium",
    "w-[var(--avatar-size)] h-[var(--avatar-size)]",
    "text-[length:var(--avatar-font-size)] rounded-[var(--avatar-radius)]",
    "[&[data-group-item]]:border-white",
    {
      "[&[data-group-item]]:border-2": !params.borderless,
      "[&[data-group-item]]:border-0": params.borderless,
    },
    {
      "tw-avatar-radius-rounded": params.shape === "rounded",
      "tw-avatar-radius-full": params.shape === "full",
    },
    {
      "tw-avatar-size-full tw-avatar-fs-full": params.size === "full",
      "tw-avatar-size-2xs tw-avatar-fs-2xs": params.size === "2xs",
      "tw-avatar-size-xs tw-avatar-fs-xs": params.size === "xs",
      "tw-avatar-size-sm tw-avatar-fs-sm": params.size === "sm",
      "tw-avatar-size-md tw-avatar-fs-md": params.size === "md",
      "tw-avatar-size-lg tw-avatar-fs-lg": params.size === "lg",
      "tw-avatar-size-xl tw-avatar-fs-xl": params.size === "xl",
      "tw-avatar-size-2xl tw-avatar-fs-2xl": params.size === "2xl",
    },
    {
      "text-white bg-tw-gray-solid": params.colorScheme === "gray" && params.variant === "solid",
      "text-white bg-tw-red-solid": params.colorScheme === "red" && params.variant === "solid",
      "text-white bg-tw-green-solid": params.colorScheme === "green" && params.variant === "solid",
      "text-white bg-tw-blue-solid": params.colorScheme === "blue" && params.variant === "solid",
      "text-white bg-tw-teal-solid": params.colorScheme === "teal" && params.variant === "solid",
      "text-white bg-tw-pink-solid": params.colorScheme === "pink" && params.variant === "solid",
      "text-white bg-tw-purple-solid":
        params.colorScheme === "purple" && params.variant === "solid",
      "text-white bg-tw-cyan-solid": params.colorScheme === "cyan" && params.variant === "solid",
      "text-white bg-tw-orange-solid":
        params.colorScheme === "orange" && params.variant === "solid",
      "text-black bg-tw-yellow-solid":
        params.colorScheme === "yellow" && params.variant === "solid",
    },
    {
      "text-tw-gray-fg bg-tw-gray-muted":
        params.colorScheme === "gray" && params.variant === "subtle",
      "text-tw-red-fg bg-tw-red-muted": params.colorScheme === "red" && params.variant === "subtle",
      "text-tw-green-fg bg-tw-green-muted":
        params.colorScheme === "green" && params.variant === "subtle",
      "text-tw-blue-fg bg-tw-blue-muted":
        params.colorScheme === "blue" && params.variant === "subtle",
      "text-tw-teal-fg bg-tw-teal-muted":
        params.colorScheme === "teal" && params.variant === "subtle",
      "text-tw-pink-fg bg-tw-pink-muted":
        params.colorScheme === "pink" && params.variant === "subtle",
      "text-tw-purple-fg bg-tw-purple-muted":
        params.colorScheme === "purple" && params.variant === "subtle",
      "text-tw-cyan-fg bg-tw-cyan-muted":
        params.colorScheme === "cyan" && params.variant === "subtle",
      "text-tw-orange-fg bg-tw-orange-muted":
        params.colorScheme === "orange" && params.variant === "subtle",
      "text-tw-yellow-fg bg-tw-yellow-muted":
        params.colorScheme === "yellow" && params.variant === "subtle",
    },
    {
      "text-tw-gray-fg border border-tw-gray-muted":
        params.colorScheme === "gray" && params.variant === "outline",
      "text-tw-red-fg border border-tw-red-muted":
        params.colorScheme === "red" && params.variant === "outline",
      "text-tw-green-fg border border-tw-green-muted":
        params.colorScheme === "green" && params.variant === "outline",
      "text-tw-blue-fg border border-tw-blue-muted":
        params.colorScheme === "blue" && params.variant === "outline",
      "text-tw-teal-fg border border-tw-teal-muted":
        params.colorScheme === "teal" && params.variant === "outline",
      "text-tw-pink-fg border border-tw-pink-muted":
        params.colorScheme === "pink" && params.variant === "outline",
      "text-tw-purple-fg border border-tw-purple-muted":
        params.colorScheme === "purple" && params.variant === "outline",
      "text-tw-cyan-fg border border-tw-cyan-muted":
        params.colorScheme === "cyan" && params.variant === "outline",
      "text-tw-orange-fg border border-tw-orange-muted":
        params.colorScheme === "orange" && params.variant === "outline",
      "text-tw-yellow-fg border border-tw-yellow-muted":
        params.colorScheme === "yellow" && params.variant === "outline",
    }
  );
}

export const avatarClasses = {
  getRootClasses,
};
