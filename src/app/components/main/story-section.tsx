"use client";
import { useIntersectionObserver } from "@/app/hooks/use-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

const heightVariant = {
  hidden: { height: 0 },
  show: { height: "360px", transition: { duration: 1.0, ease: "easeIn" } },
};

function Characters() {
  return (
    <div className="">
      <div className="flex gap-1">
        <div className="flex-1 relative">
          <Image
            src="/assets/images/story-image-1.png"
            width="246"
            height="754"
            alt="image-1"
            // className="flex-1"
          />
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/images/story-image-2.png"
            width="246"
            height="754"
            alt="image-2"
            // className="relative flex-1"
          />
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/images/story-image-3.png"
            width="246"
            height="754"
            alt="image-3"
            // className="relative flex-1"
          />
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/images/story-image-4.png"
            width="246"
            height="754"
            alt="image-4"
            // className="relative flex-1"
          />
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/images/story-image-5.png"
            width="246"
            height="754"
            alt="image-5"
            // className="relative flex-1"
          />
        </div>
      </div>
    </div>
  );
}

export default function StorySection() {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const heightControl = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true });
  const inView = !!entry?.isIntersecting;

  useEffect(() => {
    if (inView) {
      controls.start("show");
      setTimeout(() => {
        controls2.start("show");
      }, 200);
    }
  }, [controls, controls2, inView]);

  useEffect(() => {
    if (inView) {
      heightControl.start("show");
    }
  }, [heightControl, inView]);

  return (
    <section
      className="text-white md:px-auto flex relative"
      style={{
        maxHeight: "2000px",
        minHeight: "640px",
        // minWidth: "1280px",
        overflow: "scroll",
      }}
    >
      <div className="container text-medium" ref={ref}>
        <motion.h1
          className="font-medium text-6xl mb-6 text-white"
          initial="hidden"
          animate={controls}
          variants={fadeUpVariant}
        >
          The story of
        </motion.h1>
        <motion.h1
          className="font-bold text-9xl mb-10 inline-block"
          style={{
            background:
              "linear-gradient(90deg, #FF87A4, rgba(189, 0, 255, 0.5))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial="hidden"
          animate={controls}
          variants={fadeUpVariant}
        >
          META MIU
        </motion.h1>
        <Characters />
      </div>
    </section>
  );
}
