import { Header } from 'components/Header/Header.tsx';
import styles from './Quiz.module.scss';
import { getQuestions } from 'helpers/questions.ts';
import { FC, useState } from 'react';
import { ProgressBar } from 'components/ProgressBar/ProgressBar.tsx';
import { GenderItem } from 'components/GenderItem/GenderItem.tsx';
import { FinalPage } from 'components/FinalPage/FinalPage.tsx';

export const Quiz: FC = () => {
  const [step, setStep] = useState(0);
  const [selectedGender, setSelectedGender] = useState('');

  const questions = getQuestions(selectedGender);
  const question = questions[step];
  const percentage = Math.round(((step === 0 ? 1 : step + 1) / questions.length) * 100);

  const handleGenderSelected = (index: number, gender: string) => {
    console.log(step, index, gender);
    if (step === 0) {
      setSelectedGender(gender);
    }

    setStep(step + 1);
  };

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
