import { cx } from "@utils/cx";

function getInputClasses(params) {
  return cx(
    "flex items-center justify-between bg-white w-full",
    "min-h-[var(--combobox-input-height)] px-[var(--combobox-input-padding-x)]",
    "rounded outline-0 select-none text-start",
    "tw-disabled:tw-disabled-not-allowed",
    "tw-placeholder-shown:text-tw-fg-muted",
    "tw-invalid:focus-visible:outline-tw-border-error",
    "tw-invalid:border-tw-border-error",
    {
      "bg-transparent border border-tw-border-default tw-focus-visible:tw-ring-inside":
        params.variant === "outline",
      "border border-transparent bg-tw-bg-muted tw-focus-visible:tw-ring-inside":
        params.variant === "subtle",
      "bg-transparent border-b border-b-tw-border-default rounded-none px-0 tw-focus-visible:border-[var(--focus-color)] tw-focus-visible:shadow-[0px_1px_0px_0px_var(--focus-color)]":
        params.variant === "flushed",
      "text-xs": params.size === "xs",
      "text-sm": params.size === "sm" || params.size === "md",
      "text-base": params.size === "lg",
      "tw-focus-visible:outline-tw-gray-focus-ring tw-focus-visible:border-tw-gray-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "gray",
      "tw-focus-visible:outline-tw-red-focus-ring tw-focus-visible:border-tw-red-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "red",
      "tw-focus-visible:outline-tw-green-focus-ring tw-focus-visible:border-tw-green-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "green",
      "tw-focus-visible:outline-tw-blue-focus-ring tw-focus-visible:border-tw-blue-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "blue",
      "tw-focus-visible:outline-tw-teal-focus-ring tw-focus-visible:border-tw-teal-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "teal",
      "tw-focus-visible:outline-tw-pink-focus-ring tw-focus-visible:border-tw-pink-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "pink",
      "tw-focus-visible:outline-tw-cyan-focus-ring tw-focus-visible:border-tw-cyan-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "cyan",
      "tw-focus-visible:outline-tw-purple-focus-ring tw-focus-visible:border-tw-purple-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "purple",
      "tw-focus-visible:outline-tw-orange-focus-ring tw-focus-visible:border-tw-orange-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "orange",
      "tw-focus-visible:outline-tw-yellow-focus-ring tw-focus-visible:border-tw-yellow-focus-ring":
        (params.variant === "outline" || params.variant === "subtle") &&
        params.colorScheme === "yellow",
    }
  );
}

function getTriggerClasses(params) {
  return cx("inline-flex items-center justify-center", {
    "text-xs gap-1": params.size === "xs",
    "text-sm gap-1": params.size === "sm",
    "text-sm gap-2": params.size === "md",
    "text-base gap-2 py-3": params.size === "lg",
  });
}

function getIndicatorGroupClasses(params) {
  return cx(
    "flex items-center justify-center gap-1 absolute end-0 top-0 bottom-0 [[data-disabled]_&]:opacity-50",
    "px-[var(--combobox-input-padding-x)] tw-icon:size-[var(--combobox-indicator-size)]",
    {
      "px-0": params.variant === "flushed",
    }
  );
}

function getContentClasses(params) {
  return cx(
    "bg-tw-bg-panel flex flex-col z-[1000] rounded outline-0 max-h-96 overflow-y-auto shadow-tw-md",
    "[&[data-empty]:not(:has([data-scope=combobox][data-part=empty]))]:opacity-0",
    "tw-open:placement-[top]:animate-slide-fade-in-from-bottom tw-open:placement-[top]:origin-top",
    "tw-open:placement-[bottom]:animate-slide-fade-in-from-top tw-open:placement-[bottom]:origin-top",
    "tw-open:placement-[left]:animate-slide-fade-in-from-right tw-open:placement-[left]:origin-left",
    "tw-open:placement-[right]:animate-slide-fade-in-from-left tw-open:placement-[right]:origin-left",
    "tw-close:placement-[top]:animate-slide-fade-out-to-bottom tw-close:placement-[top]:origin-top",
    "tw-close:placement-[bottom]:animate-slide-fade-out-to-top tw-close:placement-[bottom]:origin-top",
    "tw-close:placement-[left]:animate-slide-fade-out-to-right tw-close:placement-[left]:origin-left",
    "tw-close:placement-[right]:animate-slide-fade-out-to-left tw-close:placement-[right]:origin-left",
    {
      "p-1 text-xs": params.size === "xs",
      "p-1 text-sm": params.size === "sm" || params.size === "md",
      "p-1.5 text-base": params.size === "lg",
    }
  );
}

function getItemClasses() {
  return cx(
    "relative select-none flex items-center justify-between flex-1 text-start",
    "rounded-sm gap-2 cursor-default tw-icon:size-[var(--combobox-indicator-size)]",
    "py-[var(--combobox-item-padding-y)] px-[var(--combobox-item-padding-x)]",
    "tw-highlighted:bg-tw-bg-emphasized/60",
    "tw-disabled:pointer-events-none",
    "tw-disabled:opacity-50"
  );
}

export const comboboxClasses = {
  getInputClasses,
  getTriggerClasses,
  getIndicatorGroupClasses,
  getContentClasses,
  getItemClasses,
};
