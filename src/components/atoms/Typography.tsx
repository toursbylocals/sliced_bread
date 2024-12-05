import { JSX } from 'react';

import Display1 from './typography/Display1';
import Heading1 from './typography/Heading1';
import Heading2 from './typography/Heading2';
import Heading3 from './typography/Heading3';
import Heading4 from './typography/Heading4';
import Description from './typography/Description';
import Description2 from './typography/Description2';
import DescriptionLink from './typography/DescriptionLink';

export type TypographyVariant =
  | 'display1'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'description'
  | 'description2'
  | 'link';

export const Typography = ({
  variant,
  color = 'text-primary-400',
  className = '',
  children,
}: { variant: TypographyVariant } & (
  | JSX.IntrinsicElements['h1']
  | JSX.IntrinsicElements['h2']
  | JSX.IntrinsicElements['h3']
  | JSX.IntrinsicElements['h4']
  | JSX.IntrinsicElements['h5']
  | JSX.IntrinsicElements['p']
  | JSX.IntrinsicElements['span']
)) => (
  <>
    {variant === 'display1' && (
      <Display1 color={color} className={className}>
        {children}
      </Display1>
    )}

    {variant === 'heading1' && (
      <Heading1 color={color} className={className}>
        {children}
      </Heading1>
    )}

    {variant === 'heading2' && (
      <Heading2 color={color} className={className}>
        {children}
      </Heading2>
    )}

    {variant === 'heading3' && (
      <Heading3 color={color} className={className}>
        {children}
      </Heading3>
    )}

    {variant === 'heading4' && (
      <Heading4 color={color} className={className}>
        {children}
      </Heading4>
    )}

    {variant === 'description' && (
      <Description color={color} className={className}>
        {children}
      </Description>
    )}

    {variant === 'description2' && (
      <Description2 color={color} className={className}>
        {children}
      </Description2>
    )}

    {variant === 'link' && (
      <DescriptionLink color={color} className={className}>
        {children}
      </DescriptionLink>
    )}
  </>
);
