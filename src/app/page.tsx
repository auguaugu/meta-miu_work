"use client";
import Image from "next/image";
import Navbar from "./components/navigation-bar";
import Head from "next/head";
import UniverseSection from "./components/main/universe-section";
import Universe2Section from "./components/main/univers-2-section";
import StorySection from "./components/main/story-section";
import AboutMetaMiuSection from "./components/main/about-meta-miu-section";
import KeyPointsSection from "./components/main/key-points-section";
import FeaturesSection from "./components/main/features-section";
import React, { useEffect, useRef } from "react";
import Footer from "./components/footer";

export default function Home() {
  const [scrollLoc, setScrollLoc] = React.useState<
    "universe" | "story" | "features"
  >("universe");
  const universeRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const universePosition = universeRef.current?.offsetTop || 0;
      const storyPosition = storyRef.current?.offsetTop || 0;
      const featuresPosition = featuresRef.current?.offsetTop || 0;

      if (scrollPosition >= featuresPosition - 10) {
        setScrollLoc("features");
      } else if (scrollPosition >= storyPosition - 10) {
        setScrollLoc("story");
      } else if (scrollPosition >= universePosition - 10) {
        setScrollLoc("universe");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Navbar selected={scrollLoc} />
      <div id="universe" ref={universeRef} className="pt-10">
        <UniverseSection />
        <Universe2Section />
      </div>
      <div id="story" ref={storyRef} className="pt-10">
        <StorySection />
        <AboutMetaMiuSection />
        <KeyPointsSection />
      </div>
      <div id="features" ref={featuresRef} className="pt-20">
        <FeaturesSection />
      </div>
      <Footer />
    </main>
  );
}
