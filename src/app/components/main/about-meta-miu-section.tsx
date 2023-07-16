import Image from "next/image";

export default function AboutMetaMiuSection() {
  return (
    <section
      className="text-white md:px-auto relative"
      style={{
        minHeight: "640px",
        background: `linear-gradient(180deg, rgba(226, 171, 177, 0.20) 0%, rgba(79, 75, 80, 0.20) 75%, rgba(0, 0, 0, 0.20) 94.27%)`,
      }}
    >
      <div className="bg-black h-32" />
      <div className="container grid grid-cols-12 relative bottom-32">
        <div className="col-span-6">
          <Image
            src="/assets/images/about-meta-miu.png"
            width={609}
            height={910}
            alt="about meta miu"
          />
        </div>
        <div className="col-span-6 flex flex-col justify-center">
          <h1 className="text-6xl mb-10 font-bold">About META MIU</h1>
          <h2 className="text-4xl font-bold mb-10">
            The 1st project of the Fellaz Universe.
          </h2>
          <p className="text-2xl">
            Fellaz Pass holders can join the journey of Miu’s idol debut with
            Felix(BAYC#8169) who is the chief producer of the Fellaz universe.
            <br />
            <br />
            Holders are not just a supporter but also a sub-producer for her to
            become a successful idol.
          </p>
        </div>
      </div>
    </section>
  );
}
