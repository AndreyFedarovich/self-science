export type quizType = {
  id: string;
  text?: string;
  isRequired: boolean
}

export type quizSetStatusType = 'inactive' | 'active';

export type quizSetType = {
  id: string;
  title?: string;
  questions?: quizType[];
  status: quizSetStatusType;
  onClick?: () => void;
};

export type quizTypes = 'text' | 'range' | boolean
