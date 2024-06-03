import { useEffect } from "react";
import { useNotification } from "../contexts/NotificationContext";

function Notification({ msg }) {
  const { showNotification: isVisible, setShowNotification: setIsVisible } =
    useNotification();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, setIsVisible]);

  return (
    <div
      className={`flex justify-center transition-all duration-400 shadow-lg ${
        isVisible ? "opacity-full visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-stone-950 border-2 border-green-500 fixed top-5 px-6 py-4 rounded-lg z-[998] space-y-[.3em]">
        <h3 className="font-semibold text-lg">Notification</h3>
        <p className="text-sm max-w-[20em] tracking-md">{msg}</p>
      </div>
    </div>
  );
}

export default Notification;
