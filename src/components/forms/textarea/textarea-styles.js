import { cx } from "@utils/cx";

export function getTextareaClasses(params) {
  return cx(
    "w-full min-w-0 outline-0 relative appearance-none text-start rounded",
    "tw-disabled:tw-disabled-not-allowed",
    "tw-invalid:outline-tw-border-error",
    "tw-invalid:border-tw-border-error",
    "tw-focus-visible:outline-[var(--focus-color)] tw-focus-visible:border-[var(--focus-color)]",
    {
      "text-xs scroll-pb-1.5 px-2 py-1.5": params.size === "xs",
      "text-sm scroll-pb-2 px-2.5 py-2": params.size === "sm",
      "text-sm scroll-pb-2 px-3 py-2": params.size === "md",
      "text-base scroll-pb-3 px-4 py-3": params.size === "lg",
      "text-base scroll-pb-3.5 px-5 py-3.5": params.size === "xl",
      "border border-transparent bg-tw-bg-muted tw-focus-visible:tw-ring-inside":
        params.variant === "subtle",
      "bg-transparent border border-tw-border-default tw-focus-visible:tw-ring-inside":
        params.variant === "outline",
      "bg-transparent border-b border-tw-border-default rounded-none px-0":
        params.variant === "flushed",
      "tw-focus-visible:shadow-[0px_1px_0px_0px_var(--focus-color)]":
        params.variant === "flushed" && params.colorScheme === "gray",
    }
  );
}
