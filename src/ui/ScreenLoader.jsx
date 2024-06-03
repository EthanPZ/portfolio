function ScreenLoader() {
  return (
    <div className="fixed inset-0 bg-black opacity-80 flex justify-center items-center !z-[999]">
      <div className="traffic-loader"></div>
    </div>
  );
}

export default ScreenLoader;
