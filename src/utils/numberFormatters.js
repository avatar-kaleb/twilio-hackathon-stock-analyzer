import { NUMBER_FORMAT_TYPES, RATIO_TYPES } from '../constants/enums';

export const formatNumber = ({ ratio, value }) => {
  switch (RATIO_TYPES[ratio]) {
    case NUMBER_FORMAT_TYPES.currency:
      return currencyFormat({ value });
    case NUMBER_FORMAT_TYPES.decimal:
      return decimalFormat({ value });
    case NUMBER_FORMAT_TYPES.percent:
      return percentFormat({ value });
    default:
      return decimalFormat({ value });
  }
};

export const currencyFormat = ({ value, locale = 'en-US', currency = 'USD' }) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);

export const decimalFormat = ({ value, locale = 'en-US', currency = 'USD' }) =>
  new Intl.NumberFormat(locale, {
    style: 'decimal',
    currency: currency,
  }).format(value);

export const percentFormat = ({ value }) => {
  return `${value}%`;
};
