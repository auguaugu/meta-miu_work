import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React from "react";

export default function UniverseSection() {
  // const input = [0, 0.5, 1];
  // const color1 = "#ABDEE5";
  // const color2 = "rgba(223, 64, 122)";
  // const color3 = "#ABDEE5";

  // // We will animate this value from 0 to 1
  // const transitionValue = useMotionValue(0);

  // const background = useTransform(transitionValue, input, [
  //   `linear-gradient(45deg, ${color1}, ${color2})`,
  //   `linear-gradient(45deg, ${color2}, ${color3})`,
  //   `linear-gradient(45deg, ${color2}, ${color1})`,
  // ]);

  // React.useEffect(() => {
  //   const controls = transitionValue.start({
  //     to: 1,
  //     transition: { duration: 10, ease: "easeInOut", repeat: Infinity },
  //   });

  //   return controls.stop;
  // }, [transitionValue]);

  // console.log('$$ background', background);
  return (
    <section
      className="text-white md:px-auto flex justify-center md:items-center relative"
      style={{
        height: "100vh",
        maxHeight: "1080px",
        minHeight: "640px",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.20) 9.38%, rgba(255, 54, 187, 0.20) 57.29%, rgba(0, 0, 0, 0.20) 77.60%)",
        }}
      />
      {/* Desktop */}
      <motion.div
        className="relative z-10 md:flex hidden justify-center items-center px-1 py-1"
        initial={{
          background: "linear-gradient(45deg, #16DEE5, #E51FE5)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src="/assets/images/universe-main.png"
          width={1280}
          height={720}
          alt="Universe main"
          className="mx-auto"
        />
      </motion.div>
      {/* Mobile */}
      <div className="relative z-10 block md:hidden">
        <motion.div
          className="justify-center items-center px-1 py-1"
          initial={{
            background: "linear-gradient(45deg, #16DEE5, #E51FE5)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src="/assets/images/universe-main-mobile.png"
            width={360}
            height={640}
            alt="Universe main"
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
