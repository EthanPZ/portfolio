import { Suspense, lazy } from "react";
import SplineAlternative from "./SplineAlternative";
import Loader from "./Loader";

const SplineComponent = lazy(() => import("./SplineComponent"));

function SplitSection({ type, title, paragraph, img, customCss }) {
  return (
    <section className="flex lg:justify-around flex-col items-center lg:flex-row m-auto relative lg:gap-0">
      <div
        className={`space-y-elements z-[2] text-center lg:text-left m-auto lg:m-0 order-2 lg:order-none ${
          type === "right" ? "!order-2" : ""
        }`}
      >
        <h2 className="capitalize font-bold lg:text-3xl text-xl">{title}</h2>
        <p className="lg:text-lg text-base tracking-wide leading-8 max-w-[35em]">
          {paragraph}
        </p>
      </div>

      <div
        className={`z-1 max-w-[20em] mb-[4.5em] lg:mb-0 m-auto lg:m-0 ${customCss}`}
      >
        <Suspense fallback={<Loader />}>
          <SplineAlternative img={img} />
        </Suspense>
      </div>
    </section>
  );
}

export default SplitSection;
