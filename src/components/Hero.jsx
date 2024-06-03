import { Suspense, lazy } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { GoArrowDown } from "react-icons/go";

import Button from "../ui/Button";
import LazyLoad from "react-lazyload";
import { useNotification } from "../contexts/NotificationContext";
import copyDiscord from "../utils/copyDiscord";
import Notification from "../ui/Notification";
const SplineComponent = lazy(() => import("../ui/SplineComponent"));
import lines from "../assets/3d/lines.png";
import Loader from "../ui/Loader";

function Hero() {
  const { setShowNotification } = useNotification();

  return (
    <section className="relative h-screen flex flex-col justify-center items-center lg:pt-20 overflow-hidden">
      <div className="absolute opacity-30 w-full m-auto h-full md:max-w-[84rem] md:translate-y-[-50px]">
        <Suspense fallback={<Loader />}>
          <LazyLoad>
            <SplineComponent
              splineLink="https://prod.spline.design/hA7KTZ-EQiwjqKrD/scene.splinecode"
              img={lines}
            />
          </LazyLoad>
        </Suspense>
      </div>

      <div className="flex flex-col justify-center items-center pb-[5em] gap-[1.2rem] lg:gap-elements z-10 p-pagePadding">
        <h1 className="text-3xl md:text-5xl font-bold max-w-[40rem] text-center">
          <TypeWriterEffect
            cursorColor="white"
            multiText={[
              "I'm a web developer",
              "I'm a UX/UI Designer",
              "I'm here for you",
              "I'm here to make quality web apps",
              "I'm EthanPZ",
            ]}
            typeSpeed={50}
          />
        </h1>
        <p className="text-lg md:text-xl max-w-[25em] text-center font-normal tracking-wide leading-8">
          I'm a dedicated developer, focused on clear, effective code and
          continual learning.
        </p>

        <div className="flex lg:gap-8 gap-4 flex-col md:flex-row mt-8 lg:mt-0">
          <Button
            type="white"
            onClick={() => {
              copyDiscord();
              setShowNotification(true);
            }}
          >
            Contact me
          </Button>
        </div>

        <div className="text-center flex flex-col items-center gap-8 mt-12">
          <p className="text-stone-300">Or keep on scrolling...</p>
          <GoArrowDown style={{ color: "#d6d3d1", fontSize: "1.3rem" }} />
        </div>
      </div>

      <Notification msg="You've copied my discord username, now just add me and start building a great product with me!" />
    </section>
  );
}

export default Hero;
