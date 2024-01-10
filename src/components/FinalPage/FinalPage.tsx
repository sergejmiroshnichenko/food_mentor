import styles from './FinalPage.module.scss';

export const FinalPage = () => {
  const handleSubmit = () => {
    console.log();
  };
  return (
    <div className={styles.pageWrapper}>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" />
        <p>
          We respect your privacy and use your email only to send you the Food-mentor program and
          other important emails. You won't receive spam.
        </p>
        {/*<div className={styles.lockIcon}>/!* Иконка замочка *!/</div>*/}
        <button type="submit">Get my plan</button>
      </form>
    </div>
  );
};
