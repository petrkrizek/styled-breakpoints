// @flow
import { errorReporter, pxToEm, setDefaultTheme } from './helpers';
import { eitherGetBreakVal, eitherGetNextBreakVal } from './media-queries';
import type { CustomBreakpoints } from './models';

type CalcMinWidthInPx = (string, CustomBreakpoints, ?string) => string;
export const calcMinWidthInPx: CalcMinWidthInPx = (
  breakName,
  theme,
  errorPrefix,
) => {
  const newTheme = setDefaultTheme(theme);
  return eitherGetBreakVal(newTheme.breakpoints, breakName).fold(
    errorReporter(errorPrefix),
    pxToEm,
  );
};

type CalcMaxWidthInPx = (string, CustomBreakpoints, ?string) => string;
export const calcMaxWidthInPx: CalcMaxWidthInPx = (
  breakName,
  theme,
  errorPrefix,
) => {
  const newTheme = setDefaultTheme(theme);
  return eitherGetNextBreakVal(
    newTheme.breakpoints,
    breakName,
    errorPrefix,
  ).fold(errorReporter(errorPrefix), pxToEm);
};