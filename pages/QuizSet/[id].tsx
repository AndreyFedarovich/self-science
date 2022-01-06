import React from 'react';
import { getDashboardLayout } from 'layouts/DashboardLayout';
import QuizSet from 'screens/QuizSet';

function PageQuizSet() {
  return <QuizSet />;
}

PageQuizSet.getLayout = getDashboardLayout;

export default PageQuizSet;
