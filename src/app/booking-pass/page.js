'use client'
import './booking-pass.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import React, {useState, useEffect} from 'react';

export default function BookingPass() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('access_token'));
    }
  }, []);

  const NavbarHandle = () => {
    if (!token) {
      return <Navbar />;
    } else {
      return <LoginNavbar />;
    }
  };


  return (
    <>
      <div className='w-11/12 container mx-auto'>
        {NavbarHandle()}
      </div>
      <div className="bg-slate-200">
        <div className="container mx-auto w-3/4 py-10">
          <div className="bg-white rounded-xl">
            <div className="p-16">
              <div className="flex flex-row items-center justify-between mb-4">
                <div className="font-bold text-2xl">Booking Pass</div>
                <div>
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    width={10}
                    color="#2395FF"
                  />
                </div>
              </div>
              <img src="/eticket.png" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
