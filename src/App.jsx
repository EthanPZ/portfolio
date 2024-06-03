import { Suspense, lazy, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import Header from "./components/Header";
import LazyLoad from "react-lazyload";
// import ScreenLoader from "./ui/ScreenLoader";
import Loader from "./ui/Loader";
import Hero from "./components/Hero";
const SplitSection = lazy(() => import("./ui/SplitSection"));
const Skills = lazy(() => import("./components/Skills"));
const MyWork = lazy(() => import("./components/MyWork"));
const Footer = lazy(() => import("./components/Footer"));

import chips from "./assets/3d/chips.png";
import rocket from "./assets/3d/rocket.png";
import heart from "./assets/3d/heart.png";

function App() {
  return (
    <div className="h-full text-white">
      <Header />

      <main>
        <Fade>
          <Hero />
        </Fade>

        <div className="lg:space-y-sections space-y-sectionsMobile p-pagePadding max-w-screen-2xl m-auto">
          <Fade>
            <Suspense fallback={<Loader />}>
              <LazyLoad>
                <SplitSection
                  title="Why Am I different?"
                  paragraph="What sets me apart is my relentless curiosity and self-taught web development journey. I've honed my skills through real-world projects and experimentation. My passion for clean, efficient code matches my knack for problem-solving. If you want a developer dedicated to growth and flawless code, look no further!"
                  customCss="scale-[1.2] lg:scale-[1.4]"
                  img={chips}
                />
              </LazyLoad>
            </Suspense>
          </Fade>

          <Fade>
            <Suspense fallback={<Loader />}>
              <LazyLoad>
                <SplitSection
                  type="right"
                  title="My Journey"
                  paragraph="As a self-taught web developer with almost three years of experience, I've honed my skills in HTML and CSS, developed two years of expertise in JavaScript, and spent the past year learning React. My journey reflects a commitment to continuous learning and a passion for creating innovative web solutions, driving my ambition to excel as a software engineer."
                  img={rocket}
                />
              </LazyLoad>
            </Suspense>
          </Fade>

          <Fade>
            <Suspense fallback={<Loader />}>
              <LazyLoad>
                <SplitSection
                  title="i make what people love"
                  paragraph="Creating products that people love is at the heart of what I do. Whether it's intuitive web applications or engaging user experiences, my focus is always on the end-user. By blending creativity with technical skill, I strive to build software that delights and satisfies, transforming ideas into meaningful, impactful realities."
                  customCss="lg:scale-[1.2]"
                  img={heart}
                />
              </LazyLoad>
            </Suspense>
          </Fade>
        </div>

        <Fade>
          <Suspense fallback={<Loader />}>
            <LazyLoad>
              <Skills />
            </LazyLoad>
          </Suspense>
        </Fade>

        <Fade>
          <Suspense fallback={<Loader />}>
            <LazyLoad>
              <MyWork />
            </LazyLoad>
          </Suspense>
        </Fade>

        <Suspense fallback={<Loader />}>
          <LazyLoad>
            <Footer />
          </LazyLoad>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
