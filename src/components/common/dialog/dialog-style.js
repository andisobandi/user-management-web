import { cx } from "@utils/cx";

function getPositionerClasses(params) {
  return cx(
    "flex w-screen h-dvh fixed left-0 top-0 justify-center overscroll-y-none z-[calc(var(--dialog-z-index)+var(--layer-index,0))]",
    {
      "p-10": params.size === "cover",
      "items-start": params.placement === "top",
      "items-center": params.placement === "center",
      "items-end": params.placement === "bottom",
      "overflow-hidden": params.scrollBehavior === "inside",
      "overflow-auto pointer-events-auto": params.scrollBehavior === "outside",
    }
  );
}

function getContentClasses(params) {
  return cx(
    "flex flex-col relative w-full outline-0 rounded-md text-sm my-[var(--dialog-margin,var(--dialog-base-margin))]",
    "z-[calc(var(--dialog-z-index)+var(--layer-index,0))] bg-tw-bg-panel shadow-tw-lg",
    {
      "mx-auto":
        params.placement === "center" ||
        params.placement === "top" ||
        params.placement === "bottom",
      "max-h-[calc(100%-7.5rem)]": params.scrollBehavior === "inside",
      "max-w-sm": params.size === "xs",
      "max-w-md": params.size === "sm",
      "max-w-lg": params.size === "md",
      "max-w-2xl": params.size === "lg",
      "max-w-4xl": params.size === "xl",
      "w-full h-full": params.size === "cover",
      "max-w-[100vw] min-h-screen rounded-none": params.size === "full",
      "tw-open:animate-scale-in-fade-in-moderate tw-close:animate-scale-out-fade-out-faster":
        params.motionPreset === "scale",
      "tw-open:animate-slide-fade-in-from-bottom-moderate tw-close:animate-slide-fade-out-to-bottom-faster":
        params.motionPreset === "slide-in-bottom",
      "tw-open:animate-slide-fade-in-from-top-moderate tw-close:animate-slide-fade-out-to-top-faster":
        params.motionPreset === "slide-in-top",
      "tw-open:animate-slide-fade-in-from-left-moderate tw-close:animate-slide-fade-out-to-left-faster":
        params.motionPreset === "slide-in-left",
      "tw-open:animate-slide-fade-in-from-right-moderate tw-close:animate-slide-fade-out-to-right-faster":
        params.motionPreset === "slide-in-right",
    }
  );
}

export const dialogClasses = {
  getPositionerClasses,
  getContentClasses,
};
