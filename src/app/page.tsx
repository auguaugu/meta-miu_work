import Image from "next/image";
import Navbar from "./components/navigation-bar";
import Head from "next/head";
import UniverseSection from "./components/main/universe-section";

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
    </main>
  );
}
