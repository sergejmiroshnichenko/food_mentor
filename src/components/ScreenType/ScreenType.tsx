import styles from '../Quiz/Quiz.module.scss';
import { FC } from 'react';
import { IQuestionOption } from 'services/questions.ts';
import { FinalPage } from 'components/FinalPage/FinalPage.tsx';

interface IScreenTypeProps {
  handleGenderSelected: (index: number, gender: string) => void;
  options: IQuestionOption[];
  step: number;
  screenType: 'rowScreen' | 'columnScreen';
}

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

export const ScreenType: FC<IScreenTypeProps> = ({
  options,
  handleGenderSelected,
  step,
  screenType,
}) => {
  const { wrapper, item } = screenStyles[screenType];

  return (
    <div className={`${styles.genderWrapper} ${wrapper}`}>
      {options.map((gender, index) => (
        <div className={`${styles.genderBox} ${item}`} key={index}>
          <img src={gender.genderImg} alt="gender-image" />
          {step === 0 ? (
            <button onClick={() => handleGenderSelected(index, String(gender.button))}>
              <span>{gender.button}</span>
            </button>
          ) : (
            <h3 onClick={() => handleGenderSelected(index, String(gender.button))}>
              {gender.description}
            </h3>
          )}
          {step === 4 && <FinalPage />}
        </div>
      ))}
    </div>
  );
};
