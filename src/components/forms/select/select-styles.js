import { cx } from "@utils/cx";

function getTriggerClasses(params) {
  return cx(
    "flex items-center justify-between w-full min-h-[var(--select-trigger-height)]",
    "px-[var(--select-trigger-padding-x)] rounded select-none text-start tw-focus-visible:tw-ring-inside",
    "tw-placeholder-shown:text-tw-fg-muted/80",
    "tw-disabled:cursor-not-allowed",
    "tw-invalid:border-tw-border-error",
    {
      "bg-transparent border border-tw-border-default tw-expanded:border-tw-border-emphasized":
        params.variant === "outline",
      "border border-transparent bg-tw-bg-muted": params.variant === "subtle",
      "text-xs gap-1": params.size === "xs",
      "text-sm gap-1": params.size === "sm",
      "text-sm gap-2": params.size === "md",
      "py-3 text-base gap-2": params.size === "lg",
      "tw-focus-visible:outline-tw-gray-focus-ring tw-focus-visible:border-tw-gray-focus-ring":
        params.colorScheme === "gray",
      "tw-focus-visible:outline-tw-red-focus-ring tw-focus-visible:border-tw-red-focus-ring":
        params.colorScheme === "red",
      "tw-focus-visible:outline-tw-green-focus-ring tw-focus-visible:border-tw-green-focus-ring":
        params.colorScheme === "green",
      "tw-focus-visible:outline-tw-blue-focus-ring tw-focus-visible:border-tw-blue-focus-ring":
        params.colorScheme === "blue",
      "tw-focus-visible:outline-tw-teal-focus-ring tw-focus-visible:border-tw-teal-focus-ring":
        params.colorScheme === "teal",
      "tw-focus-visible:outline-tw-pink-focus-ring tw-focus-visible:border-tw-pink-focus-ring":
        params.colorScheme === "pink",
      "tw-focus-visible:outline-tw-cyan-focus-ring tw-focus-visible:border-tw-cyan-focus-ring":
        params.colorScheme === "cyan",
      "tw-focus-visible:outline-tw-purple-focus-ring tw-focus-visible:border-tw-purple-focus-ring":
        params.colorScheme === "purple",
      "tw-focus-visible:outline-tw-orange-focus-ring tw-focus-visible:border-tw-orange-focus-ring":
        params.colorScheme === "orange",
      "tw-focus-visible:outline-tw-yellow-focus-ring tw-focus-visible:border-tw-yellow-focus-ring":
        params.colorScheme === "yellow",
    }
  );
}

function getContentClasses(params) {
  return cx(
    "bg-white flex flex-col z-[1000] rounded outline-0 max-h-96 overflow-y-auto shadow-tw-md",
    "tw-open:placement-[top]:animate-slide-fade-in-from-bottom tw-open:placement-[top]:origin-top",
    "tw-open:placement-[bottom]:animate-slide-fade-in-from-top tw-open:placement-[bottom]:origin-top",
    "tw-open:placement-[left]:animate-slide-fade-in-from-right tw-open:placement-[left]:origin-left",
    "tw-open:placement-[right]:animate-slide-fade-in-from-left tw-open:placement-[right]:origin-left",
    "tw-close:placement-[top]:animate-slide-fade-out-to-bottom tw-close:placement-[top]:origin-top",
    "tw-close:placement-[bottom]:animate-slide-fade-out-to-top tw-close:placement-[bottom]:origin-top",
    "tw-close:placement-[left]:animate-slide-fade-out-to-right tw-close:placement-[left]:origin-left",
    "tw-close:placement-[right]:animate-slide-fade-out-to-left tw-close:placement-[right]:origin-left",
    {
      "p-1 text-xs gap-1": params.size === "xs",
      "p-1 text-sm gap-1": params.size === "sm" || params.size === "md",
      "text-base p-1.5": params.size === "lg",
    }
  );
}

function getItemClasses(params) {
  return cx(
    "relative select-none flex items-center gap-2 cursor-default justify-between flex-1 text-start rounded-sm",
    "tw-highlighted:bg-tw-bg-emphasized",
    "tw-disabled:pointer-events-none",
    "tw-disabled:opacity-50",
    "tw-icon:size-4",
    {
      "py-1 px-2": params.size === "xs",
      "py-1 px-1.5": params.size === "sm",
      "py-1.5 px-2": params.size === "md",
      "py-2 px-3": params.size === "lg",
    }
  );
}

function getClearTriggerClasses(params) {
  return cx(
    "text-tw-fg-muted pointer-events-auto rounded-sm tw-focus-visible:tw-ring-inside tw-focus-visible:outline-2",
    {
      "tw-focus-visible:outline-tw-gray-focus-ring tw-focus-visible:border-tw-gray-focus-ring":
        params.colorScheme === "gray",
      "tw-focus-visible:outline-tw-red-focus-ring tw-focus-visible:border-tw-red-focus-ring":
        params.colorScheme === "red",
      "tw-focus-visible:outline-tw-green-focus-ring tw-focus-visible:border-tw-green-focus-ring":
        params.colorScheme === "green",
      "tw-focus-visible:outline-tw-blue-focus-ring tw-focus-visible:border-tw-blue-focus-ring":
        params.colorScheme === "blue",
      "tw-focus-visible:outline-tw-teal-focus-ring tw-focus-visible:border-tw-teal-focus-ring":
        params.colorScheme === "teal",
      "tw-focus-visible:outline-tw-pink-focus-ring tw-focus-visible:border-tw-pink-focus-ring":
        params.colorScheme === "pink",
      "tw-focus-visible:outline-tw-cyan-focus-ring tw-focus-visible:border-tw-cyan-focus-ring":
        params.colorScheme === "cyan",
      "tw-focus-visible:outline-tw-purple-focus-ring tw-focus-visible:border-tw-purple-focus-ring":
        params.colorScheme === "purple",
      "tw-focus-visible:outline-tw-orange-focus-ring tw-focus-visible:border-tw-orange-focus-ring":
        params.colorScheme === "orange",
      "tw-focus-visible:outline-tw-yellow-focus-ring tw-focus-visible:border-tw-yellow-focus-ring":
        params.colorScheme === "yellow",
    }
  );
}

export const selectClasses = {
  getTriggerClasses,
  getContentClasses,
  getItemClasses,
  getClearTriggerClasses,
};
