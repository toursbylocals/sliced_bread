import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

/**
 * Breakpoints from Tailwind V2
 *
 * @see https://tailwindcss.com/docs/breakpoints
 */
const breakpointsTailwind = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type BreakpointsTailwind = keyof typeof breakpointsTailwind;

const useBreakpoint = () => {
  const { width } = useWindowSize();
  const [breakpoint, setBreakPoint] = useState('');

  useEffect(() => {
    if (width > 0 && width < breakpointsTailwind.sm) {
      setBreakPoint('sm');
    }
    if (breakpointsTailwind.sm < width && width < breakpointsTailwind.md) {
      setBreakPoint('md');
    }
    if (breakpointsTailwind.md < width && width < breakpointsTailwind.lg) {
      setBreakPoint('lg');
    }
    if (breakpointsTailwind.lg < width && width < breakpointsTailwind.xl) {
      setBreakPoint('xl');
    }
    if (width >= breakpointsTailwind.xl) {
      setBreakPoint('1536');
    }
  }, [width]);

  return {
    current: breakpoint,
    isGreater(k: BreakpointsTailwind) {
      return breakpointsTailwind[k] < width;
    },
    isGreaterOrEqual(k: BreakpointsTailwind) {
      return breakpointsTailwind[k] <= width;
    },
    isSmaller(k: BreakpointsTailwind) {
      return breakpointsTailwind[k] > width;
    },
    isSmallerOrEqual(k: BreakpointsTailwind) {
      return breakpointsTailwind[k] >= width;
    },
    isInBetween(a: BreakpointsTailwind, b: BreakpointsTailwind) {
      return breakpointsTailwind[a] <= width && width <= breakpointsTailwind[b];
    },
  };
};

export default useBreakpoint;
