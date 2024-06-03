import { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

import ScreenLoader from "./ScreenLoader";
// import SplineAlternative from "./SplineAlternative";

function SplineComponent({ splineLink, img }) {
  // if (window.innerWidth < 1200 && img) return <SplineAlternative img={img} />;

  return (
    <Suspense fallback={<ScreenLoader />}>
      <Spline scene={splineLink} />
    </Suspense>
  );
}

export default SplineComponent;
