import React, { ChangeEvent, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createQuestion, updateQuestions } from 'store/quizzes/thunks';
import Dropdown from 'components/Dropdown';
import Input from 'components/FormComponents/Input';
import { quizType } from 'src/types/quizSetTypes';
import Checkbox from 'components/Checkbox';
import ButtonLink from 'components/Buttons/ButtonLink';
import styles from './Questions.module.scss';

interface HandleChangeQuestion {
  questionId: string;
  isRequired: boolean
  questionText?: string
}

interface HandleChangeQuestions {
  questionId: string;
  isRequired: boolean
  questionText?: string

}

interface QuestionsProps {
  list?: quizType[]
  quizSetId?: string;
}

function Questions({ list, quizSetId }: QuestionsProps) {
  const dispatch = useDispatch();

  const handleChangeQuestions = (
    { questionId, questionText, isRequired }: HandleChangeQuestions,
  ) => {
    if (!quizSetId) {
      return;
    }

    dispatch(updateQuestions({
      quizSetId,
      questionId,
      questionText,
      isRequired,
    }));
  };

  const handleChangeQuestion = (
    { questionId, isRequired }: HandleChangeQuestion,
  ) => (event: ChangeEvent<HTMLInputElement>) => {
    handleChangeQuestions({
      questionId,
      questionText: event.target.value,
      isRequired,
    });
  };

  const handleChangeRequired = (
    { questionId, questionText, isRequired }: HandleChangeQuestion,
  ) => () => {
    handleChangeQuestions({ questionId, questionText, isRequired: !isRequired });
  };

  const handleCreateQuestion = useCallback(() => {
    dispatch(createQuestion(quizSetId as string));
  }, [quizSetId]);

  return (
    <>
      {(list?.map(({ id, text, isRequired }) => (
        <fieldset className={styles.field} key={id}>
          <div className={styles.grid2}>
            <Input
              value={text || ''}
              label="Question"
              placeholder="Question"
              name={`question${id}`}
              onChange={handleChangeQuestion({ questionId: id, isRequired })}
            />
            <Dropdown
              label="Answer type"
              placeholder="Answer type"
              name={`answerType${id}`}
              options={['Text']}
            />
          </div>
          <div className={styles.panel}>
            <Checkbox
              name={`require${id}`}
              isActive={isRequired}
              label="is required"
              onClick={handleChangeRequired({
                questionId: id,
                questionText: text,
                isRequired,
              })}
            />
          </div>
        </fieldset>
      )))}
      <div className={styles.addMore}>
        <ButtonLink onClick={handleCreateQuestion} text="+ Add question" />
      </div>
    </>
  );
}

Questions.defaultProps = {
  list: [],
  quizSetId: '',
};

export default memo(Questions);
