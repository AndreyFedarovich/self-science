import { ROUTE_QUIZ_SET } from 'constants/routes.constants';
import { quizSetType } from 'src/types/quizSetTypes';

export const mapQuestionSetOptionsToSidebar = (options: quizSetType[]) => options.map(({ id, onClick, title }: quizSetType) => ({
  title,
  link: `${ROUTE_QUIZ_SET}/${id}`,
  onClick,
}));
