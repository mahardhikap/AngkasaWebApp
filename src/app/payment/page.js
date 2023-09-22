'use client'
import './payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';

export default function Payment() {
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
      <div className="container w-11/12 mx-auto">
        {NavbarHandle()}
      </div>
      <div className="container mx-auto bg-slate-100">
        <div className="w-11/12 sm:w-10/12 md:w-3/4 mx-auto py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white rounded-2xl">
            <div className="col-span-1">
              <div className="p-3 font-bold">Payment Method</div>
              <div className="flex flex-row items-center justify-between p-3">
                <div>Paypal</div>
                <div>
                  <img src="/paypal.webp" width={40} />
                </div>
              </div>
              <div className="flex flex-row justify-between p-3">
                <div>Credit Card</div>
                <div className="flex flex-row items-center">
                  <div>
                    <img src="/paymentgate.png" width={150} />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <label>Card Number</label>
                <input
                  placeholder="0000 0000 0000 0000"
                  className="w-full p-3 rounded-lg border-2"
                />
              </div>
              <div className="grid grid-cols-2 p-3">
                <div>
                  <label>Expiry Date</label>
                  <input
                    placeholder="MM/YY"
                    className="w-full p-3 rounded-lg border-2"
                  />
                </div>
                <div className="ps-2">
                  <label>CVC/CVV</label>
                  <input
                    placeholder="000"
                    className="w-full p-3 rounded-lg border-2"
                  />
                </div>
              </div>
              <div className="p-3 flex flex-rows items-center gap-3">
                <div>
                  <FontAwesomeIcon icon={faLock} width={15} />
                </div>
                <div>Your transaction is secured with ssl certificate</div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="p-3 font-bold">Summary</div>
              <div className="p-3 flex flex-row justify-between">
                <div>
                  <div>Pro(Billed Monthly)</div>
                  <div className="underline custom-color text-sm">
                    Save 20% with annual billing
                  </div>
                </div>
                <div>
                  <span className="font-bold">$9.99</span>/
                  <span className="text-xs">month</span>
                </div>
              </div>
              <div className="p-3">
                <div className="flex flex-row justify-between">
                  <div>Refferal Bonuses</div>
                  <div>-$2.00</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Vat</div>
                  <div>-20%</div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex flex-row justify-between">
                  <div>Today you pay (US Dollars)</div>
                  <div>$0</div>
                </div>
                <div>After 30 days $9.59</div>
              </div>
              <div className="p-3">
                <Link href='/booking'>
                  <button className="p-3 w-full custom-background rounded-lg text-white hover:bg-blue-600">
                    Try it free for 30 days
                  </button>
                </Link>
                <div className="custom-color text-center py-2">
                  Have a promo code?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
