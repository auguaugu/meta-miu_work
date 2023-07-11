import Image from "next/image";
import Navbar from "./components/navigation-bar";
import Head from "next/head";

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
      <section className="container pt-24 text-white px-6 md:px-auto">
        <h1>Hello</h1>
      </section>
    </main>
  );
}
