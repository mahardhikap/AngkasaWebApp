'use client';
import React, { useState } from 'react';
import './navbar.css';
import Link from 'next/link';
import Modal from '../modal/page';

export default function LoginNavbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mx-auto">
        <div className="w-full container flex flex-wrap items-center justify-between gap-5 xl:gap-0 mx-auto py-4">
          <Link href="/" className="flex items-center">
            <img src="/Group_28.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            } w-full lg:flex lg:w-auto`}
            id="navbar-default"
          >
            <div className="flex flex-col lg:flex-row items-center gap-10 mt-5 md:mt-0">
              {/* Use responsive classes to control width */}
              <div className="p-3 color-search-navbar rounded-lg relative w-full sm:w-96 sm:w-auto">
                <img src="/search.svg" className="absolute left-0 ps-3" />
                <input
                  placeholder="Where you want to go?"
                  className="ps-10 bg-transparent outline-none w-full"
                />
              </div>
              <div>
                <Modal buttonLabel={'Find Ticket'} />
                {/* <Link href="/ticket">
                  <div className="font-bold hover:text-blue-900 cursor-pointer">
                    Find Ticket
                  </div>
                </Link> */}
              </div>
              <div>
                <Link href="/booking">
                  <div className="font-bold hover:text-blue-900 cursor-pointer">
                    My Booking
                  </div>
                </Link>
              </div>
              <div>
                <div className="cursor-pointer">
                  <img src="/message_icon.svg" />
                </div>
              </div>
              <div>
                <div className="cursor-pointer">
                  <img src="/notif_icon.svg" />
                </div>
              </div>
              <div>
                <Link href='/profile'>
                  <div className="border-2 border-custom rounded-full">
                    <img src="/photo_profile.png" className="p-2 max-h-14" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
