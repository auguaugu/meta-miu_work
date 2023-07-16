"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TwitterIcon from "../icons/twitter-icon";
import InstagramIcon from "../icons/instagram-icon";
import FellazIcon from "../icons/fellaz-icon";
import Image from "next/image";

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
  >
    {label}
  </Link>
);

const LinkItem = ({
  className,
  content,
  style,
}: {
  className?: string;
  content: string;
  style: React.StyleHTMLAttributes<HTMLAnchorElement>;
}) => {
  return (
    <li className={className} style={style}>
      <a href={`#${content}`}>
        {content.charAt(0).toUpperCase() + content.slice(1)}
      </a>
    </li>
  );
};

const Drawer = ({
  isOpen,
  closeDrawer,
  selected = "universe",
}: {
  isOpen: boolean;
  closeDrawer: () => void;
  selected?: "universe" | "story" | "features";
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden flex justify-end ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <div
        onClick={closeDrawer}
        className="fixed inset-0 transition-opacity ease-in-out duration-500"
      />
      <div
        style={{
          backgroundColor: "#0F0F0F",
        }}
        className={`relative ml-10 w-full transition-transform ease-in-out duration-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeDrawer}
          className="absolute top-0 right-0 mt-6 mr-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="h-6 w-6 text-gray-600 hover:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex text-white flex-col h-full">
          <div className="flex-1 p-6 flex items-center">
            <ul className="font-semibold">
              <li
                className="mb-8"
                style={{
                  color: selected === "universe" ? "#CB00CE" : "#FFFFFF",
                }}
              >
                <a
                  href="#universe"
                  onClick={() => {
                    closeDrawer();
                  }}
                >
                  Universe
                </a>
              </li>
              <li
                className="mb-8"
                style={{
                  color: selected === "story" ? "#CB00CE" : "#FFFFFF",
                }}
              >
                <a
                  onClick={() => {
                    closeDrawer();
                  }}
                  href="#story"
                >
                  Story
                </a>
              </li>
              <li
                className=""
                style={{
                  color: selected === "features" ? "#CB00CE" : "#FFFFFF",
                }}
              >
                <a
                  onClick={() => {
                    closeDrawer();
                  }}
                  href="#features"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="py-10 px-6 border-gray-700 border-t border-solid">
            <h1 className="font-extrabold text-2xl mb-6">META MIU</h1>
            <h6 className="text-stone-400 mb-6 text-xs">
              © Innocus Pte. Ltd. All rights reserved.
            </h6>
            <div className="flex flex-row gap-6">
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
        </div>
      </div>
    </div>
  );
};

const Navbar = ({
  selected,
}: {
  selected?: "universe" | "story" | "features";
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className="bg-black z-50 sticky top-0 w-full"
      style={{
        borderBottom: "1px solid #1f1f1f",
      }}
    >
      <nav className="md:px-14 px-6">
        <div className="flex flex-wrap items-center justify-between md:h-24 h-16">
          <a href="#" className="flex items-center">
            <span className="text-white self-center text-sm md:text-4xl font-extrabold whitespace-nowrap">
              META MIU
            </span>
          </a>
          <button
            onClick={() => {
              setDrawerOpen(!isDrawerOpen);
            }}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium text-lg mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#universe"
                  className="block font-medium py-2 text-white rounded md:bg-transparent"
                  aria-current="page"
                >
                  Universe
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="block font-medium py-2 text-white rounded md:bg-transparent"
                  aria-current="page"
                >
                  Story
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block font-medium py-2 text-white rounded md:bg-transparent"
                  aria-current="page"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-row gap-2">
            <Link
              className="p-4"
              href="https://twitter.com/Meta_Miu_?s=20"
              target="_blank"
            >
              <TwitterIcon />
            </Link>
            <Link
              className="p-4"
              href="https://www.instagram.com/meta_miu/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link className="p-4" href="https://fellaz.io/" target="_blank">
              <FellazIcon />
            </Link>
          </div>
        </div>
      </nav>
      <Drawer
        isOpen={isDrawerOpen}
        closeDrawer={() => {
          setDrawerOpen(false);
        }}
        selected={selected}
      />
    </div>
  );
};

export default Navbar;
