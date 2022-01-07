import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectQuizSets } from 'store/quizzes/selectors';
import { quizSetType } from 'src/types/quizSetTypes';
import SidebarSection from './SidebarSection';
import styles from './Sidebar.module.scss';
import { mapQuestionSetOptionsToSidebar } from './helpers/mapQuestionSetOptionsToSidebar';

const createQuizSetOption = {
  id: 'createQuizSetOption',
  title: '+ Create set',
};

const createActivitiesSetOption = {
  id: 'createActivitiesSetOption',
  title: '+ Create set',
};

const settings = [
  {
    title: 'Profile',
    link: '/Profile',
  },
  {
    title: 'Notifications',
    link: '/Notifications',
  },
];

function Sidebar() {
  const quizSets = useSelector(selectQuizSets);

  const quizSet = mapQuestionSetOptionsToSidebar([
    ...quizSets,
    createQuizSetOption as quizSetType,
  ]);

  return (
    <aside className={styles.root}>
      <div className={styles.content}>
        <div className={styles.row}>
          <SidebarSection title="Quizzes:" list={quizSet} />
        </div>
        <div className={styles.row}>
          <SidebarSection
            title="Activities:"
            list={[createActivitiesSetOption]}
          />
        </div>
        <div className={styles.row}>
          <SidebarSection title="Settings:" list={settings} />
        </div>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
