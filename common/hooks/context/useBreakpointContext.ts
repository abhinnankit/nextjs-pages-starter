import BreakpointContext from '@/store/breakpoint-context';
import { useContext } from 'react';

const useBreakpointContext = () => {
  const context = useContext(BreakpointContext);
  if (!context) {
    throw new Error('useRefContext must be used within a RefContextProvider');
  }
  return context;
};

export default useBreakpointContext;
