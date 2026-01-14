import { cx } from "@utils/cx";

function getRootClasses(params) {
  return cx(
    "inline-flex gap-[var(--group-gap,0.5rem)] isolate relative",
    "[&[data-group-item]:tw-focus-visible]:z-[1]",
    {
      "flex-row": params.orientation === "horizontal",
      "flex-col": params.orientation === "vertical",
      "gap-0": params.attached,
      "flex [&>*]:flex-1": params.grow,
    },
    {
      "[&>[data-group-item]]:z-[calc(var(--group-count)-var(--group-index))]":
        params.stacking === "first-on-top",
      "[&>[data-group-item]]:z-[var(--group-index)]": params.stacking === "last-on-top",
    },
    {
      "[&>*[data-first]]:rounded-e-none [&>*[data-first]]:-me-[1px]":
        params.orientation === "horizontal" && params.attached,
      "[&>*[data-between]]:rounded-none [&>*[data-between]]:-me-[1px]":
        params.orientation === "horizontal" && params.attached,
      "[&>*[data-last]]:rounded-s-none": params.orientation === "horizontal" && params.attached,
    },
    {
      "[&>*[data-first]]:rounded-b-none [&>*[data-first]]:-mb-[1px]":
        params.orientation === "vertical" && params.attached,
      "[&>*[data-between]]:rounded-none [&>*[data-between]]:-mb-[1px]":
        params.orientation === "vertical" && params.attached,
      "[&>*[data-last]]:rounded-t-none": params.orientation === "vertical" && params.attached,
    }
  );
}

export const groupClasses = {
  getRootClasses,
};
