import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTE_QUIZ_SET } from 'constants/routes.constants';
import { selectQuizSetById } from 'store/quizzes/selectors';
import { createQuizSet } from 'store/quizzes/thunks';

const useQuizSet = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id: quizSetId } = router.query;
  const quizSet = useSelector(selectQuizSetById(quizSetId as string));

  useEffect(() => {
    if (!quizSet) {
      (async () => {
        const createdSetId = await dispatch(createQuizSet());
        router.replace(`${ROUTE_QUIZ_SET}/${createdSetId}`);
      })();
    }
  }, [quizSet]);

  return quizSet;
};

export default useQuizSet;
