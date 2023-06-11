import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toastItems, setToastItems] = React.useState([]);
  
// remove all toasts at once if the user hit's the escape key :)
  useKeyDown("Escape", React.useCallback(() => {
    setToastItems([]);
  }, []));
 

  function addToastItems(message, variant){
    const newToastItem = {
      message,
      variant,
      id: crypto.randomUUID(),
    };
    setToastItems([...toastItems, newToastItem]);
  }

  function removeToastItems(index) {
    const newToastItems = [...toastItems];
    newToastItems.splice(index, 1);
    setToastItems(newToastItems);
  }
 
  const value = { toastItems, addToastItems, removeToastItems };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
