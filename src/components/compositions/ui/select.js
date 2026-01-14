import React from "react";

import { Select as BaseSelect } from "@components/forms/select";
import { Portal } from "@components/common/portal";
import { CloseButton } from "@components/compositions/ui/close-button";

export const SelectTrigger = React.forwardRef((props, ref) => {
  const { children, clearable, ...rest } = props;
  return (
    <BaseSelect.Control {...rest}>
      <BaseSelect.Trigger
        ref={ref}
        className="text-tw-slate-600 dark:text-tw-navy-100 tw-placeholder-shown:text-tw-slate-400 font-normal border-tw-slate-300 dark:border-tw-navy-450 tw-open:border-blue-600 dark:tw-checked:border-blue-600"
      >
        {children}
      </BaseSelect.Trigger>
      <BaseSelect.IndicatorGroup>
        {clearable && <SelectClearTrigger />}
        <BaseSelect.Indicator className="text-tw-slate-400 dark:text-tw-navy-450" />
      </BaseSelect.IndicatorGroup>
    </BaseSelect.Control>
  );
});

const SelectClearTrigger = React.forwardRef((props, ref) => {
  return (
    <BaseSelect.ClearTrigger asChild {...props} ref={ref}>
      <CloseButton
        size="xs"
        variant="plain"
        className="tw-focus-visible:tw-ring-inside tw-focus-visible:outline-2 pointer-events-auto"
      />
    </BaseSelect.ClearTrigger>
  );
});

export const SelectContent = React.forwardRef((props, ref) => {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <BaseSelect.Positioner>
        <BaseSelect.Content {...rest} ref={ref} />
      </BaseSelect.Positioner>
    </Portal>
  );
});

export const SelectItem = React.forwardRef((props, ref) => {
  const { item, children, ...rest } = props;
  return (
    <BaseSelect.Item
      key={item.value}
      item={item}
      {...rest}
      ref={ref}
      className="text-tw-slate-600 dark:text-tw-navy-100 tw-highlighted:bg-blue-600 tw-highlighted:text-white dark:tw-highlighted:bg-blue-500 tw-checked:bg-blue-600 tw-checked:text-white dark:tw-checked:bg-blue-600"
    >
      {children}
      <BaseSelect.ItemIndicator />
    </BaseSelect.Item>
  );
});

export const SelectValueText = React.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  return (
    <BaseSelect.ValueText {...rest} ref={ref}>
      <BaseSelect.Context>
        {(select) => {
          const items = select.selectedItems;
          if (items.length === 0) return props.placeholder;
          if (children) return children(items);
          if (items.length === 1) return select.collection.stringifyItem(items[0]);
          return `${items.length} selected`;
        }}
      </BaseSelect.Context>
    </BaseSelect.ValueText>
  );
});

export const SelectRoot = React.forwardRef((props, ref) => {
  return (
    <BaseSelect.Root {...props} ref={ref} positioning={{ sameWidth: true, ...props.positioning }}>
      {props.asChild ? (
        props.children
      ) : (
        <React.Fragment>
          <BaseSelect.HiddenSelect />
          {props.children}
        </React.Fragment>
      )}
    </BaseSelect.Root>
  );
});

export const SelectItemGroup = React.forwardRef((props, ref) => {
  const { children, label, ...rest } = props;
  return (
    <BaseSelect.ItemGroup {...rest} ref={ref}>
      <BaseSelect.ItemGroupLabel>{label}</BaseSelect.ItemGroupLabel>
      {children}
    </BaseSelect.ItemGroup>
  );
});

export const SelectLabel = BaseSelect.Label;
export const SelectItemText = BaseSelect.ItemText;
