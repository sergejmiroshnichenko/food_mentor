import { FC } from 'react';
import { IQuestionOption } from 'helpers/questions.ts';
import { FaArrowRightLong } from 'react-icons/fa6';
import styles from './GenderItem.module.scss';

interface IGenderItemProps {
  gender: IQuestionOption;
  handleGenderSelected: (index: number, gender: string) => void;
  step: number;
  item: string;
  index: number;
}

export const GenderItem: FC<IGenderItemProps> = ({
  gender,
  handleGenderSelected,
  step,
  item,
  index,
}) => {
  const handleClick = () => handleGenderSelected(index, String(gender.button));

  return (
    <>
      {step === 0 && (
        <div className={`${styles.genderBox} ${item}`}>
          <img src={gender.genderImg} alt="gender-image" />
          <button onClick={handleClick}>
            {gender.button} <FaArrowRightLong />
          </button>
        </div>
      )}
      {step > 0 && (
        <article className={`${styles.genderBox} ${item}`} onClick={handleClick}>
          <img src={gender.genderImg} alt="gender-image" />
          <h3>{gender.description}</h3>
        </article>
      )}
    </>
  );
};
