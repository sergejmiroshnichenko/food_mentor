import styles from './Notification.module.scss';
import { FC, useEffect } from 'react';

interface NotificationProps {
  notificationVisible: boolean;
  setNotificationVisible: (visible: boolean) => void;
}

export const Notification: FC<NotificationProps> = ({
  notificationVisible,
  setNotificationVisible,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (notificationVisible) {
        setNotificationVisible(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [notificationVisible, setNotificationVisible]);

  return notificationVisible ? (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>User successfully created </p>
        <p className={styles.circle}>&#10003;</p>
      </div>
    </div>
  ) : null;
};
