import React from "react";

import { Combobox as BaseCombobox } from "@components/forms/combobox";
import { Portal } from "@components/common/portal";
import { CloseButton } from "@components/compositions/ui/close-button";

export const ComboboxControl = React.forwardRef((props, ref) => {
  const { children, clearable, ...rest } = props;
  return (
    <BaseCombobox.Control {...rest} ref={ref}>
      {children}
      <BaseCombobox.IndicatorGroup>
        {clearable && <ComboboxClearTrigger />}
        <BaseCombobox.Trigger />
      </BaseCombobox.IndicatorGroup>
    </BaseCombobox.Control>
  );
});

const ComboboxClearTrigger = React.forwardRef((props, ref) => {
  return (
    <BaseCombobox.ClearTrigger asChild {...props} ref={ref}>
      <CloseButton
        size="xs"
        variant="plain"
        className="tw-focus-visible:tw-ring-inside tw-focus-visible:outline-2 pointer-events-none"
      />
    </BaseCombobox.ClearTrigger>
  );
});

export const ComboboxContent = React.forwardRef((props, ref) => {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <BaseCombobox.Positioner>
        <BaseCombobox.Content {...rest} ref={ref} />
      </BaseCombobox.Positioner>
    </Portal>
  );
});

export const ComboboxItem = React.forwardRef((props, ref) => {
  const { item, children, ...rest } = props;
  return (
    <BaseCombobox.Item key={item.value} item={item} {...rest} ref={ref}>
      {children}
      <BaseCombobox.ItemIndicator />
    </BaseCombobox.Item>
  );
});

export const ComboboxRoot = React.forwardRef((props, ref) => {
  return (
    <BaseCombobox.Root
      {...props}
      ref={ref}
      positioning={{ sameWidth: true, ...props.positioning }}
    />
  );
});

export const ComboboxItemGroup = React.forwardRef((props, ref) => {
  const { children, label, ...rest } = props;
  return (
    <BaseCombobox.ItemGroup {...rest} ref={ref}>
      <BaseCombobox.ItemGroupLabel>{label}</BaseCombobox.ItemGroupLabel>
      {children}
    </BaseCombobox.ItemGroup>
  );
});

export const ComboboxLabel = BaseCombobox.Label;
export const ComboboxInput = BaseCombobox.Input;
export const ComboboxEmpty = BaseCombobox.Empty;
export const ComboboxItemText = BaseCombobox.ItemText;
