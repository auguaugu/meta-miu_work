"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "@/app/hooks/use-intersection-observer";
import Link from "next/link";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } },
};

export default function Universe2Section() {
  const controls = useAnimation();
  const controls2 = useAnimation();
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

  return (
    <section
      className="text-white md:px-auto flex md:justify-center md:items-center relative pd:mb-auto pb-16"
      style={
        {
          // maxHeight: "1080px",
        }
      }
    >
      {/* Mobile View */}
      <div className="md:hidden block">
        <div
          className="container"
          style={{
            paddingTop: 228,
          }}
        >
          <motion.h1
            className="font-bold text-2xl mb-6 text-white"
            initial="hidden"
            animate={controls}
            variants={fadeUpVariant}
          >
            Fellaz Universe
          </motion.h1>
          <motion.h2
            className="font-bold text-lg mb-6"
            initial="hidden"
            animate={controls2}
            variants={fadeUpVariant}
          >
            The universe that is built with IPs processed by Fellaz.
          </motion.h2>
          <motion.p
            className="text-sm mb-10"
            style={{
              maxWidth: "720px",
            }}
            initial="hidden"
            animate={controls2}
            variants={fadeUpVariant}
          >
            Fellaz aims members to expand their entertainment experience beyond
            the real world and into the metaverse. Fellaz universe and the IPs
            within it work as a link that connects the real world with the
            metaverse. <br />
            <br />
            The first project to introduce of the Fellaz universe is ‘Meta Miu’,
            a community-centered metaverse idol project.
          </motion.p>
          <Link href="https://fellaz.io" target="_blank">
            {/* GPT. 이 버튼은 fade 애니메이션을 줄 수 있을까? fadeUpVariant.fade에 내가 만들어놨어.*/}
            <motion.button
              type="button"
              className="relative z-10 text-gray-900 flex items-center gap-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-1 mb-2"
              style={{
                fontSize: "7px",
              }}
              initial="hidden"
              animate={controls2}
              variants={fadeUpVariant}
            >
              Go to Fellaz Home
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.69418 6.69278C8.44365 6.69278 8.23165 6.89518 8.23165 7.14569V8.24425H2.7389V2.75146H3.83745C4.08798 2.75146 4.29998 2.54905 4.29998 2.28892C4.29991 2.02865 4.09758 1.83594 3.847 1.83594H2.29554C2.04501 1.83594 1.83301 2.03834 1.83301 2.29847V8.70674C1.83301 8.95727 2.03541 9.16927 2.29554 9.16927H8.70374C8.95427 9.16927 9.16627 8.96687 9.16627 8.70674L9.16634 7.14571C9.15673 6.89513 8.95434 6.6928 8.69419 6.6928L8.69418 6.69278Z"
                  fill="#414141"
                />
                <path
                  d="M8.6947 1.83595H6.69997C6.44944 1.83595 6.23744 2.03836 6.23744 2.29849C6.23744 2.55869 6.43984 2.76102 6.69997 2.76102H7.53832L5.08104 5.26651C4.90762 5.44962 4.90762 5.73872 5.09065 5.91215C5.17736 5.99887 5.29305 6.04706 5.40865 6.04706C5.52425 6.04706 5.64956 5.99887 5.73627 5.91215L8.24173 3.35849V4.29322C8.24173 4.54376 8.44413 4.75576 8.70426 4.75576C8.96446 4.75576 9.16679 4.55336 9.16679 4.29322L9.16686 2.29847C9.15725 2.03834 8.95486 1.83594 8.69471 1.83594L8.6947 1.83595Z"
                  fill="#414141"
                />
              </svg>
            </motion.button>
          </Link>
        </div>
        <div className="relative">
          <Image
            src="/assets/images/story-hero.png"
            width={1920}
            height={210}
            alt="Story main"
            className="mx-auto"
          />
          <div
            className="absolute top-0 left-0 bottom-0 w-full h-full flex justify-center items-center"
            style={{
              width: "100%",
              // height: "210px",
              background:
                "radial-gradient(farthest-side,rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0))",
              // background:
              //   "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.75) 42.19%, rgba(0, 0, 0, 0.75) 61.98%, #000 92.71%)",
            }}
          />
        </div>
      </div>
      <div ref={ref} />
      {/* Desktop View */}
      <div className="md:block hidden">
        <Image
          src="/assets/images/story-hero.png"
          width={1920}
          height={654}
          alt="Story main"
          className="mx-auto"
        />
        <div
          className="absolute top-0 left-0 bottom-0 w-full h-full flex justify-center items-center"
          style={{
            width: "100%",
            height: "840px",
            background:
              "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.75) 42.19%, rgba(0, 0, 0, 0.75) 61.98%, #000 92.71%)",
          }}
        />
        <div className="absolute top-0 left-0 bottom-0 w-full h-full flex flex-col justify-center items-center">
          <motion.h1
            className="font-bold lg:text-9xl md:text-7xl sm:text-4xl text-3xl mb-10 text-center"
            // className="font-bold lg:text-9xl md:text-7xl sm:text-4xl text-3xl mb-10 inline-block"
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
            Fellaz Universe
          </motion.h1>
          <motion.h2
            className="text-2xl mb-6 font-bold"
            initial="hidden"
            animate={controls2}
            variants={fadeUpVariant}
          >
            The universe that is built with IPs processed by Fellaz.
          </motion.h2>
          <motion.p
            className="text-center text-lg mb-16"
            style={{
              maxWidth: "720px",
            }}
            initial="hidden"
            animate={controls2}
            variants={fadeUpVariant}
          >
            Fellaz aims members to expand their entertainment experience beyond
            the real world and into the metaverse. Fellaz universe and the IPs
            within it work as a link that connects the real world with the
            metaverse. <br />
            <br />
            The first project to introduce of the Fellaz universe is ‘Meta Miu’,
            a community-centered metaverse idol project.
          </motion.p>
          <Link href="https://fellaz.io" target="_blank">
            <motion.button
              type="button"
              className="relative font-bold text-lg z-10 text-gray-900 flex items-center gap-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm px-6 py-1 mb-2"
              initial="hidden"
              animate={controls2}
              variants={fadeUpVariant}
            >
              Go to Fellaz Home
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2809 13.2938C16.783 13.2938 16.3616 13.6961 16.3616 14.194V16.3775H5.44454V5.46026H7.62796C8.1259 5.46026 8.54726 5.05798 8.54726 4.54095C8.54713 4.02365 8.14498 3.64062 7.64694 3.64062H4.56334C4.0654 3.64062 3.64404 4.04291 3.64404 4.55993V17.2967C3.64404 17.7946 4.04632 18.216 4.56334 18.216H17.3C17.7979 18.216 18.2193 17.8137 18.2193 17.2967L18.2194 14.194C18.2003 13.696 17.798 13.2939 17.281 13.2939L17.2809 13.2938Z"
                  fill="#414141"
                />
                <path
                  d="M17.2823 3.64066H13.3176C12.8197 3.64066 12.3983 4.04294 12.3983 4.55997C12.3983 5.07713 12.8006 5.47928 13.3176 5.47928H14.9839L10.0999 10.459C9.75524 10.823 9.75524 11.3976 10.119 11.7423C10.2914 11.9146 10.5213 12.0104 10.7511 12.0104C10.9808 12.0104 11.2299 11.9146 11.4022 11.7423L16.382 6.66676V8.5246C16.382 9.02254 16.7842 9.44391 17.3013 9.44391C17.8184 9.44391 18.2206 9.04163 18.2206 8.5246L18.2207 4.55993C18.2016 4.04291 17.7993 3.64062 17.2823 3.64062L17.2823 3.64066Z"
                  fill="#414141"
                />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        section {
          height: 840px;
          max-height: 1080px;
        }

        @media (max-width: 768px) {
          section {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
