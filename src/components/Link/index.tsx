import React, { memo, ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
}

const Sidebar = ({ children, className, href }: LinkProps) => (
  <NextLink href={href}>
    <a className={className}>{children}</a>
  </NextLink>
);

export default memo(Sidebar);
