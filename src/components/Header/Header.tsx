import styles from './Header.module.scss';
import Happy from '/happy.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Happy} alt="avocado" />
      <h5>Food Mentor</h5>
    </header>
  );
};
