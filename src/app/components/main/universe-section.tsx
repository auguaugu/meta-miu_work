import Image from "next/image";

export default function UniverseSection() {
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
      <div className="relative z-10 md:block hidden">
        <Image
          src="/assets/images/universe-main.png"
          width={1280}
          height={720}
          alt="Universe main"
          className="mx-auto"
        />
      </div>
      <div className="relative z-10 block md:hidden">
        <Image
          src="/assets/images/universe-main-mobile.png"
          width={360}
          height={640}
          alt="Universe main"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
