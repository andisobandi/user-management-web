import React from "react";

import { cx } from "@utils/cx";

export const Skeleton = React.forwardRef((props, ref) => {
  const { className, loading = true, variant = "pulse", style, asChild, children, ...rest } = props;

  const shineStyle =
    variant === "shine"
      ? {
          "--animate-from": "200%",
          "--animate-to": "-200%",
          "--start-color": "#f4f4f5",
          "--end-color": "#e4e4e7",
        }
      : {};

  const mergedClassName = cx(
    {
      "rounded shadow-none bg-clip-padding cursor-default text-transparent pointer-events-none select-none shrink-0":
        loading,
      "before:invisible after:invisible *:invisible": loading,
      "bg-none animate-[fade-in_var(--fade-duration,0.1s)_ease-out]": !loading,
    },
    {
      "bg-tw-bg-emphasized animate-[pulse_var(--duration,1.2s)_cubic-bezier(0.4,0,0.6,1)_infinite]":
        variant === "pulse" && loading,
      "bg-[linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))] bg-[length:400%_100%] animate-[bg-position_var(--duration,5s)_ease-in-out_infinite]":
        variant === "shine" && loading,
    },
    {
      "animate-none": variant === "none",
    },
    className
  );

  const mergedStyle = { ...shineStyle, ...style };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      className: cx(children.props.className, mergedClassName),
      style: { ...children.props.style, ...mergedStyle },
      ...rest,
    });
  }

  return (
    <div ref={ref} className={mergedClassName} style={mergedStyle} {...rest}>
      {children}
    </div>
  );
});
