import { MouseEvent } from 'react';
import cn from 'classnames';
import { withRouter } from 'next/router';

function ActiveLink({
  router, href, className, activeClassName, onClick, children,
}: any) {
  (() => {
    if (typeof window !== 'undefined') {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (onClick) {
      onClick();
      return;
    }

    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(className, isCurrentPath && activeClassName)}
    >
      {children}
    </a>
  );
}

export default withRouter(ActiveLink);
