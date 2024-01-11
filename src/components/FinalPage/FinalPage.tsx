import styles from './FinalPage.module.scss';
import { FcLock } from 'react-icons/fc';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Notification } from 'components/Notification/Notification.tsx';
import { emailRegex } from 'helpers/emailValidation.ts';

export const FinalPage = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [warning, setWarning] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const isValidEmail = emailRegex.test(inputValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail) {
      setWarning('Email is not a valid');
    } else {
      setWarning('');
      setInputValue('');
      setNotificationVisible(true);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setWarning('');
  };

  useEffect(() => {
    if (!isValidEmail || !!warning) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [inputValue, isValidEmail, warning]);

  return (
    <div className={styles.pageWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="email"
          placeholder="Your email"
        />
        {warning && <p className={styles.warning}>{warning}</p>}
        <div className={styles.privacyInfo}>
          <span>
            <FcLock />
          </span>
          We respect your privacy and use your email only to send you the Food-mentor program and
          other important emails. You won't receive spam.
        </div>
        <button type="submit" disabled={!isFormValid}>
          Get my plan
        </button>
      </form>
      <Notification
        notificationVisible={notificationVisible}
        setNotificationVisible={setNotificationVisible}
      />
    </div>
  );
};
