interface HelperButtonUiType {
  isActiveQuizSet: boolean;
  isValidQuestionSet: boolean;
}

const getButtonUiType = ({
  isActiveQuizSet,
  isValidQuestionSet,
}: HelperButtonUiType) => {
  if (isActiveQuizSet || !isValidQuestionSet) {
    return 'default';
  }

  return 'success';
};

export default getButtonUiType;
