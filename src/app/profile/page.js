'use client';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faAddressCard,
  faStar,
  faGear,
  faRightFromBracket,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MyProvider } from '../context/page';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export default function Profile() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/detail`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setData(response.data.data);
      console.log('Data profile:', response.data.data);
      toast.success('Get detail profile success!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Get detail profile failed');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('access_token'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, []);

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
      <MyProvider>
        <div className="w-11/12 container mx-auto">{NavbarHandle()}</div>
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
                      {data ? data?.name : 'Loading...'}
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
                  <div className="flex flex-row items-center justify-between mb-4">
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
                  <div className="custom-color text-sm py-2">P R O F I L E</div>
                  <div className="font-bold text-xl py-2 mb-14">Profile</div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="font-semibold mb-5">Contact</div>
                      <div className="p-2">
                        <div className="border-b-2 mb-5">
                          <label className="p-3 text-sm">Email</label>
                          <input
                            defaultValue={data ? data?.email : 'Loading...'}
                            type="email"
                            className="w-full p-3 outline-none"
                          />
                        </div>
                        <div className="border-b-2 mb-5">
                          <label className="p-3 text-sm">Phone Number</label>
                          <input
                            defaultValue="0123123123"
                            type="number"
                            className="w-full p-3 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold mb-5">Biodata</div>
                      <div className="p-2">
                        <div className="border-b-2 mb-5">
                          <label className="p-3 text-sm">Fullname</label>
                          <input
                            defaultValue={data ? data?.name : 'Loading...'}
                            type="text"
                            className="w-full p-3 outline-none"
                          />
                        </div>
                        <div className="border-b-2 mb-5">
                          <label className="p-3 text-sm">City</label>
                          <select className="p-2 bg-transparent outline-none w-full">
                            <option>Yogyakarta</option>
                            <option>Jakarta</option>
                            <option>Medan</option>
                          </select>
                        </div>
                        <div className="border-b-2 mb-5">
                          <label className="p-3 text-sm">Address</label>
                          <input
                            defaultValue="Yogyakarta, Indonesia"
                            type="text"
                            className="w-full p-3 outline-none"
                          />
                        </div>
                        <div className="border-b-2 mb-5">
                          <label className="p-3 text-sm">Post Code</label>
                          <input
                            defaultValue="12345"
                            type="number"
                            className="w-full p-3 outline-none"
                          />
                        </div>
                      </div>
                      <button className="px-10 py-3 custom-background rounded-xl font-semibold text-white float-right hover:bg-blue-900">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </MyProvider>
    </>
  );
}
