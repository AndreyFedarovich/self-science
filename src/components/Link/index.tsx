import React, { memo, ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
}

function Sidebar({ children, className, href }: LinkProps) {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}

export default memo(Sidebar);
