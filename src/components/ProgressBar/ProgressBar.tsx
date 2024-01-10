import styles from './Progress.module.scss';
import { FC } from 'react';

interface IProgressBarProps {
  percentage: number;
}

export const ProgressBar: FC<IProgressBarProps> = ({ percentage }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.progress} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};
