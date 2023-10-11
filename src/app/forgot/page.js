'use client'
import React,{useEffect, useState} from 'react'
import Image from 'next/image';
import './forgot.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const [inputData, setInputData] = useState({
    email:'',
    fe_url:'https://ankasa-web.vercel.app/change-password'
  })
  const router = useRouter()

  const sendOTP = async () =>{
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgot_password`, inputData, {
        headers:{
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      toast.success('Send OTP success, check email!')
      if (response) {
        setTimeout(()=>{
          router.push('/login');
        },3000)
      }
    } catch (error) {
      console.log('error ketika send OTP', error)
    }
  }

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
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
            alt='image'
          />
          <div className="my-10 sm:my-40">
            <h1 className="font-semibold text-3xl">Forgot Password</h1>
            <div className="mb-4 border-b-2">
              <input
                className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                type="email"
                placeholder="Email"
                name='email'
                onChange={onChange}
                value={inputData.email}
              />
            </div>
            <button className="rounded-md color-button-forgot border-solid border-2 w-full p-4 font-bold text-white" onClick={()=>sendOTP()}>
              Send
            </button>
            <div className="my-5">
              <p className="text-center my-3">You will get message soon on your email</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}