"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
  >
    {label}
  </Link>
);

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  // const { asPath } = useRouter();

  return (
    <div
      className="bg-black fixed top-0 w-full"
      style={{
        borderBottom: "1px solid #1f1f1f",
      }}
    >
      <nav className="md:px-14 px-6">
        <div className="flex flex-wrap items-center justify-between h-24">
          <a href="#" className="flex items-center">
            <span className="text-white self-center text-4xl font-extrabold whitespace-nowrap">
              META MIU
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
                  href="#"
                  className="block font-medium py-2 text-white rounded md:bg-transparent"
                  aria-current="page"
                >
                  Universe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block font-medium py-2 text-white rounded md:bg-transparent"
                  aria-current="page"
                >
                  Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block font-medium py-2 text-white rounded md:bg-transparent"
                  aria-current="page"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.06 38.6729C15.4612 36.3218 15.9583 33.1108 17.9736 31.0956L21.9101 27.1591C22.6087 26.4605 22.6087 25.3051 21.9101 24.6065C21.2114 23.9078 20.056 23.9078 19.3574 24.6065L15.5553 28.4086C12.0487 31.9151 11.4845 37.6116 14.6417 41.4406C18.2557 45.8338 24.7717 46.0622 28.6947 42.1392L32.7924 38.0415C33.491 37.3429 33.491 36.1875 32.7924 35.4888C32.0938 34.7902 30.9384 34.7902 30.2398 35.4888L26.1421 39.5865C23.576 42.1526 19.2096 41.8436 17.06 38.6729ZM26.0077 34.0782L34.0688 26.0171C34.8077 25.2782 34.8077 24.0691 34.0688 23.3301C33.3298 22.5912 32.1207 22.5912 31.3817 23.3301L23.3207 31.3912C22.5818 32.1301 22.5818 33.3392 23.3207 34.0782C24.0597 34.8171 25.2688 34.8171 26.0077 34.0782ZM28.3992 15.5647L24.5971 19.3668C23.8984 20.0654 23.8984 21.2208 24.5971 21.9195C25.2957 22.6181 26.4511 22.6181 27.1497 21.9195L31.0862 17.983C33.1014 15.9677 36.3124 15.4706 38.6635 17.0694C41.8342 19.219 42.1432 23.5854 39.5771 26.1515L35.4794 30.2492C34.7808 30.9478 34.7808 32.1032 35.4794 32.8018C36.178 33.5005 37.3335 33.5005 38.0321 32.8018L42.1298 28.7042C46.0528 24.7811 45.8244 18.2651 41.4446 14.6377C37.6156 11.4804 31.9057 12.0582 28.3992 15.5647Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
