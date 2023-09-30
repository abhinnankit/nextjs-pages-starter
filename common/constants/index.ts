import { BreakpointTypes } from '../types';

export const EMPTY_ARROW_FN = () => {};

export const EMPTY_STRING = '';

export const BREAKPOINTS: {
  0: BreakpointTypes;
  480: BreakpointTypes;
  640: BreakpointTypes;
  768: BreakpointTypes;
  1024: BreakpointTypes;
  1280: BreakpointTypes;
  1536: BreakpointTypes;
} = {
  0: 'xxs',
  480: 'xs',
  640: 'sm',
  768: 'md',
  1024: 'lg',
  1280: 'xl',
  1536: '2xl',
};
