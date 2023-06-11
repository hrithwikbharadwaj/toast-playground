import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';


import styles from './Toast.module.css';

import VisuallyHiddenStyles from '../VisuallyHidden/VisuallyHidden.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, closeToast }) {
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24}/>
      </div>
      <div className={VisuallyHiddenStyles.wrapper}>
          {variant}
        </div>
      <p className={styles.content}>
       
        {children}
      </p>
      <button
      className={styles.closeButton}
      onClick={closeToast}
      aria-label="Dismiss message"
      aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
