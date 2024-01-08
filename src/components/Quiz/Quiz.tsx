import { Header } from 'components/Header/Header.tsx';
import styles from './Quiz.module.scss';
import { IQuestion } from 'services/questions.ts';
import { FC } from 'react';
import { ScreenType } from 'components/ScreenType/ScreenType.tsx';
import { ProgressBar } from 'components/PregressBar/PregressBar.tsx';

interface IQuiz {
  step: number;
  question: IQuestion;
  handleGenderSelected: (index: number, gender: string) => void;
  percentage: number;
}

export const Quiz: FC<IQuiz> = ({ question, handleGenderSelected, step, percentage }) => {
  console.log('percentage', percentage);
  return (
    <>
      <Header />
      <ProgressBar percentage={percentage} />
      <h6 className={styles.quizInfo}>{question.quizInfo}</h6>
      <h2>{question.title}</h2>
      <h3>{question.subtitle}</h3>
      <ScreenType
        options={question.options}
        handleGenderSelected={handleGenderSelected}
        screenType={question.screenType}
        step={step}
      />
    </>
  );
};
