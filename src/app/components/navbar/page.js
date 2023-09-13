'use client';
import Image from 'next/image';
import './navbar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="container w-10/12 mx-auto my-10 flex flex-row justify-between items-center">
      <Image
        className="w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12 my-screen"
        src="/Group_28.svg"
        width={200}
        height={30}
      />
      <div className="flex flex-row w-50 color-search-navbar rounded-2xl py-4 px-4">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-gray-400 me-5"
          width={30}
        />
        <input
          className="bg-transparent outline-none"
          placeholder="Where you want to go?"
        />
      </div>
      <ul className="flex flex-row items-center gap-x-10">
        <li>Find Ticket</li>
        <li>My Booking</li>
      </ul>
      <button className="py-4 px-10 color-button-navbar rounded-2xl text-white font-extrabold">
        Sign Up
      </button>
    </div>
  );
}
