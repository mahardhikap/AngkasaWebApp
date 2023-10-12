'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import React, { useState, useEffect } from 'react';
import { PrivateRoute } from '../../../context/page';
import Image from 'next/image';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'next/navigation';
import Barcode from 'react-barcode';


export default function BookingPass() {
  const [token, setToken] = useState(null);
  const {id} = useParams()
  const [detailTicket, setDetailTicket] = useState(null)

  const getDetailTicket = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/booking/tickets/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log('detail ticket',response.data.data.result.ticket)
      setDetailTicket(response.data.data.result.ticket);
      toast.success('Success get detail ticket!')
    } catch (error) {
      console.log('Error when get data', error);
      toast.error('Get detail ticket failed!')
    }
  };

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

  useEffect(()=>{
    if(token){
      getDetailTicket()
    }
  }, [token])

  return (
    <>
      <PrivateRoute>
        <div className="w-11/12 container mx-auto">{NavbarHandle()}</div>
        <div className="bg-slate-200">
          <div className="container mx-auto w-11/12 sm:w-3/4 py-10">
            <div className="bg-white rounded-xl">
              <div className="pt-0 pe-0 ps-0 pb-28 sm:p-16">
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
                <div className="grid grid-cols-1 sm:grid-cols-3 border-0 sm:border-2 sm:border-black rounded-lg p-2 h-[500px] items-center">
                  <div className="col-span-2 ps-0 sm:ps-20">
                    <div className="flex flex-col sm:flex-row gap-3 items-center mb-10">
                      <div>
                        <Image
                        src={detailTicket?.airline?.photo}
                        width={200}
                        height={200}
                        alt='logo-ticket-plane'
                        />
                      </div>
                      <div className='font-extrabold'>{detailTicket?.from?.code}</div>
                      <div>
                        <Image
                        src={'/small_plane_logo.svg'}
                        width={20}
                        height={20}
                        alt='small-logo-plane'
                        />
                      </div>
                      <div className='font-extrabold'>{detailTicket?.to?.code}</div>
                    </div>
                    <div className="grid grid-cols-2 mb-10">
                      <div className="col-span-1">
                        <div className='text-sm'>Code</div>
                        <div className='font-semibold'>AB-221</div>
                      </div>
                      <div className="col-span-1">
                        <div className='text-sm'>Class</div>
                        <div className='font-semibold'>Economy</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 mb-10">
                    <div className="col-span-1">
                        <div className='text-sm'>Terminal</div>
                        <div className='font-semibold'>A</div>
                      </div>
                      <div className="col-span-1">
                        <div className='text-sm'>Gate</div>
                        <div className='font-semibold'>221</div>
                      </div>
                    </div>
                    <div className='text-sm'>Departure</div>
                    <div className='font-semibold'>{new Date(
                            `${detailTicket?.takeoff}`
                          ).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })} - {new Date(
                            `${detailTicket?.takeoff}`
                          ).toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                          })}</div>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <div className='rotate-0 sm:rotate-90'>
                    <Barcode value={`${detailTicket?.code}`} height={70} width={0.7} fontSize={12}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer/>
      </PrivateRoute>
    </>
  );
}
