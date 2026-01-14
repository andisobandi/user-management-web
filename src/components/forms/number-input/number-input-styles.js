import { cx } from "@utils/cx";

const triggerClasses = cx(
  "flex justify-center items-center flex-1 select-none cursor-pointer leading-none text-tw-fg-muted",
  "tw-icon:size-[1em]",
  "tw-disabled:opacity-50",
  "tw-hover:bg-tw-bg-muted",
  "tw-active:bg-tw-bg-emphasized"
);

function getControlClasses(params) {
  return cx(
    "flex flex-col absolute top-0 end-0 m-[1px] w-[var(--stepper-width)] h-[calc(100%-2px)] z-[1] border-s divide-y-[1px]",
    {
      "text-2xs": params.size === "xs",
      "text-xs": params.size === "sm",
      "text-sm": params.size === "md" || params.size === "lg",
    }
  );
}

function getIncrementTriggerClasses() {
  return cx(triggerClasses, "rounded-es-[var(--stepper-radius)]");
}

function getDecrementTriggerClasses() {
  return cx(triggerClasses, "rounded-ee-[var(--stepper-radius)]");
}

export const numberInputClasses = {
  getControlClasses,
  getIncrementTriggerClasses,
  getDecrementTriggerClasses,
};
