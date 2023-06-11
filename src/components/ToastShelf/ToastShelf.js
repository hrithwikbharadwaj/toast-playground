import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const toast = React.useContext(ToastContext);
  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {
        toast.toastItems.map((toastItem, index) => (
          <li className={styles.toastWrapper} key={toastItem.id}>
            <Toast
              variant={toastItem.variant}
              closeToast={() => toast.removeToastItems(index)}
            >
              {toastItem.message}
            </Toast>
          </li>
        ))
      }
    </ol>
  );
}

export default ToastShelf;
