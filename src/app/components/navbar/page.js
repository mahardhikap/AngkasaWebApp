'use client';
import React, { useState } from 'react';
import './navbar.css';
import Link from 'next/link';

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mx-auto">
        <div className="w-full container flex flex-wrap items-center justify-between mx-auto py-4">
          <a href="#" className="flex items-center">
            <img src="/Group_28.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menuVisible}
            onClick={toggleMenu}
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
            className={`${
              menuVisible ? 'block' : 'hidden'
            } w-full md:flex md:w-auto`}
            id="navbar-default"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 mt-5 md:mt-0">
              {/* Use responsive classes to control width */}
              <div className="p-3 color-search-navbar rounded-lg relative w-full md:w-96 md:w-auto">
                <img src="/search.svg" className="absolute left-0 ps-3" />
                <input
                  placeholder="Where you want to go?"
                  className="ps-10 bg-transparent outline-none w-full"
                />
              </div>
              <div>
                <Link href="/pages/ticket">
                  <div className="font-medium hover:text-blue-900 cursor-pointer hover:font-bold">
                    Find Ticket
                  </div>
                </Link>
              </div>
              <div>
                <Link href="/pages/booking">
                  <div className="font-medium hover:text-blue-900 cursor-pointer hover:font-bold">
                    My Booking
                  </div>
                </Link>
              </div>
              <div>
                <Link href='/auth/login'>
                  <button className="py-3 px-5 rounded-lg text-white font-bold color-button-navbar sm:px-10 hover:bg-blue-900">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
