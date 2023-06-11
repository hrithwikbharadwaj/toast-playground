import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("notice");
  const toast = React.useContext(ToastContext);

  function submitForm(event) {
    event.preventDefault();
    toast.addToastItems(toastMessage, toastVariant);
    setToastMessage("");
    setToastVariant("notice")
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf/>
      <form onSubmit={(event) => submitForm(event)}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={toastMessage}
                onChange={(event) => setToastMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {
                VARIANT_OPTIONS.map((variant) =>{
                  const id = `variant-${variant}`;
                  return (
                    <label htmlFor={id} key={variant}>
                      <input
                        id={id}
                        type="radio"
                        name="variant"
                        value={variant}
                        checked={toastVariant === variant}
                        onChange={(event) => setToastVariant(event.target.value)}
                      />
                      {variant}
                    </label>
                  )
                } 

                )
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
