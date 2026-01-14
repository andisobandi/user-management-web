import { cx } from "@utils/cx";

export function getButtonClasses(params) {
  return cx(
    "inline-flex appearance-none items-center justify-center select-none relative",
    "rounded whitespace-nowrap align-middle border border-transparent cursor-pointer",
    "shrink-0 outline-0 leading-5 isolate font-medium transition-colors duration-200",
    "tw-disabled:tw-disabled-not-allowed tw-icon:shrink-0",
    "tw-focus-visible:tw-ring-outside",
    {
      "h-6 min-w-6 text-xs px-2 gap-1 tw-icon:size-3.5": params.size === "2xs",
      "h-8 min-w-8 text-xs px-2.5 gap-1 tw-icon:size-4": params.size === "xs",
      "h-9 min-w-9 text-sm px-3.5 gap-2 tw-icon:size-4": params.size === "sm",
      "h-10 min-w-10 text-sm px-4 gap-2 tw-icon:size-5": params.size === "md",
      "h-11 min-w-11 text-base px-5 gap-3 tw-icon:size-5": params.size === "lg",
      "h-12 min-w-12 text-base px-5 gap-2.5 tw-icon:size-5": params.size === "xl",
      "h-16 min-w-16 text-lg px-7 gap-3 tw-icon:size-6": params.size === "2xl",
    },
    {
      "tw-focus-visible:outline-tw-gray-focus-ring": params.colorScheme === "gray",
      "tw-focus-visible:outline-tw-red-focus-ring": params.colorScheme === "red",
      "tw-focus-visible:outline-tw-green-focus-ring": params.colorScheme === "green",
      "tw-focus-visible:outline-tw-blue-focus-ring": params.colorScheme === "blue",
      "tw-focus-visible:outline-tw-teal-focus-ring": params.colorScheme === "teal",
      "tw-focus-visible:outline-tw-pink-focus-ring": params.colorScheme === "pink",
      "tw-focus-visible:outline-tw-cyan-focus-ring": params.colorScheme === "cyan",
      "tw-focus-visible:outline-tw-purple-focus-ring": params.colorScheme === "purple",
      "tw-focus-visible:outline-tw-orange-focus-ring": params.colorScheme === "orange",
      "tw-focus-visible:outline-tw-yellow-focus-ring": params.colorScheme === "yellow",
    },
    {
      "tw-hover:bg-tw-gray-solid/90": params.variant === "solid" && params.colorScheme === "gray",
      "tw-hover:bg-tw-red-solid/90": params.variant === "solid" && params.colorScheme === "red",
      "tw-hover:bg-tw-green-solid/90": params.variant === "solid" && params.colorScheme === "green",
      "tw-hover:bg-tw-blue-solid/90": params.variant === "solid" && params.colorScheme === "blue",
      "tw-hover:bg-tw-teal-solid/90": params.variant === "solid" && params.colorScheme === "teal",
      "tw-hover:bg-tw-pink-solid/90": params.variant === "solid" && params.colorScheme === "pink",
      "tw-hover:bg-tw-cyan-solid/90": params.variant === "solid" && params.colorScheme === "cyan",
      "tw-hover:bg-tw-purple-solid/90":
        params.variant === "solid" && params.colorScheme === "purple",
      "tw-hover:bg-tw-orange-solid/90":
        params.variant === "solid" && params.colorScheme === "orange",
      "tw-hover:bg-tw-yellow-solid/90":
        params.variant === "solid" && params.colorScheme === "yellow",
    },
    {
      "tw-hover:bg-tw-gray-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "gray",
      "tw-hover:bg-tw-red-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "red",
      "tw-hover:bg-tw-green-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "green",
      "tw-hover:bg-tw-blue-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "blue",
      "tw-hover:bg-tw-teal-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "teal",
      "tw-hover:bg-tw-pink-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "pink",
      "tw-hover:bg-tw-cyan-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "cyan",
      "tw-hover:bg-tw-purple-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "purple",
      "tw-hover:bg-tw-orange-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "orange",
      "tw-hover:bg-tw-yellow-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "yellow",
    },
    {
      "tw-hover:bg-tw-gray-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "gray",
      "tw-hover:bg-tw-red-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "red",
      "tw-hover:bg-tw-green-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "green",
      "tw-hover:bg-tw-blue-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "blue",
      "tw-hover:bg-tw-teal-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "teal",
      "tw-hover:bg-tw-pink-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "pink",
      "tw-hover:bg-tw-cyan-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "cyan",
      "tw-hover:bg-tw-purple-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "purple",
      "tw-hover:bg-tw-orange-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "orange",
      "tw-hover:bg-tw-yellow-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "yellow",
    },
    {
      "tw-expanded:bg-tw-gray-solid/90":
        params.variant === "solid" && params.colorScheme === "gray",
      "tw-expanded:bg-tw-red-solid/90": params.variant === "solid" && params.colorScheme === "red",
      "tw-expanded:bg-tw-green-solid/90":
        params.variant === "solid" && params.colorScheme === "green",
      "tw-expanded:bg-tw-blue-solid/90":
        params.variant === "solid" && params.colorScheme === "blue",
      "tw-expanded:bg-tw-teal-solid/90":
        params.variant === "solid" && params.colorScheme === "teal",
      "tw-expanded:bg-tw-pink-solid/90":
        params.variant === "solid" && params.colorScheme === "pink",
      "tw-expanded:bg-tw-cyan-solid/90":
        params.variant === "solid" && params.colorScheme === "cyan",
      "tw-expanded:bg-tw-purple-solid/90":
        params.variant === "solid" && params.colorScheme === "purple",
      "tw-expanded:bg-tw-orange-solid/90":
        params.variant === "solid" && params.colorScheme === "orange",
      "tw-expanded:bg-tw-yellow-solid/90":
        params.variant === "solid" && params.colorScheme === "yellow",
    },
    {
      "tw-expanded:bg-tw-gray-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "gray",
      "tw-expanded:bg-tw-red-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "red",
      "tw-expanded:bg-tw-green-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "green",
      "tw-expanded:bg-tw-blue-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "blue",
      "tw-expanded:bg-tw-teal-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "teal",
      "tw-expanded:bg-tw-pink-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "pink",
      "tw-expanded:bg-tw-cyan-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "cyan",
      "tw-expanded:bg-tw-purple-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "purple",
      "tw-expanded:bg-tw-orange-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "orange",
      "tw-expanded:bg-tw-yellow-muted":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "yellow",
    },
    {
      "tw-expanded:bg-tw-gray-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "gray",
      "tw-expanded:bg-tw-red-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "red",
      "tw-expanded:bg-tw-green-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "green",
      "tw-expanded:bg-tw-blue-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "blue",
      "tw-expanded:bg-tw-teal-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "teal",
      "tw-expanded:bg-tw-pink-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "pink",
      "tw-expanded:bg-tw-cyan-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "cyan",
      "tw-expanded:bg-tw-purple-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "purple",
      "tw-expanded:bg-tw-orange-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "orange",
      "tw-expanded:bg-tw-yellow-subtle":
        (params.variant === "outline" || params.variant === "ghost") &&
        params.colorScheme === "yellow",
    },
    {
      "bg-tw-gray-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "gray",
      "bg-tw-red-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "red",
      "bg-tw-green-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "green",
      "bg-tw-blue-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "blue",
      "bg-tw-teal-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "teal",
      "bg-tw-pink-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "pink",
      "bg-tw-cyan-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "cyan",
      "bg-tw-purple-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "purple",
      "bg-tw-orange-solid text-white border border-transparent":
        params.variant === "solid" && params.colorScheme === "orange",
      "bg-tw-yellow-solid text-black border border-transparent":
        params.variant === "solid" && params.colorScheme === "yellow",
    },
    {
      "bg-tw-gray-subtle text-tw-gray-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "gray",
      "bg-tw-red-subtle border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "red",
      "bg-tw-green-subtle text-tw-green-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "green",
      "bg-tw-blue-subtle text-tw-blue-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "blue",
      "bg-tw-teal-subtle text-tw-teal-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "teal",
      "bg-tw-pink-subtle text-tw-pink-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "pink",
      "bg-tw-cyan-subtle text-tw-cyan-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "cyan",
      "bg-tw-purple-subtle text-tw-purple-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "purple",
      "bg-tw-orange-subtle text-tw-orange-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "orange",
      "bg-tw-yellow-subtle text-tw-yellow-fg border border-transparent":
        (params.variant === "subtle" || params.variant === "surface") &&
        params.colorScheme === "yellow",
    },
    {
      "shadow-[0_0_0px_1px_#e4e4e7]": params.variant === "surface" && params.colorScheme === "gray",
      "shadow-[0_0_0px_1px_#fecaca]": params.variant === "surface" && params.colorScheme === "red",
      "shadow-[0_0_0px_1px_#bbf7d0]":
        params.variant === "surface" && params.colorScheme === "green",
      "shadow-[0_0_0px_1px_#bfdbfe]": params.variant === "surface" && params.colorScheme === "blue",
      "shadow-[0_0_0px_1px_#99f6e4]": params.variant === "surface" && params.colorScheme === "teal",
      "shadow-[0_0_0px_1px_#fbcfe8]": params.variant === "surface" && params.colorScheme === "pink",
      "shadow-[0_0_0px_1px_#a5f3fc]": params.variant === "surface" && params.colorScheme === "cyan",
      "shadow-[0_0_0px_1px_#e9d5ff]":
        params.variant === "surface" && params.colorScheme === "purple",
      "shadow-[0_0_0px_1px_#fed7aa]":
        params.variant === "surface" && params.colorScheme === "orange",
      "shadow-[0_0_0px_1px_#fef08a]":
        params.variant === "surface" && params.colorScheme === "yellow",
    },
    {
      "text-tw-gray-fg border border-tw-gray-muted":
        params.variant === "outline" && params.colorScheme === "gray",
      "text-tw-red-fg border border-tw-red-muted":
        params.variant === "outline" && params.colorScheme === "red",
      "text-tw-green-fg border border-tw-green-muted":
        params.variant === "outline" && params.colorScheme === "green",
      "text-tw-blue-fg border border-tw-blue-muted":
        params.variant === "outline" && params.colorScheme === "blue",
      "text-tw-teal-fg border border-tw-teal-muted":
        params.variant === "outline" && params.colorScheme === "teal",
      "text-tw-pink-fg border border-tw-pink-muted":
        params.variant === "outline" && params.colorScheme === "pink",
      "text-tw-cyan-fg border border-tw-cyan-muted":
        params.variant === "outline" && params.colorScheme === "cyan",
      "text-tw-purple-fg border border-tw-purple-muted":
        params.variant === "outline" && params.colorScheme === "purple",
      "text-tw-orange-fg border border-tw-orange-muted":
        params.variant === "outline" && params.colorScheme === "orange",
      "text-tw-yellow-fg border border-tw-yellow-muted":
        params.variant === "outline" && params.colorScheme === "yellow",
    },
    {
      "text-tw-gray-fg":
        (params.variant === "plain" || params.variant === "ghost") && params.colorScheme === "gray",
      "text-tw-red-fg":
        (params.variant === "plain" || params.variant === "ghost") && params.colorScheme === "red",
      "text-tw-green-fg":
        (params.variant === "plain" || params.variant === "ghost") &&
        params.colorScheme === "green",
      "text-tw-blue-fg":
        (params.variant === "plain" || params.variant === "ghost") && params.colorScheme === "blue",
      "text-tw-teal-fg":
        (params.variant === "plain" || params.variant === "ghost") && params.colorScheme === "teal",
      "text-tw-pink-fg":
        (params.variant === "plain" || params.variant === "ghost") && params.colorScheme === "pink",
      "text-tw-cyan-fg":
        (params.variant === "plain" || params.variant === "ghost") && params.colorScheme === "cyan",
      "text-tw-purple-fg":
        (params.variant === "plain" || params.variant === "ghost") &&
        params.colorScheme === "purple",
      "text-tw-orange-fg":
        (params.variant === "plain" || params.variant === "ghost") &&
        params.colorScheme === "orange",
      "text-tw-yellow-fg":
        (params.variant === "plain" || params.variant === "ghost") &&
        params.colorScheme === "yellow",
    },
    {
      "bg-transparent": params.variant === "ghost",
    }
  );
}
