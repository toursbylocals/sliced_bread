import type { FC, PropsWithChildren } from 'react';

export const FormError: FC<PropsWithChildren> = ({ children }) => {
  return <div className="text-red-600 text-sm">{children}</div>;
};
