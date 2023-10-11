'use client';
import './booking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faAddressCard,
  faStar,
  faGear,
  faRightFromBracket,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PrivateRoute } from '../../context/page';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export default function Booking() {
  const [token, setToken] = useState(null);
  const router = useRouter();
  const [data, setData] = useState(null);

  const getBookingDetail = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setData(response.data.data);
      console.log('Data booking:', response.data.data);
      toast.success('Get detail booking success!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Get detail booking failed');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('access_token'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token) {
      getBookingDetail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const NavbarHandle = () => {
    if (!token) {
      return <Navbar />;
    } else {
      return <LoginNavbar />;
    }
  };

  const LogoutHandle = () => {
    if (token) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
      return localStorage.clear();
    }
  };

  return (
    <>
      <PrivateRoute>
        <div className="container w-11/12 mx-auto">{NavbarHandle()}</div>
        <div className="bg-slate-100 py-20">
          <div className="w-11/12 xl:w-10/12 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className="col-span-1 p-2">
                <div className="p-3 bg-white rounded-xl">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <Image
                        src="/photo_profile.png"
                        className="p-2 rounded-full border-2 border-blue-500 mb-4"
                        width={100}
                        height={100}
                        alt="photo-profile"
                      />
                    </div>
                    <div className="p-3 border-2 custom-color rounded-xl font-bold border-blue-500 hover:bg-blue-500 hover:text-white mb-4 cursor-pointer">
                      Select Photo
                    </div>
                    <div className="font-bold text-xl text-center mb-2">
                      {data ? data?.user?.name : 'Loading...'}
                    </div>
                    <div className="flex items-center flex-row gap-2 mb-4">
                      <div>
                        <FontAwesomeIcon icon={faLocationDot} width={18} />
                      </div>
                      <div className="text-sm">Yogyakarta, Indonesia</div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mb-2">
                    <div className="font-bold">Cards</div>
                    <div className="custom-color font-bold">+add</div>
                  </div>
                  <div className="custom-background p-3 rounded-xl mb-4">
                    <div className="font-semibold text-white">
                      4441 1235 5512 5551
                    </div>
                    <div className="flex flex-row justify-between text-white">
                      <div>X Card</div>
                      <div>$ 1,440.2</div>
                    </div>
                  </div>
                  <Link href="/profile">
                    <div className="flex flex-row items-center justify-between mb-4 hover:text-blue-900 cursor-pointer">
                      <div className="flex flex-row gap-3 items-center">
                        <div>
                          <FontAwesomeIcon icon={faAddressCard} width={20} />
                        </div>
                        <div>Profile</div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faChevronRight} width={10} />
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-row items-center justify-between mb-4">
                    <div className="flex flex-row gap-3 items-center">
                      <div>
                        <FontAwesomeIcon icon={faStar} width={20} />
                      </div>
                      <div>My Review</div>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faChevronRight} width={10} />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mb-4">
                    <div className="flex flex-row gap-3 items-center">
                      <div>
                        <FontAwesomeIcon icon={faGear} width={20} />
                      </div>
                      <div>Settings</div>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faChevronRight} width={10} />
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-center justify-between mb-4 hover:text-blue-900 cursor-pointer"
                    onClick={() => LogoutHandle()}
                  >
                    <div className="flex flex-row gap-3 items-center">
                      <div>
                        <FontAwesomeIcon icon={faRightFromBracket} width={20} />
                      </div>
                      <div>Logout</div>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faChevronRight} width={10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 p-2 ">
                <div className="bg-white rounded-xl p-3 mb-4">
                  <div className="custom-color text-sm py-2">
                    M y B o o k i n g
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="font-bold text-lg py-2">My Booking</div>
                    </div>
                    <div className="flex justify-end items-center">
                      <div className="custom-color font-medium">
                        Order History
                      </div>
                    </div>
                  </div>
                </div>
                {data?.result?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="bg-white rounded-xl p-3 mb-4">
                        <div className="text-sm py-2">
                          {new Date(
                            `${item?.ticket?.takeoff}`
                          ).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}{' '}
                          -{' '}
                          {new Date(
                            `${item?.ticket?.takeoff}`
                          ).toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })}
                        </div>
                        <div className="text-lg py-2 w-full sm:w-2/3 flex justify-between items-center">
                          <div className="font-extrabold">
                            {item?.ticket?.from?.code}
                            <div className="text-xs">
                              {item?.ticket?.from?.location}
                            </div>
                          </div>
                          <div>
                            <Image
                              src="/small_plane_logo.svg"
                              width={20}
                              height={20}
                              alt="small-plane-logo"
                            />
                          </div>
                          <div className="font-extrabold">
                            {item?.ticket?.to?.code}
                            <div className="text-xs">
                              {item?.ticket?.to?.location}
                            </div>
                          </div>
                        </div>
                        <div>
                          <Image
                            src={item?.ticket?.airline?.photo}
                            width={100}
                            height={100}
                            alt="plane-logo"
                          />
                        </div>
                        <div className="text-sm py-2">
                          {item?.ticket?.airline?.name}, AB-221
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="flex w-full flex-col sm:flex-row justify-between items-center">
                            <div className="font-bold text-sm py-2 text-slate-400">
                              Status
                            </div>
                              <div
                                className={`font-bold ${
                                  item?.status?.id === 1
                                    ? 'bg-amber-800'
                                    : item?.status?.id === 2
                                    ? 'bg-green-800'
                                    : item?.status?.id === 3
                                    ? 'bg-red-800'
                                    : ''
                                } text-sm py-2 p-2 rounded-lg text-white text-center`}
                              >
                                {item?.status?.name}
                              </div>
                              <Link href={`/booking/${item?.code}`}>
                              <div className='font-bold underline'>Proceed to Pay</div>
                            </Link>
                          </div>
                          <div className="flex justify-end items-center">
                            <Link href="/booking-pass">
                              <div className="custom-color font-medium flex flex-row gap-2 items-center hover:text-blue-900">
                                <div>View Details</div>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faChevronDown}
                                    width={20}
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </PrivateRoute>
    </>
  );
}
