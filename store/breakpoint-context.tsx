import { EMPTY_ARROW_FN } from '@/common/constants';
import { BreakpointContextType, BreakpointTypes } from '@/common/types';
import { createContext, useCallback, useMemo, useState } from 'react';

import { IPropsChildren } from '@/common/interfaces';

const breakpointCtxDefault: BreakpointContextType = {
  breakpoint: 'lg',
  updateBreakPoint: EMPTY_ARROW_FN,
};

const BreakpointContext = createContext<BreakpointContextType>(breakpointCtxDefault);

export function BreakpointContextProvider({ children }: IPropsChildren) {
  const [breakpointState, setBreakpointState] = useState<BreakpointContextType>(breakpointCtxDefault);

  const updateBreakPoint = useCallback(
    (_breakpoint: BreakpointTypes) => {
      setBreakpointState((prevState) => {
        if (prevState.breakpoint !== _breakpoint) {
          return {
            ...prevState,
            breakpoint: _breakpoint,
          };
        }
        return prevState;
      });
    },
    [setBreakpointState],
  );

  const breakpointContext: BreakpointContextType = useMemo(
    () => ({
      breakpoint: breakpointState.breakpoint,
      updateBreakPoint,
    }),
    [breakpointState, updateBreakPoint],
  );

  return <BreakpointContext.Provider value={breakpointContext}>{children}</BreakpointContext.Provider>;
}

export default BreakpointContext;
