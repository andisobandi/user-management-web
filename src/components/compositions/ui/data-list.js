import React from "react";

import { cx } from "@utils/cx";
import { DataList as BaseDataList } from "@components/common/data-list";

export const DataListRoot = BaseDataList.Root;

export const DataListItem = React.forwardRef((props, ref) => {
  const { label, info, value, children, grow, ...rest } = props;
  return (
    <BaseDataList.Item ref={ref} {...rest}>
      <BaseDataList.ItemLabel className={cx({ "flex-1": grow })}>{label}</BaseDataList.ItemLabel>
      <BaseDataList.ItemValue className={cx({ "flex-1": grow })}>{value}</BaseDataList.ItemValue>
      {children}
    </BaseDataList.Item>
  );
});
