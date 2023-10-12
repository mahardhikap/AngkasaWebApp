'use client';
import './payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PrivateRoute } from '../../../context/page';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CompletePayment() {
  const [token, setToken] = useState(null);
  const { id } = useParams();
  const router = useRouter();
  const [payment, setPayment] = useState(null);

  const getBookingById = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPayment(response.data.data);
    } catch (error) {
      console.log('Error when get data', error);
    }
  };

  const changeStatus = async (status) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/booking/status/${id}`,
        { statusId: status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Change ticket status success!');
      if (response.status === 200) {
        setTimeout(()=>{
          router.push('/booking');
        },3000)
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Change ticket status failed!');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('access_token');
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getBookingById();
    }
  }, [token]);

  useEffect(() => {
    if (payment) {
      console.log('Payment included', payment);
    }
  }, [payment]);

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
        <div className="container mx-auto bg-slate-100">
          <div className="w-11/12 sm:w-1/2 mx-auto py-20">
            <div className="col-span-1 bg-white rounded-lg">
              <div className="p-3 font-bold text-center bg-blue-800 text-white rounded-lg text-2xl">Payment</div>
              <div className="p-3 flex justify-center items-center">
                <Image
                  src={payment?.result?.ticket?.airline?.photo}
                  width={400}
                  height={400}
                  alt="plane-logo"
                />
              </div>
              <div className='text-center font-bold text-2xl'>{payment?.result?.ticket?.airline?.name}</div>
              <div className="p-3">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>From</div>
                  <div className='font-bold'>{payment?.result?.ticket?.from?.location} ({payment?.result?.ticket?.from?.code})</div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>To</div>
                  <div className='font-bold'>{payment?.result?.ticket?.to?.location} ({payment?.result?.ticket?.to?.code})</div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>For</div>
                  <div className='font-bold'>{payment?.result?.passenger?.name}</div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex flex-row justify-between">
                  <div>Total Payment</div>
                  <div className="font-bold">
                    ${payment?.result?.totalPayment}
                  </div>
                </div>
              </div>
              <div className="p-3">
                <button
                  className="p-3 my-2 w-full bg-green-600 rounded-lg text-white hover:bg-green-800"
                  onClick={() => changeStatus(2)}
                >
                  Complete Payment
                </button>
                <button
                  className="p-3 my-2 w-full bg-red-600 rounded-lg text-white hover:bg-red-800"
                  onClick={() => changeStatus(3)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        <Footer />
      </PrivateRoute>
    </>
  );
}
