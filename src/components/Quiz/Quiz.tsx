import { Header } from 'components/Header/Header.tsx';
import styles from './Quiz.module.scss';
import { getQuestions } from 'helpers/questions.ts';
import { FC, useState } from 'react';
import { ProgressBar } from 'components/ProgressBar/ProgressBar.tsx';
import { GenderItem } from 'components/GenderItem/GenderItem.tsx';
import { FinalPage } from 'components/FinalPage/FinalPage.tsx';

interface IStepResult {
  step: number;
  answer: number;
}

interface IQuizResults {
  selectedGender: string;
  results: IStepResult[];
}

export const Quiz: FC = () => {
  const [step, setStep] = useState(0);
  const [quizResults, setQuizResults] = useState<IQuizResults>({
    selectedGender: '',
    results: [],
  });
  const questions = getQuestions(quizResults.selectedGender);
  const question = questions[step];
  const percentage = Math.round(((step === 0 ? 1 : step + 1) / questions.length) * 100);

  const handleGenderSelected = (index: number, gender: string) => {
    setQuizResults((prevResults) => ({
      selectedGender: prevResults.selectedGender || gender,
      results: step > 0 ? [...prevResults.results, { step, answer: index }] : prevResults.results,
    }));
    setStep((prevStep) => prevStep + 1);
  };

  console.log('quizResults', quizResults); //   for future work

  const screenStyles = {
    rowScreen: {
      wrapper: styles.primaryDisplay,
      item: styles.primaryBox,
    },
    columnScreen: {
      wrapper: styles.secondaryDisplay,
      item: styles.secondaryBox,
    },
  };

  const { wrapper, item } = screenStyles[question.screenType];

  return (
    <>
      <Header />
      <ProgressBar percentage={percentage} />
      <h6 className={styles.quizInfo}>{question.quizInfo}</h6>
      <h2>{question.title}</h2>
      <h3>{question.subtitle}</h3>
      {step < questions.length - 1 ? (
        <div className={`${styles.genderWrapper} ${wrapper}`}>
          {question.options.map((gender, index) => (
            <GenderItem
              key={index}
              item={item}
              gender={gender}
              handleGenderSelected={handleGenderSelected}
              step={step}
              index={index}
            />
          ))}
        </div>
      ) : (
        <FinalPage />
      )}
    </>
  );
};
