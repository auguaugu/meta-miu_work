import Image from "next/image";
import Navbar from "./components/navigation-bar";
import Head from "next/head";
import UniverseSection from "./components/main/universe-section";
import Universe2Section from "./components/main/univers-2-section";
import StorySection from "./components/main/story-section";
import AboutMetaMiuSection from "./components/main/about-meta-miu-section";
import KeyPointsSection from "./components/main/key-points-section";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Navbar />
      <UniverseSection />
      <Universe2Section />
      <StorySection />
      <AboutMetaMiuSection />
      <KeyPointsSection />
    </main>
  );
}
