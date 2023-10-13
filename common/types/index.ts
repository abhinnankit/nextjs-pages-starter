export type BreakpointTypes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type BreakpointContextType = {
  breakpoint: BreakpointTypes;
  updateBreakPoint: (breakpoint: BreakpointTypes) => void;
};
