import React, { memo } from 'react';
import H5 from 'components/Typography/H5';
import LinkActive from 'components/LinkActive';
import styles from './SidebarSection.module.scss';

type SidebarSectionProps = {
  title?: string;
  list?: {
    id?: string,
    title?: string,
    link?: string,
    onClick?: () => void
  }[]
}

function SidebarSection({ title, list = [] }: SidebarSectionProps) {
  return (
    <>
      <H5 className={styles.listHeader}>{title}</H5>
      <div className={styles.list}>
        {list.map(({
          id, title: itemTitle, link, onClick,
        }) => (
          <div key={`${link}${id}`} className={styles.item}>
            <LinkActive
              className={styles.link}
              activeClassName={styles.active}
              href={onClick ? '' : link}
              onClick={onClick}
            >
              <span className={styles.linkValue}>{itemTitle || 'Untitled'}</span>
            </LinkActive>
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(SidebarSection);
