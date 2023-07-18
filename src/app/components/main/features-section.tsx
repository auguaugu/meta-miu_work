import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section
      className="text-white md:px-auto relative"
      style={{
        minHeight: "640px",
      }}
    >
      <div className="text-center">
        <h1
          className="font-bold lg:text-9xl md:text-7xl sm:text-4xl text-3xl mb-20 inline-block"
          // className="font-bold lg:text-9xl md:text-7xl sm:text-4xl text-3xl mb-10 inline-block"
          style={{
            background:
              "linear-gradient(90deg, #ABDEE5, rgba(223, 64, 122, 0.65))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Features
        </h1>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 pb-48">
          <div
            style={{
              borderRadius: "34px",
              backgroundColor: "#D9D9D9",
            }}
            className="col-span-1 text-black py-20 px-10 md:pt-20 pt-10"
          >
            <Image
              src="/assets/images/collect-icon.png"
              width={64}
              height={64}
              alt="collect"
              className="mx-auto"
            />

            <h2 className="my-8 font-bold text-2xl">Collect</h2>
            <ul className="text-left md:text-lg text-md">
              <li
                className="md:mb-0 mb-4"
                style={{
                  listStyleType: "disc",
                }}
              >
                The quality of the artwork for Meta Miu-related NFTs will be
                captivating and worth holding.
              </li>
              <li
                className="md:mb-0 mb-4"
                style={{
                  listStyleType: "disc",
                }}
              >
                NFTs can be earned through various on/off-line events for free.
              </li>
              <li
                className="md:mb-0 mb-4"
                style={{
                  listStyleType: "disc",
                }}
              >
                Exclusive rewards will be given to the holders.
              </li>
            </ul>
          </div>
          <div
            style={{
              borderRadius: "34px",
              backgroundColor: "#D9D9D9",
            }}
            className="col-span-1 text-black py-20 px-10 md:pt-20 pt-10"
          >
            <Image
              src="/assets/images/synthesis-icon.png"
              width={64}
              height={64}
              alt="synthesis"
              className="mx-auto"
            />

            <h2 className="my-8 font-bold text-2xl">Synthesis</h2>
            <ul className="text-left md:text-lg text-md">
              <li
                className="md:mb-0 mb-4"
                style={{
                  listStyleType: "disc",
                }}
              >
                Holders can combine NFTs to receive the next episode of NFTs
                collectibles.
              </li>
              <li
                className="md:mb-0 mb-4"
                style={{
                  listStyleType: "disc",
                }}
              >
                Depending on the type of NFT held, rewards will be provided.
              </li>
            </ul>
          </div>
          <div
            style={{
              borderRadius: "34px",
              backgroundColor: "#D9D9D9",
            }}
            className="col-span-1 text-black py-20 px-10 md:pt-20 pt-10"
          >
            <Image
              src="/assets/images/participant-icon.png"
              width={64}
              height={64}
              alt="synthesis"
              className="mx-auto"
            />

            <h2 className="my-8 font-bold text-2xl">Participate</h2>
            <ul className="text-left md:text-lg text-md">
              <li
                className="md:mb-0 mb-4"
                style={{
                  listStyleType: "disc",
                }}
              >
                Participate in the community to become a co-producer for Miu.
              </li>
              <li
                className="md:mb-0 mb-4"
                style={{
                  listStyleType: "disc",
                }}
              >
                Holders to give opinions and make decisions for the project via
                the voting system.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
