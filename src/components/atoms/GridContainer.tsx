'use client';

import React, { JSX } from 'react';

export const GridContainer = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ children, className, ...rest }, ref) => (
  <section
    ref={ref}
    {...rest}
    className={
      'mx-[calc(56/1440*100vw)] grid grid-cols-12 gap-x-5 py-9 max-xl:grid-cols-8 max-lg:mx-16 max-lg:grid-cols-6 max-md:mx-6 max-sm:grid-cols-4' +
      ` ${className}`
    }
  >
    {children}
  </section>
));

GridContainer.displayName = 'GridContainer';
