'use client';
import Image from 'next/image';
import './register.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
  const router = useRouter();
  const [errMessage, setErrMessage] = useState('');
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const postData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        inputData,
        {
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header
          },
        }
      );
      toast.success('Register success!');
      setTimeout(() => {
        router.push('/verify');
      }, 2000);
    } catch (error) {
      setErrMessage(error);
      console.error('Error:', error);
      toast.error('Register failed!');
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
              alt="big-pic"
            />
            <div className="my-10 sm:my-40">
              <h1 className="font-semibold text-3xl">Register</h1>
              {/* <form> */}
              <div className="mb-4 border-b-2">
                <input
                  className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                  type="text"
                  placeholder="Full Name"
                  onChange={onChange}
                  value={inputData.name}
                  name="name"
                />
              </div>
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
              <div className="mb-4 border-b-2 relative">
                <input
                  className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={onChange}
                  value={inputData.password}
                  name="password"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FontAwesomeIcon icon={faEye} width={20} color="#2395FF" />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      width={20}
                      color="#2395FF"
                    />
                  )}
                </button>
              </div>
              <button
                className="rounded-md color-button-register w-full p-4 text-white font-bold"
                onClick={() => postData()}
              >
                Sign Up
              </button>
              <div className="my-5">
                <input type="checkbox" className="default:ring-2" />
                Accept terms and condition
              </div>
              <div className="mt-2 mb-10 text-red-500">
                <p>{errMessage ? errMessage?.response?.data?.message : ''}</p>
              </div>
              {/* </form> */}
              <div className="border-t-2 my-5">
                <p className="text-center my-3">Already have an account?</p>
              </div>
              <Link href="/login">
                <button className="rounded-md border-button-login border-solid border-2 w-full p-4 font-bold">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
