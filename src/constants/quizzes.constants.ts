export const QUIZ_SET_STATUSES = {
  INACTIVE: 'inactive' as const,
  ACTIVE: 'active' as const,
};


export const QUESTION_TYPES = [
  {
    key: 'text',
    value: 'Text'
  }, {
    key: 'range',
    value: 'Range'
  },
];
export const ANSWER_TYPES = {
  TEXT: 'text' as const,
  RANGE: 'range' as const,
  SELECT: 'select' as const,
};

