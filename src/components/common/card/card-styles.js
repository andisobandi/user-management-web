import { cx } from "@utils/cx";

function getRootClasses(params) {
  return cx("flex flex-col relative min-w-0 break-words rounded-md text-tw-fg-default text-start", {
    "bg-tw-bg-panel shadow-tw-md": params.variant === "elevated",
    "bg-tw-bg-panel border border-tw-border-default": params.variant === "outline",
    "bg-tw-bg-muted": params.variant === "subtle",
  });
}

function getTitleClasses(params) {
  return cx("font-semibold", {
    "text-base": params.size === "sm",
    "text-lg": params.size === "md",
    "text-xl": params.size === "lg",
  });
}

export const cardClasses = {
  getRootClasses,
  getTitleClasses,
};
