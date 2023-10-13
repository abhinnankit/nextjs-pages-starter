import { useEffect, useState } from 'react';

import { BREAKPOINTS } from '../constants';
import { BreakpointTypes } from '../types';

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState<BreakpointTypes>();

  useEffect(() => {
    const handleResize = () => {
      const windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      if (windowSize.width > 0 && windowSize.width < 480) {
        setBreakPoint(BREAKPOINTS[0]);
      } else if (windowSize.width >= 480 && windowSize.width < 640) {
        setBreakPoint(BREAKPOINTS[480]);
      } else if (windowSize.width >= 640 && windowSize.width < 768) {
        setBreakPoint(BREAKPOINTS[640]);
      } else if (windowSize.width >= 768 && windowSize.width < 1024) {
        setBreakPoint(BREAKPOINTS[768]);
      } else if (windowSize.width >= 1024 && windowSize.width < 1280) {
        setBreakPoint(BREAKPOINTS[1024]);
      } else if (windowSize.width >= 1280 && windowSize.width < 1536) {
        setBreakPoint(BREAKPOINTS[1280]);
      } else {
        setBreakPoint(BREAKPOINTS[1536]);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
