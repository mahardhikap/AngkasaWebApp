'use client';
import './flight-detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PrivateRoute } from '@/context/page';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export default function FlightDetail() {
  const [token, setToken] = useState(null);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [flight, setFlight] = useState(null);
  const [inputData, setInputData] = useState({
    title1: '',
    fullname1: '',
    nationality1: '',
  });

  const getContactDetail = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      // console.log('ini token', token);
      console.log('ini adalah id flight', id);
      setData(response.data.data);
      console.log('Get contact:', response.data.data);
      toast.success('Get contact detail success');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Get contact detail failed');
    }
  };

  const getFlightDetail = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/airlines/flight/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      // console.log('ini token', token);
      console.log('ini adalah id flight', id);
      setFlight(response.data.data);
      console.log('Get detail:', response.data.data);
      toast.success('Get detail flight success');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Get detail flight failed');
    }
  }

  const postDetailPassenger = async () => {
    try {
      console.log('Input Data:', inputData);
      let bodyFormData = new FormData();
      bodyFormData.append('title1', inputData.title1);
      bodyFormData.append('fullname1', inputData.fullname1);
      bodyFormData.append('nationality1', inputData.nationality1);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/${id}`,
        bodyFormData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      console.log('Post detail:', response.data);
      console.log('Post code:', response.data.data.code);
      toast.success('Post detail passenger success');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Post detail passenger failed');
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('access_token'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      getContactDetail()
      getFlightDetail();
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

  return (
    <>
      <PrivateRoute>
        <div className="container w-11/12 mx-auto">{NavbarHandle()}</div>
          <div className="bg-slate-100">
            <div className="custom-background container w-full mx-auto rounded-b-3xl h-auto">
              <Image src="/logo_plane_blue.png" width={200} height={200} alt='plane-blue'/>
            </div>
            <div className="mx-auto container w-11/12">
              <div className="grid grid-cols-1 lg:grid-cols-3 relative">
                <div className="col-span-2 p-2">
                  <div className="mt-[-120px] pb-10 font-bold text-2xl text-white">
                    Contact Person Details
                  </div>
                  <div className="flex flex-col p-5 bg-white rounded-2xl">
                    <div className="border-b-2 mb-4">
                      <label className="p-3 custom-color-grey">Full Name</label>
                      <input
                        placeholder={data?.user?.name}
                        className="w-full p-3 bg-transparent outline-none"
                        type="text"
                      />
                    </div>
                    <div className="border-b-2 mb-4">
                      <label className="p-3 custom-color-grey">Email</label>
                      <input
                        placeholder={data?.user?.email}
                        className="w-full p-3 bg-transparent outline-none"
                        type="email"
                      />
                    </div>
                    <div className="border-b-2 mb-4">
                      <label className="p-3 custom-color-grey">
                        Phone Number
                      </label>
                      <div className="flex flex-row">
                        <select className="p-3 bg-transparent">
                          <option>+62</option>
                          <option>+1</option>
                          <option>+12</option>
                        </select>
                        <input
                          placeholder="your phone number"
                          className="w-full p-3 bg-transparent outline-none"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-red-200 rounded-xl items-center">
                      <div>
                        <FontAwesomeIcon
                          icon={faTriangleExclamation}
                          width={30}
                          color="red"
                        />
                      </div>
                      <div>Make sure the customer data is correct.</div>
                    </div>
                  </div>
                  <div className="pt-16 pb-10 font-bold text-2xl">
                    Passenger Details
                  </div>
                  <div className="flex flex-col p-5 bg-white rounded-2xl">
                    <div className="flex justify-between mb-4 bg-sky-100 rounded-xl">
                      <div className="p-3">Passenger: 1 Adult</div>
                      <div className="flex flex-row items-center gap-3 p-3">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                          Same as contact person
                        </span>
                        <label
                          className="relative inline-flex items-center cursor-pointer"
                          htmlFor="sameAsContactPerson"
                        >
                          <input
                            type="checkbox"
                            className="peer"
                            id="sameAsContactPerson"
                            hidden
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                    <div className="border-b-2 mb-4">
                      <label className="p-3 custom-color-grey">Title</label>
                      <div className="flex flex-row">
                        <select
                          className="p-3 bg-transparent"
                          name="title1"
                          value={inputData.title1}
                          onChange={onChange}
                        >
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="Mrs.">Mrs.</option>
                        </select>
                      </div>
                    </div>
                    <div className="border-b-2 mb-4">
                      <label className="p-3 custom-color-grey">Full name</label>
                      <input
                        placeholder="Your full name"
                        className="w-full p-3 bg-transparent outline-none"
                        type="text"
                        name="fullname1"
                        value={inputData.fullname1}
                        onChange={onChange}
                      />
                    </div>
                    <div className="border-b-2">
                      <label className="p-3 custom-color-grey">
                        Nationality
                      </label>
                      <div className="flex flex-row">
                        <select
                          className="p-3 bg-transparent"
                          name="nationality1"
                          value={inputData.nationality1}
                          onChange={onChange}
                        >
                          <option value="Indonesia">Indonesia</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Brunei">Brunei</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="pt-16 pb-10 font-bold text-2xl">
                    Passenger Details
                  </div>
                  <div className="flex flex-col p-5 bg-white rounded-2xl mb-4">
                    <div className="flex justify-between p-3 border-b-2">
                      <div className="font-bold">
                        <input type="checkbox" className="ring-2" /> Travel
                        Insurance
                      </div>
                      <div>
                        <span className="font-bold custom-color-blue">
                          $2,00
                        </span>
                        /pax
                      </div>
                    </div>
                    <div className="p-3">
                      Get travel compensation up to $ 10.000,00
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mt-0 lg:mt-[-120px] p-2">
                  <div className="flex justify-between">
                    <div className="pb-10 font-bold text-2xl text-black lg:text-white">
                      Flight Details
                    </div>
                    <div className="pb-10 font-bold text-2xl text-black lg:text-white">
                      View Details
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-3">
                    <div className="p-3 flex items-center gap-3">
                      <div>
                        <Image src={flight?.photo} width={140} height={140} alt='airplane-logo'/>
                      </div>
                      <div>{flight?.name}</div>
                    </div>
                    <div className="p-3 flex flex-row items-center justify-between">
                      <div className="font-bold">{flight?.from?.location?.split(',')[0]} ({flight?.from?.code})</div>
                      <div>
                        <Image src="/small_plane_logo.svg" width={20} height={20} alt='small-plane-logo' />
                      </div>
                      <div className="font-bold">{flight?.to?.location?.split(',')[0]} ({flight?.to?.code})</div>
                    </div>
                    <div className="p-3 flex flex-row items-center gap-5">
                      <div>{new Date(`${flight?.takeoff}`).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      <div>|</div>
                      <div>{new Date(`${flight?.takeoff}`).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', hour12: false })} - {new Date(`${flight?.landing}`).toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', hour12: false })}</div>
                    </div>
                    <div className="p-3 flex flex-row items-center gap-3 custom-color-blue font-medium">
                      <div>
                        <FontAwesomeIcon icon={faCircleCheck} width={20} />
                      </div>
                      <div>Refundable</div>
                    </div>
                    <div className="p-3 flex flex-row items-center gap-3 custom-color-blue font-medium">
                      <div>
                        <FontAwesomeIcon icon={faCircleCheck} width={20} />
                      </div>
                      <div>Can reschedule</div>
                    </div>
                    <div className="p-3 flex flex-row justify-between">
                      <div className="font-bold">Total Payment</div>
                      <div className="flex flex-row gap-2 font-bold custom-color-blue">
                        <div>${flight?.price},00</div>
                        <div>
                          <FontAwesomeIcon icon={faChevronDown} width={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-20 bg-slate-100">
              <Link href="/payment">
              <button
              // onClick={()=> postDetailPassenger()}
                className="py-3 px-16 custom-background rounded-xl font-bold text-white"
              >
                Proceed to Payment
              </button>
              </Link>
            </div>
          </div>
        <Footer />
        <ToastContainer />
      </PrivateRoute>
    </>
  );
}
