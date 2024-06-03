import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

function NotificationProvider({ children }) {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <NotificationContext.Provider
      value={{ showNotification, setShowNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

function useNotification() {
  return useContext(NotificationContext);
}

export { NotificationProvider, useNotification };
