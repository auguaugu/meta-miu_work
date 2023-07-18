"use client";
import { useIntersectionObserver } from "@/app/hooks/use-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/use-media-query";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

function MotionDiv({
  children,
  isInView,
  delay,
  className,
}: {
  children: React.ReactNode;
  isInView: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: { duration: 0.5, ease: "easeIn", delay: delay || 0 },
      }}
      initial={{
        transform: "translateY(100px)",
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
function calculateAngle(width: number) {
  const maxWidth = 1280;
  const minWidth = 360;
  const maxAngle = 160;
  const minAngle = 142;
  const splitWidth = 767;
  const upperMaxAngle = 161.5;
  const upperMinAngle = 147;

  if (width <= minWidth) {
    return minAngle;
  } else if (width <= splitWidth) {
    const widthRange = splitWidth - minWidth;
    const angleRange = 162 - minAngle;
    const normalizedWidth = width - minWidth;
    const anglePerWidth = angleRange / widthRange;
    const angle = minAngle + anglePerWidth * normalizedWidth;
    return angle;
  } else if (width <= maxWidth) {
    const widthRange = maxWidth - splitWidth;
    const angleRange = upperMaxAngle - upperMinAngle;
    const normalizedWidth = width - splitWidth;
    const anglePerWidth = angleRange / widthRange;
    const angle = upperMinAngle + anglePerWidth * normalizedWidth;
    return angle;
  } else {
    return maxAngle;
  }
}

function Characters() {
  const ref = useRef<HTMLDivElement | null>(null);
  const widthRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const isMatchMd = useMediaQuery("(max-width: 767px)");
  const [angle, setAngle] = useState(160);

  useEffect(() => {
    if (!widthRef.current) return;
    const handleResize = () => {
      const divWidth = widthRef.current?.offsetWidth;
      setAngle(calculateAngle(divWidth!));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(widthRef.current!);

    return () => {
      resizeObserver.unobserve(widthRef.current!);
    };
  }, []);

  return (
    <div className="">
      <div className="relative container z-10">
        <div className="flex gap-1">
          <MotionDiv
            isInView={isInView}
            className="flex-1 relative md:top-48 top-24"
            delay={0.3}
          >
            <Image
              src="/assets/images/story-image-1.png"
              width="246"
              height="754"
              alt="image-1"
              // className="flex-1"
            />
          </MotionDiv>
          <MotionDiv
            isInView={isInView}
            className="flex-1 relative md:top-24 top-12"
            delay={0.5}
          >
            <Image
              src="/assets/images/story-image-2.png"
              width="246"
              height="754"
              alt="image-2"
              // className="relative flex-1"
            />
          </MotionDiv>
          <MotionDiv
            isInView={isInView}
            className="flex-1 relative"
            delay={0.7}
          >
            <Image
              src="/assets/images/story-image-3.png"
              width="246"
              height="754"
              alt="image-3"
              // className="relative flex-1"
            />
          </MotionDiv>
          <MotionDiv
            isInView={isInView}
            className="flex-1 relative md:bottom-24 bottom-12"
            delay={0.9}
          >
            <Image
              src="/assets/images/story-image-4.png"
              width="246"
              height="754"
              alt="image-4"
              // className="relative flex-1"
            />
          </MotionDiv>
          <MotionDiv
            isInView={isInView}
            className="flex-1 relative md:bottom-48 bottom-24"
            delay={1.1}
          >
            <Image
              src="/assets/images/story-image-5.png"
              width="246"
              height="754"
              alt="image-5"
              // className="relative flex-1"
            />
          </MotionDiv>
        </div>
      </div>
      <div ref={ref}></div>
      <div
        className="relative flex justify-center items-center"
        style={{
          minHeight: 280,
        }}
      >
        {isInView && (
          <motion.div
            style={{
              // rotate: isMatchMd ? "142deg" : "160deg",
              rotate: `${angle}deg`,
            }}
            initial={{
              position: "relative",
              bottom: isMatchMd ? 160 : 160,
              right: 0,
              left: 0,
              marginLeft: "auto",
              marginRight: "auto",
              scale: 1.5,
              background:
                "linear-gradient(90deg, #ABDEE5, rgba(223, 64, 122, 0.65))",
              width: 4000,
              height: 2,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            animate={{
              opacity: 0.3,
              height: isMatchMd ? 70 : 140,
            }}
          />
        )}
      </div>
      <div ref={widthRef}></div>
    </div>
  );
}

export default function StorySection() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true });
  const inView = !!entry?.isIntersecting;

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <section
      className="text-white md:px-auto relative"
      style={{
        // maxHeight: "2000px",
        minHeight: "640px",
        // minWidth: "1280px",
        // overflowX: "hidden",
        overflow: "hidden",
      }}
    >
      <div className="container text-medium">
        <motion.h1
          className="font-medium lg:text-6xl md:text-4xl sm:text-2xl text-2xl md:mb-6 text-white"
          initial="hidden"
          animate={controls}
          variants={fadeUpVariant}
        >
          The story of
        </motion.h1>
        <motion.h1
          className="font-bold lg:text-9xl md:text-7xl sm:text-4xl text-3xl mb-10 inline-block"
          style={{
            background:
              "linear-gradient(90deg, #ABDEE5, rgba(223, 64, 122, 0.65))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial="hidden"
          animate={controls}
          variants={fadeUpVariant}
        >
          META MIU
        </motion.h1>
        <div ref={ref} />
      </div>
      <Characters />
      <div className="container md:grid md:grid-cols-12 relative md:bottom-52 bottom-40">
        <div className="col-span-5" />
        {/* </div> */}
        <motion.p
          className="text-left col-span-7 md:text-lg text-sm font-regular"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 40,
          }}
          transition={{
            delay: 1.4,
            duration: 1.0,
            ease: "easeOut",
          }}
        >
          On the morning of her high school graduation day, Miu wakes up to
          discover that she has grown a pair of cat ears and a tail.
          <br />
          <br />
          She had no choice but to miss her graduation. And from then on, she
          could only leave her house at night to hide her newly grown ears and
          tail.
          <br />
          <br />
          Then one day, she encounters a wise sorcerer named Felix, who knows
          how to revert her situation. But at the cost of having to complete a
          set of missions.
          <br />
          <br />
          With a strong desire to return to her normal life, Miu visits Felix to
          express her commitment to take on the challenges he arranges.
          <br />
          <br />
          Miu asks, “Felix, tell me what my first mission is!”
        </motion.p>
      </div>
    </section>
  );
}
