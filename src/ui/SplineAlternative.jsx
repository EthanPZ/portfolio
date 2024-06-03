function SplineAlternative({ img }) {
  return (
    <img
      className="object-cover m-auto w-2/4 h-max aspect-auto"
      src={img}
      alt={img}
      loading="lazy"
    />
  );
}

export default SplineAlternative;
