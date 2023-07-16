import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../icons/instagram-icon";

export default function Footer() {
  return (
    <div
      style={{
        borderTop: "1px solid #666666",
        backgroundClip: "#0F0F0F",
      }}
      className="md:px-14 px-6 flex md:h-32 md:items-center justify-between md:flex-row flex-col md:py-0 py-10 md:gap-0 lg:gap-6 gap-10"
    >
      <div className="flex md:flex-row flex-col md:gap-10 gap-4 md:items-center">
        <h1 className="text-white font-extrabold text-2xl lg:text-4xl md:text-3xl">
          META MIU
        </h1>
        <h6
          className="text-sm md:text-base"
          style={{
            color: "#CACACA",
          }}
        >
          © Innocus Pte. Ltd. All rights reserved.
        </h6>
        <h6 className="text-white">
          <Link href="mailto:social@fellaz.io">Contact</Link>
        </h6>
      </div>
      <div className="flex md:flex-row gap-8">
        <Link
          className=""
          href="https://twitter.com/Meta_Miu_?s=20"
          target="_blank"
        >
          <Image
            src="/assets/images/twitter-icon-big.png"
            width={32}
            height={32}
            alt="Twitter link"
          />
        </Link>
        <Link
          className=""
          href="https://www.instagram.com/meta_miu/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
}
