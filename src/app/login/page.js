'use client';
import axios from 'axios'; // Import axios library
import Image from 'next/image';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        inputData,
        {
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header
          },
        }
      );
      console.log('Data:', response.data);
      localStorage.setItem("access_token", response.data.data.access_token)
      toast.success('Login success');
      setTimeout(()=>{
        router.push('/');
      },2000)
    } catch (error) {
      console.error('Error:', error);
      toast.error('Login failed');
    }
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
            alt='angkasa-logo-small'
          />
          <div className="my-10 sm:my-40">
            <form onSubmit={postData}>
              <h1 className="font-semibold text-3xl">Login</h1>
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
                type="submit"
                className="rounded-md color-button-login border-solid border-2 w-full p-4 font-bold text-white"
              >
                Sign in
              </button>
            </form>
            <div className="my-5">
              <p className="text-center my-3">Did you forgot your password?</p>
            </div>
            <div className="my-5">
              <p className="text-center my-3 text-color-login">
                Tap here for reset
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
