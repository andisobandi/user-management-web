import { cx } from "@utils/cx";

export function getBadgeClasses(params) {
  return cx(
    "inline-flex items-center rounded gap-1 font-medium whitespace-nowrap select-none",
    {
      "text-[0.625rem] leading-3 px-1 min-h-4": params.size === "xs",
      "text-xs px-1.5 min-h-5": params.size === "sm",
      "text-sm px-2 min-h-6": params.size === "md",
      "text-sm px-2.5 min-h-7": params.size === "lg",
    },
    {
      "text-white": params.variant === "solid",
      "bg-tw-gray-solid": params.variant === "solid" && params.colorScheme === "gray",
      "bg-tw-red-solid": params.variant === "solid" && params.colorScheme === "red",
      "bg-tw-green-solid": params.variant === "solid" && params.colorScheme === "green",
      "bg-tw-blue-solid": params.variant === "solid" && params.colorScheme === "blue",
      "bg-tw-teal-solid": params.variant === "solid" && params.colorScheme === "teal",
      "bg-tw-pink-solid": params.variant === "solid" && params.colorScheme === "pink",
      "bg-tw-cyan-solid": params.variant === "solid" && params.colorScheme === "cyan",
      "bg-tw-purple-solid": params.variant === "solid" && params.colorScheme === "purple",
      "bg-tw-orange-solid": params.variant === "solid" && params.colorScheme === "orange",
      "bg-tw-yellow-solid": params.variant === "solid" && params.colorScheme === "yellow",
    },
    {
      "text-tw-gray-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "gray",
      "text-tw-red-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "red",
      "text-tw-green-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "green",
      "text-tw-blue-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "blue",
      "text-tw-teal-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "teal",
      "text-tw-pink-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "pink",
      "text-tw-cyan-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "cyan",
      "text-tw-purple-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "purple",
      "text-tw-orange-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "orange",
      "text-tw-yellow-fg":
        (params.variant === "subtle" ||
          params.variant === "outline" ||
          params.variant === "surface" ||
          params.variant === "plain") &&
        params.colorScheme === "yellow",
    },
    {
      "bg-tw-gray-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "gray",
      "bg-tw-red-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "red",
      "bg-tw-green-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "green",
      "bg-tw-blue-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "blue",
      "bg-tw-teal-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "teal",
      "bg-tw-pink-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "pink",
      "bg-tw-cyan-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "cyan",
      "bg-tw-purple-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "purple",
      "bg-tw-orange-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "orange",
      "bg-tw-yellow-subtle":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "yellow",
    },
    {
      "shadow-[inset_0_0_0px_1px_#e4e4e7]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "gray",
      "shadow-[inset_0_0_0px_1px_#fecaca]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "red",
      "shadow-[inset_0_0_0px_1px_#bbf7d0]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "green",
      "shadow-[inset_0_0_0px_1px_#bfdbfe]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "blue",
      "shadow-[inset_0_0_0px_1px_#99f6e4]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "teal",
      "shadow-[inset_0_0_0px_1px_#fbcfe8]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "pink",
      "shadow-[inset_0_0_0px_1px_#a5f3fc]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "cyan",
      "shadow-[inset_0_0_0px_1px_#e9d5ff]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "purple",
      "shadow-[inset_0_0_0px_1px_#fed7aa]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "orange",
      "shadow-[inset_0_0_0px_1px_#fef08a]":
        (params.variant === "outline" || params.variant === "surface") &&
        params.colorScheme === "yellow",
    }
  );
}
