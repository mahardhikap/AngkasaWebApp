'use client';
import Image from 'next/image';
import './verify.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';

export default function Register() {
  const router = useRouter();
  const [errMessage, setErrMessage] = useState('');
  const [inputData, setInputData] = useState({
    email: '',
  });

  const postData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/activated`,
        inputData,
        {
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header
          },
        }
      );
      console.log('Data:', response.data);
      setErrMessage('')
      toast.success('Activate success!');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error) {
      setErrMessage(error);
      console.error('Error:', error);
      toast.error('Activate failed!');
    }
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mx-auto flex flex-wrap h-screen">
        <div className="flex-auto w-full sm:w-1/3 md:w-2/5 lg:w-3/5 color-login">
          <div className="flex justify-center items-center h-full">
            <Image
              className="sm:w-4/5 md:w-3/5 lg:w-3/5 my-screen"
              src="/illustration.png"
              alt="Angkasa-Logo"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex-auto w-full sm:w-2/3 md:w-3/5 lg:w-2/5 flex flex-col justify-center">
          <div className="w-4/5 mx-auto">
            <Image
              src="/Group_28.svg"
              width={200}
              height={100}
              className="hidden sm:inline md:inline lg:inlin mt-2"
              alt="angkasa-big"
            />
            <div className="my-10 sm:my-40">
              <h1 className="font-semibold text-3xl">Verifikasi Email</h1>
              <div className="mb-4 border-b-2">
                <input
                  className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                  type="email"
                  placeholder="Email"
                  onChange={onChange}
                  value={inputData.email}
                  name="email"
                />
              </div>
              <div className="text-green-500 my-5">
                {errMessage
                  ? errMessage?.response?.data?.message
                  : ''}
              </div>
              {/* <div className="mb-4 border-b-2">
              <input
                className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                type="text"
                placeholder="OTP"
              />
            </div> */}
              <button
                className="rounded-md color-button-verif border-solid border-2 w-full p-4 font-bold text-white"
                onClick={() => postData()}
              >
                Verif
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
