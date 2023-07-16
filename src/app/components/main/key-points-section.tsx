import Image from "next/image";

export default function KeyPointsSection() {
  return (
    <section
      className="text-white md:px-auto relative"
      style={{
        minHeight: "640px",
        background: `linear-gradient(180deg, rgba(171, 222, 229, 0.20) 0%, rgba(79, 75, 80, 0.20) 75%, rgba(0, 0, 0, 0.20) 94.27%)`,
      }}
    >
      {/* Mobile */}
      <div className="bg-black h-32" />
      <div className="container relative bottom-16 md:hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold sm:text-5xl sm:text-center">Key Points</h1>
          </div>
          <div className="col-span-6 mb-10">
            <Image
              src="/assets/images/about-meta-miu.png"
              width={609}
              height={910}
              alt="about meta miu"
            />
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-center">
          <ol className="text-sm sm:text-xl ml-6">
            <li
              className="mb-5"
              style={{
                listStyleType: "disc",
              }}
            >
              Meta Miu project will be driven with the Fellaz community.
            </li>
            <li
              className="mb-5"
              style={{
                listStyleType: "disc",
              }}
            >
              Fellaz Pass holders are the core members of the project, and their
              opinions will be reflected based on DAO.
            </li>
            <li
              className="mb-5"
              style={{
                listStyleType: "disc",
              }}
            >
              Holders can participate in the process of releasing an album or
              song, choosing an outfit of the debut stage, and more activities
              to Miu into an idol.
            </li>
          </ol>
        </div>
      </div>
      {/* Desktop */}
      <div className="md:grid hidden container grid grid-cols-12 relative bottom-32">
        <div className="col-span-6 flex flex-col justify-center">
          <h1 className="text-6xl mb-10 font-bold">Key Points</h1>
          <ol className="text-2xl ml-6">
            <li
              className="mb-5"
              style={{
                listStyleType: "disc",
              }}
            >
              Meta Miu project will be driven with the Fellaz community.
            </li>
            <li
              className="mb-5"
              style={{
                listStyleType: "disc",
              }}
            >
              Fellaz Pass holders are the core members of the project, and their
              opinions will be reflected based on DAO.
            </li>
            <li
              className="mb-5"
              style={{
                listStyleType: "disc",
              }}
            >
              Holders can participate in the process of releasing an album or
              song, choosing an outfit of the debut stage, and more activities
              to Miu into an idol.
            </li>
          </ol>
        </div>
        <div className="col-span-6">
          <Image
            src="/assets/images/key-points.png"
            width={609}
            height={910}
            alt="about meta miu"
          />
        </div>
      </div>
    </section>
  );
}
