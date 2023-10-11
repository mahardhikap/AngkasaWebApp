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

export default function completePayment() {
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
      console.log('Sebelum menyimpan data ke payment:', response.data.data);
      setPayment(response.data.data);
    } catch (error) {
      console.log('terjadi error waktu get', error);
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
      console.log('ini adalah id flight', id);
      console.log('ini respon change status', response);
      toast.success('Change status success!');
      if (response.status === 200) {
        router.push('/booking');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Change status failed!');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('access_token');
      console.log('Stored Token:', storedToken);
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
      console.log('Data ada isinya', payment);
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
              <div className="p-3 font-bold text-center">Payment</div>
              <div className="p-3 flex justify-center items-center">
                <Image
                  src={payment?.result?.ticket?.airline?.photo}
                  width={400}
                  height={400}
                  alt="plane-logo"
                />
              </div>
              <div className="p-3">
                <div className="flex flex-row justify-between">
                  <div>From</div>
                  <div className='font-bold'>{payment?.result?.ticket?.from?.location}</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>To</div>
                  <div className='font-bold'>{payment?.result?.ticket?.to?.location}</div>
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
                  className="p-3 my-2 w-full custom-background rounded-lg text-white hover:bg-blue-600"
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
