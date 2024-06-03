function Icon({ children }) {
  return (
    <li className="relative p-3 text-2xl rounded-lg cursor-pointer bg-stone-900 overflow-hidden group">
      <span className="relative z-[99]">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-stone-800 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-stone-900 to-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </li>
  );
}

export default Icon;
