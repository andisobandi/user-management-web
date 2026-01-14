import React from "react";

import { Group } from "@components/common/group";
import { cx } from "@utils/cx";
import { InputAddon } from "./input-addon";
import { InputElement } from "./input-element";

export const InputGroup = React.forwardRef((props, ref) => {
  const {
    startElement,
    startElementProps,
    endElement,
    endElementProps,
    startAddon,
    startAddonProps,
    endAddon,
    endAddonProps,
    children,
    className,
    ...rest
  } = props;

  const child = React.Children.only(children);
  const attached = Boolean(startAddon || endAddon);

  return (
    <Group
      className={cx("w-full", className)}
      ref={ref}
      attached={attached}
      skip={(el) => el.type === InputElement}
      {...rest}
    >
      {startAddon && <InputAddon {...startAddonProps}>{startAddon}</InputAddon>}
      {startElement && (
        <InputElement className="pointer-events-none" {...startElementProps}>
          {startElement}
        </InputElement>
      )}
      {React.cloneElement(child, {
        ...child.props,
        className: cx(
          {
            "ps-[calc(var(--input-height)-var(--start-offset,0px))]": startElement,
            "pe-[calc(var(--input-height)-var(--end-offset,0px))]": endElement,
          },
          child.props.className
        ),
      })}
      {endElement && (
        <InputElement placement="end" {...endElementProps}>
          {endElement}
        </InputElement>
      )}
      {endAddon && <InputAddon {...endAddonProps}>{endAddon}</InputAddon>}
    </Group>
  );
});
