import { cx } from "@utils/cx";

function getContentClasses(params) {
  return cx(
    "outline-0 bg-white shadow-tw-lg text-tw-fg-default max-h-[var(--available-height)] z-[1000] rounded overflow-x-hidden overflow-y-auto",
    "tw-open:placement-[top]:animate-slide-fade-in-from-bottom tw-open:placement-[top]:origin-[var(--transform-origin)]",
    "tw-open:placement-[bottom]:animate-slide-fade-in-from-top tw-open:placement-[bottom]:origin-[var(--transform-origin)]",
    "tw-open:placement-[left]:animate-slide-fade-in-from-right tw-open:placement-[left]:origin-[var(--transform-origin)]",
    "tw-open:placement-[right]:animate-slide-fade-in-from-left tw-open:placement-[right]:origin-[var(--transform-origin)]",
    "tw-close:placement-[top]:animate-slide-fade-out-to-bottom tw-close:placement-[top]:origin-[var(--transform-origin)]",
    "tw-close:placement-[bottom]:animate-slide-fade-out-to-top tw-close:placement-[bottom]:origin-[var(--transform-origin)]",
    "tw-close:placement-[left]:animate-slide-fade-out-to-right tw-close:placement-[left]:origin-[var(--transform-origin)]",
    "tw-close:placement-[right]:animate-slide-fade-out-to-left tw-close:placement-[right]:origin-[var(--transform-origin)]",
    {
      "min-w-32 p-1 scroll-p-1": params.size === "sm",
      "min-w-32 p-1.5 scroll-p-1.5": params.size === "md",
    }
  );
}

function getItemClasses(params) {
  return cx(
    "no-underline text-tw-fg-default select-none rounded-sm w-full flex cursor-default items-center text-start relative grow-0 shrink-0 basis-auto outline-0",
    "tw-disabled:tw-disabled-not-allowed",
    "[&[data-type]]:ps-8",
    {
      "tw-highlighted:bg-tw-bg-emphasized/60": params.variant === "subtle",
    },
    {
      "tw-highlighted:bg-tw-gray-solid text-white":
        params.variant === "solid" && params.colorScheme === "gray",
      "tw-highlighted:bg-tw-red-solid text-white":
        params.variant === "solid" && params.colorScheme === "red",
      "tw-highlighted:bg-tw-green-solid text-white":
        params.variant === "solid" && params.colorScheme === "green",
      "tw-highlighted:bg-tw-blue-solid text-white":
        params.variant === "solid" && params.colorScheme === "blue",
      "tw-highlighted:bg-tw-teal-solid text-white":
        params.variant === "solid" && params.colorScheme === "teal",
      "tw-highlighted:bg-tw-pink-solid text-white":
        params.variant === "solid" && params.colorScheme === "pink",
      "tw-highlighted:bg-tw-cyan-solid text-white":
        params.variant === "solid" && params.colorScheme === "cyan",
      "tw-highlighted:bg-tw-purple-solid text-white":
        params.variant === "solid" && params.colorScheme === "purple",
      "tw-highlighted:bg-tw-orange-solid text-white":
        params.variant === "solid" && params.colorScheme === "orange",
      "tw-highlighted:bg-tw-yellow-solid text-white":
        params.variant === "solid" && params.colorScheme === "yellow",
    },
    {
      "gap-1 text-xs py-1 px-1.5": params.size === "sm",
      "gap-2 text-sm py-1.5 px-2": params.size === "md",
    }
  );
}

export const menuClasses = {
  getContentClasses,
  getItemClasses,
};
