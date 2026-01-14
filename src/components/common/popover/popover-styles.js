import { cx } from "@utils/cx";

function getContentClasses() {
  return cx(
    "relative flex flex-col text-sm bg-[var(--popover-bg)] shadow-tw-lg w-[min(var(--popover-mobile-size),var(--popover-size))] sm:w-[var(--popover-size)]",
    "rounded-md z-[1500] outline-0 origin-[var(--transform-origin)] max-h-[var(--available-height)]",
    "tw-open:animate-scale-in-fade-in-fast tw-close:animate-scale-out-fade-out-faster"
  );
}

export const popoverClasses = {
  getContentClasses,
};
