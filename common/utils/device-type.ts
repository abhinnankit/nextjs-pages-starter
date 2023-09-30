import { BreakpointTypes } from '../types';

export const isSmallScreen = (breakpoint: BreakpointTypes) => ['xxs', 'xs', 'sm'].indexOf(breakpoint) > -1;

export const isMediumScreen = (breakpoint: BreakpointTypes) => ['md', 'lg'].indexOf(breakpoint) > -1;

export const isLargeScreen = (breakpoint: BreakpointTypes) => ['xl', '2xl'].indexOf(breakpoint) > -1;
