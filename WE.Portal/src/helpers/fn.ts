import { StyleSetting, WidgetSetting } from "src/api-service/share-services/models";

export function getWidgetSetting(setting: WidgetSetting, value?: any) {
  if (!setting) return;

  return {
    decimal: formatDecimal(setting.decimal_setting),
    color: getStyleColor(setting.style_setting_list!, value),
  };
}

function formatDecimal(value: any) {
  return value || value == 0  ? '1.' + value + '-' + value : '1.2-2';
}

function getStyleColor(
  arr: StyleSetting[] = [],
  value: any
): string {
  if (!arr || !arr.length) return '';
  const colors: string[] = [];
  arr.filter((item: StyleSetting) => {
    const color = String(item.color + ' !important');
    if (item.operator === 'range') {
      if (
        item.value_from &&
        item.value_to &&
        value > item.value_from &&
        value < item.value_to
      ) {
        colors.push(color);
      } else if (item.value_from && !item.value_to && value > item.value_from) {
        colors.push(color);
      } else if (!item.value_from && item.value_to && value < item.value_to) {
        colors.push(color);
      } else if (!item.value_from && !item.value_to) {
        colors.push(color);
      }
    } else if (item.operator === 'eq') {
      if (item.value_equal && item.value_equal == value) {
        colors.push(color);
      }
    } else if (item.operator === 'neq') {
      if (item.value_equal && item.value_equal != value) {
        colors.push(color);
      }
    } else if (item.operator === 'range_equal') {
      if (
        item.value_from &&
        item.value_to &&
        value >= item.value_from &&
        value <= item.value_to
      ) {
        colors.push(color);
      } else if (
        item.value_from &&
        !item.value_to &&
        value >= item.value_from
      ) {
        colors.push(color);
      } else if (!item.value_from && item.value_to && value <= item.value_to) {
        colors.push(color);
      } else if (!item.value_from && !item.value_to) {
        colors.push(color);
      }
    }
  });
  return colors[0] || '';
}
