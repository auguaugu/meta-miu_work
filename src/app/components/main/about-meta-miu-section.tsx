import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

function MotionDiv({
  children,
  isInView,
  delay,
  className,
  initPos = "translateX(-40px)",
  lastPos = "translateX(0)",
}: {
  children: React.ReactNode;
  isInView: boolean;
  delay?: number;
  className?: string;
  initPos?: string;
  lastPos?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        transform: isInView ? lastPos : initPos,
        opacity: isInView ? 1 : 0,
        transition: { duration: 0.4, ease: "easeIn", delay: delay || 0 },
      }}
      initial={{
        transform: initPos,
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutMetaMiuSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="text-white md:px-auto relative"
      style={{
        minHeight: "640px",
        background: `linear-gradient(180deg, rgba(226, 171, 177, 0.20) 0%, rgba(79, 75, 80, 0.20) 75%, rgba(0, 0, 0, 0.20) 94.27%)`,
      }}
    >
      <div className="bg-black h-32" />
      {/* Mobile */}
      <div className="container relative bottom-16 block md:hidden">
        <MotionDiv isInView={isInView} className="grid grid-cols-12">
          <div className="col-span-6 mb-10">
            <Image
              src="/assets/images/about-meta-miu.png"
              width={609}
              height={910}
              alt="about meta miu"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center sm:text-5xl text-3xl sm:text-center">
            <h1 className="font-bold">About</h1>
            <h1 className="font-bold">META MIU</h1>
          </div>
        </MotionDiv>
        <MotionDiv
          isInView={isInView}
          initPos="translateY(40px)"
          lastPos="translateY(0)"
          delay={0.2}
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-8">
            The Prototype for Fellaz Universe
          </h2>
          <p className="text-sm sm:text-lg">
            Fellaz Pass holders can join Miu’s journey of debuting as a virtual
            idol along with Felix(BAYC#8169), who will lead her as the Chief
            Producer of Fellaz Universe. The pass holders will participate as
            co-producers in producing Miu into her stardom.
          </p>
        </MotionDiv>
      </div>
      {/* Desktop */}
      <div className="hidden md:grid container grid grid-cols-12 relative bottom-32">
        <MotionDiv isInView={isInView} className="col-span-6">
          <Image
            src="/assets/images/about-meta-miu.png"
            width={609}
            height={910}
            alt="about meta miu"
          />
        </MotionDiv>
        <MotionDiv
          isInView={isInView}
          className="col-span-6 flex flex-col justify-center"
          initPos="translateY(40px)"
          lastPos="translateY(0)"
          delay={0.2}
        >
          <h1 className="text-6xl mb-10 font-bold">About META MIU</h1>
          <h2 className="text-4xl font-bold mb-10">
            The Fellaz community will drive the Meta Miu project.
          </h2>
          <p className="text-lg">
            Fellaz Pass holders are the project's initial core members, and
            their opinions will be reflected.
            <br />
            <br />
            Holders will have the opportunity to participate in more and more
            decision-making for Miu, such as choosing her debut outfit and other
            activities that will lead Miu into her stardom.
          </p>
        </MotionDiv>
      </div>
      <div ref={ref} />
    </section>
  );
}
