import { cx } from "@utils/cx";

function getInputClasses(params) {
  return cx(
    "w-full outline-0 relative appearance-none text-start rounded tw-disabled:tw-disabled-not-allowed",
    "h-[var(--input-height)] min-w-[var(--input-height)]",
    "tw-invalid:border-tw-border-error",
    "tw-invalid:tw-focus-visible:outline-tw-border-error",
    "tw-complete:border-tw-border-success dark:tw-complete:border-tw-border-success tw-complete:text-tw-fg-success",
    {
      "text-xs px-2": params.size === "2xs" || params.size === "xs",
      "text-sm px-2.5": params.size === "sm",
      "text-sm px-3": params.size === "md",
      "text-base px-4": params.size === "lg",
      "text-base px-[1.125rem]": params.size === "xl",
      "text-lg px-5": params.size === "2xl",
      "bg-transparent border border-tw-border-default tw-focus-visible:tw-ring-inside tw-focus-visible:outline-[var(--focus-color)] tw-focus-visible:border-[var(--focus-color)]":
        params.variant === "outline",
      "bg-tw-bg-muted border border-transparent tw-focus-visible:tw-ring-inside tw-focus-visible:outline-[var(--focus-color)] tw-focus-visible:border-[var(--focus-color)]":
        params.variant === "subtle",
      "bg-transparent border-b border-tw-border-default rounded-none px-0 tw-focus-visible:border-[var(--focus-color)] tw-focus-visible:shadow-[0px_1px_0px_0px_var(--focus-color)]":
        params.variant === "flushed",
      "tw-focus-visible:tw-invalid:border-[var(--focus-color)] tw-focus-visible:tw-invalid:shadow-[0px_1px_0px_0px_#ef4444] dark:tw-focus-visible:tw-invalid:border-[var(--focus-color)] dark:tw-focus-visible:tw-invalid:shadow-[0px_1px_0px_0px_#ef4444]":
        params.variant === "flushed",
      "tw-input-height-2xs": params.size === "2xs",
      "tw-input-height-xs": params.size === "xs",
      "tw-input-height-sm": params.size === "sm",
      "tw-input-height-md": params.size === "md",
      "tw-input-height-lg": params.size === "lg",
      "tw-input-height-xl": params.size === "xl",
      "tw-input-height-2xl": params.size === "2xl",
      "tw-focus-color-gray": params.colorScheme === "gray",
      "tw-focus-color-red": params.colorScheme === "red",
      "tw-focus-color-green": params.colorScheme === "green",
      "tw-focus-color-blue": params.colorScheme === "blue",
      "tw-focus-color-teal": params.colorScheme === "teal",
      "tw-focus-color-pink": params.colorScheme === "pink",
      "tw-focus-color-cyan": params.colorScheme === "cyan",
      "tw-focus-color-purple": params.colorScheme === "purple",
      "tw-focus-color-orange": params.colorScheme === "orange",
      "tw-focus-color-yellow": params.colorScheme === "yellow",
    }
  );
}

function getInputAddonClasses(params) {
  return cx(
    "grow-0 shrink-0 basis-auto w-auto flex items-center whitespace-nowrap self-stretch rounded",
    {
      "text-xs px-2": params.size === "2xs" || params.size === "xs",
      "text-sm px-2.5": params.size === "sm",
      "text-sm px-3": params.size === "md",
      "text-base px-4": params.size === "lg",
      "text-base px-[1.125rem]": params.size === "xl",
      "text-lg px-5": params.size === "2xl",
      "border border-tw-border-default bg-tw-bg-muted": params.variant === "outline",
      "border border-transparent bg-tw-bg-emphasized": params.variant === "subtle",
      "border-b border-inherit rounded-none px-0 bg-transparent": params.variant === "flushed",
    }
  );
}

export const inputClasses = {
  getInputClasses,
  getInputAddonClasses,
};
