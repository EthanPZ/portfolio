const styles = {
  white:
    "text-base bg-white text-black font-semibold py-2 px-14 rounded-lg hover:bg-slate-300 transition-all",
  black:
    "text-base bg-black text-white font-semibold py-2 px-14 rounded-lg hover:border-white border-2 border-transparent transition-all",
};

function Button({ type, onClick, children }) {
  if (!type) return;

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
