'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import './homepage/index.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function MainMenu() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('access_token'));
    }
  }, []);

  const NavbarHandle = () => {
    if (!token) {
      return <Navbar />;
    } else {
      return <LoginNavbar />;
    }
  };

  return (
    <>
      <div className="z-10 w-11/12 container mx-auto">{NavbarHandle()}</div>
      <div className="mb-56 relative container w-10/12 mx-auto">
        <div className="mt-20 mb-10 z-10">
          <h1 className="font-semibold text-5xl z-10">
            Find Your{' '}
            <span className="text-special-color z-10 w-1/3">Flight</span>
          </h1>
          <p>and explore the world with us</p>
        </div>
        <div className="bg-slate-200 z-[-10]">
          <Image
            src="/image_4.png"
            width={500}
            height={500}
            className="w-2/4 left-[-120px] absolute z-[-10]"
            alt="left"
          />
          <Image
            src="/Group_55.png"
            width={500}
            height={500}
            className="w-1/4 absolute right-[-120px] hidden sm:block top-[130px] sm:top-[150px] md:top-[150px] z-0"
            alt="blue"
          />
          <Image
            src="/vector_6.png"
            width={500}
            height={500}
            className="w-1/4 absolute right-0 md:bottom-[-300px] lg:bottom-[-400px] xl:bottom-[-550px] 2xl:w-1/6 z-[-10]"
            alt="right"
          />
        </div>
      </div>
      <div className="mt-40 sm:mt-[300px] md:mt-[400px] lg:mt=[470px] xl:mt-[550px] container mx-auto w-10/12">
        <p className="text-special-color">T R E N D I N G</p>
        <div className="flex justify-between">
          <h2 className="font-extrabold text-xl">Trending destinations</h2>
          <p className="font-medium text-special-color">View all</p>
        </div>
        <div className="mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 mx-auto">
            <div className="relative">
              <div className="w-3/5 absolute text-center z-10">
                <div className="p-2">
                  <p className="text-white p-2 bg-white/50 rounded-2xl">
                    15 Airlines
                  </p>
                </div>
              </div>
              <img
                className="w-full rounded-2xl"
                src="/japan.png"
                alt="Japan"
                style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
              <div className="grid grid-cols-2 absolute bottom-0">
                <p className="p-5 text-white">
                  Tokyo, <span className="font-bold text-white">Japan</span>
                </p>
                <div className="mx-auto w-fit my-auto rounded-full bg-white/[0.4] p-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    width={7}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-3/5 absolute text-center z-10">
                <div className="p-2">
                  <p className="text-white p-2 bg-white/50 rounded-2xl">
                    22 Airlines
                  </p>
                </div>
              </div>
              <img
                className="w-full rounded-2xl"
                src="/spain.png"
                alt="Japan"
                style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
              <div className="grid grid-cols-2 absolute bottom-0">
                <p className="p-5 text-white">
                  Barcelona, <span className="font-bold text-white">Spain</span>
                </p>
                <div className="mx-auto w-fit my-auto rounded-full bg-white/[0.4] p-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    width={7}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-3/5 absolute text-center z-10">
                <div className="p-2">
                  <p className="text-white p-2 bg-white/50 rounded-2xl">
                    15 Airlines
                  </p>
                </div>
              </div>
              <img
                className="w-full rounded-2xl"
                src="/japan.png"
                alt="Japan"
                style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
              <div className="grid grid-cols-2 absolute bottom-0">
                <p className="p-5 text-white">
                  Tokyo, <span className="font-bold text-white">Japan</span>
                </p>
                <div className="mx-auto w-fit my-auto rounded-full bg-white/[0.4] p-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    width={7}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-3/5 absolute text-center z-10">
                <div className="p-2">
                  <p className="text-white p-2 bg-white/50 rounded-2xl">
                    22 Airlines
                  </p>
                </div>
              </div>
              <img
                className="w-full rounded-2xl"
                src="/spain.png"
                alt="Japan"
                style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
              <div className="grid grid-cols-2 absolute bottom-0">
                <p className="p-5 text-white">
                  Barcelona, <span className="font-bold text-white">Spain</span>
                </p>
                <div className="mx-auto w-fit my-auto rounded-full bg-white/[0.4] p-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    width={7}
                    className="text-white"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-3/5 absolute text-center z-10">
                <div className="p-2">
                  <p className="text-white p-2 bg-white/50 rounded-2xl">
                    15 Airlines
                  </p>
                </div>
              </div>
              <img
                className="w-full rounded-2xl"
                src="/japan.png"
                alt="Japan"
                style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-0"></div>
              <div className="grid grid-cols-2 absolute bottom-0">
                <p className="p-5 text-white">
                  Tokyo, <span className="font-bold text-white">Japan</span>
                </p>
                <div className="mx-auto w-fit my-auto rounded-full bg-white/[0.4] p-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    width={7}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-color mt-20 p-10 relative">
          <p className="text-center font-normal text-white">Top 10</p>
          <p className="text-center font-extrabold text-white">
            Top 10 destinations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-10 w-fit mx-auto">
            <div className="z-20">
              <div className="rounded-full border-white border-solid border-4 p-2">
                <img className="rounded-full" src="/paris.png" />
              </div>
              <p className="text-center mt-3 text-white font-medium">Paris</p>
            </div>
            <div className="z-20">
              <div className="rounded-full border-white border-solid border-4 p-2">
                <img className="rounded-full" src="/bali.png" />
              </div>
              <p className="text-center mt-3 text-white font-medium">Bali</p>
            </div>
            <div className="z-20">
              <div className="rounded-full border-white border-solid border-4 p-2">
                <img className="rounded-full" src="/singapore.png" />
              </div>
              <p className="text-center mt-3 text-white font-medium">
                Singapore
              </p>
            </div>
            <div className="z-20">
              <div className="rounded-full border-white border-solid border-4 p-2">
                <img className="rounded-full" src="/agra.png" />
              </div>
              <p className="text-center mt-3 text-white font-medium">Agra</p>
            </div>
            <div className="z-20">
              <div className="rounded-full border-white border-solid border-4 p-2">
                <img className="rounded-full" src="/sydney.png" />
              </div>
              <p className="text-center mt-3 text-white font-medium">Sydney</p>
            </div>
          </div>
          <div className="flex gap-10 mx-auto mt-10 w-fit">
            <div className="border-solid border-2 border-white rounded-lg px-6 py-2 z-20">
              <FontAwesomeIcon icon={faChevronLeft} width={20} />
            </div>
            <div className="bg-white rounded-lg px-6 py-2 z-20">
              <FontAwesomeIcon icon={faChevronRight} width={20} />
            </div>
          </div>
          <img
            src="/vector_3.png"
            className="absolute bottom-0 z-0 w-1/2 lg:w-1/4"
          />
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
}
