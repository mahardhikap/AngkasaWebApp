'use client';
import Image from 'next/image';
import './change.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function ChangePassword() {
  const { id } = useParams();
  const [token, setToken] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [inputData, setInputData] = useState({
    request_code: id,
    new_password: '',
    email: '',
  });
  const router = useRouter();

  const changePassword = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/new_password`,
        inputData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      toast.success('Change password success!');
      if (response) {
        setTimeout(()=>{
          router.push('/login');
        },3000)
      }
    } catch (error) {
      console.log('error when change password', error);
      toast.error('Change password failed!');
    }
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('access_token'));
    }
  }, []);

  return (
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
            alt="image"
          />
          <div className="my-10 sm:my-40">
            <h1 className="font-semibold text-3xl">Change Password</h1>
            <div className="mb-4 border-b-2 relative">
              <input
                className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="New password"
                onChange={onChange}
                value={inputData.new_password}
                name="new_password"
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
            <div className="mb-4 border-b-2">
              <input
                className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChange}
                value={inputData.email}
              />
            </div>
            <button
              className="rounded-md color-button-forgot border-solid border-2 w-full p-4 font-bold text-white"
              onClick={() => changePassword()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
