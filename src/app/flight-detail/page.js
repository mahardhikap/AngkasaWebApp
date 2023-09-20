import './flight-detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Navbar from '@/app/navbar/page';
import Footer from '@/app/footer/page';
import Link from 'next/link';

export default function FlightDetail() {
  return (
    <>
      <div className="container w-11/12 mx-auto">
        <Navbar />
      </div>
      <div className="bg-slate-100">
        <div className="custom-background container w-full mx-auto rounded-b-3xl h-auto">
          <img src="/logo_plane_blue.png" />
        </div>
        <div className="mx-auto container w-11/12">
          <div className="grid grid-cols-1 lg:grid-cols-3 relative">
            <div className="col-span-2 p-2">
              <div className="mt-[-120px] pb-10 font-bold text-2xl text-white">
                Contact Person Details
              </div>
              <div className="flex flex-col p-5 bg-white rounded-2xl">
                <div className="border-b-2 mb-4">
                  <label className="p-3 custom-color-grey">Full Name</label>
                  <input
                    placeholder="your full name"
                    className="w-full p-3 bg-transparent outline-none"
                    type="text"
                  />
                </div>
                <div className="border-b-2 mb-4">
                  <label className="p-3 custom-color-grey">Email</label>
                  <input
                    placeholder="your email"
                    className="w-full p-3 bg-transparent outline-none"
                    type="email"
                  />
                </div>
                <div className="border-b-2 mb-4">
                  <label className="p-3 custom-color-grey">Phone Number</label>
                  <div className="flex flex-row">
                    <select className="p-3 bg-transparent">
                      <option>+62</option>
                      <option>+1</option>
                      <option>+12</option>
                    </select>
                    <input
                      placeholder="your phone number"
                      className="w-full p-3 bg-transparent outline-none"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-red-200 rounded-xl items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      width={30}
                      color="red"
                    />
                  </div>
                  <div>Make sure the customer data is correct.</div>
                </div>
              </div>
              <div className="pt-16 pb-10 font-bold text-2xl">
                Passenger Details
              </div>
              <div className="flex flex-col p-5 bg-white rounded-2xl">
                <div className="flex justify-between mb-4 bg-sky-100 rounded-xl">
                  <div className="p-3">Passenger: 1 Adult</div>
                  <div className="flex flex-row items-center gap-3 p-3">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Same as contact person
                    </span>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      htmlFor="sameAsContactPerson"
                    >
                      <input
                        type="checkbox"
                        className="peer"
                        id="sameAsContactPerson"
                        hidden
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
                <div className="border-b-2 mb-4">
                  <label className="p-3 custom-color-grey">Title</label>
                  <div className="flex flex-row">
                    <select className="p-3 bg-transparent">
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Mrs.</option>
                    </select>
                  </div>
                </div>
                <div className="border-b-2 mb-4">
                  <label className="p-3 custom-color-grey">Full name</label>
                  <input
                    placeholder="your full name"
                    className="w-full p-3 bg-transparent outline-none"
                    type="text"
                  />
                </div>
                <div className="border-b-2">
                  <label className="p-3 custom-color-grey">Nationality</label>
                  <div className="flex flex-row">
                    <select className="p-3 bg-transparent">
                      <option>Indonesia</option>
                      <option>Malaysia</option>
                      <option>Brunei</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="pt-16 pb-10 font-bold text-2xl">
                Passenger Details
              </div>
              <div className="flex flex-col p-5 bg-white rounded-2xl mb-4">
                <div className="flex justify-between p-3 border-b-2">
                  <div className="font-bold">
                    <input type="checkbox" className="ring-2" /> Travel
                    Insurance
                  </div>
                  <div>
                    <span className="font-bold custom-color-blue">$2,00</span>
                    /pax
                  </div>
                </div>
                <div className="p-3">
                  Get travel compensation up to $ 10.000,00
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-0 lg:mt-[-120px] p-2">
              <div className="flex justify-between">
                <div className="pb-10 font-bold text-2xl text-black lg:text-white">
                  Flight Details
                </div>
                <div className="pb-10 font-bold text-2xl text-black lg:text-white">
                  View Details
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3">
                <div className="p-3 flex items-center gap-3">
                  <div>
                    <img src="/logo_garuda.png" />
                  </div>
                  <div>Garuda Indonesia</div>
                </div>
                <div className="p-3 flex flex-row items-center justify-between">
                  <div className="font-bold">Medan (IDN)</div>
                  <div>
                    <img src="/small_plane_logo.svg" />
                  </div>
                  <div className="font-bold">Tokyo (JPN)</div>
                </div>
                <div className="p-3 flex flex-row items-center gap-5">
                  <div>Sunday, 15 August 2020</div>
                  <div>|</div>
                  <div>12:33 - 15:21</div>
                </div>
                <div className="p-3 flex flex-row items-center gap-3 custom-color-blue font-medium">
                  <div>
                    <FontAwesomeIcon icon={faCircleCheck} width={20} />
                  </div>
                  <div>Refundable</div>
                </div>
                <div className="p-3 flex flex-row items-center gap-3 custom-color-blue font-medium">
                  <div>
                    <FontAwesomeIcon icon={faCircleCheck} width={20} />
                  </div>
                  <div>Can reschedule</div>
                </div>
                <div className="p-3 flex flex-row justify-between">
                  <div className="font-bold">Total Payment</div>
                  <div className="flex flex-row gap-2 font-bold custom-color-blue">
                    <div>$ 145,00</div>
                    <div>
                      <FontAwesomeIcon icon={faChevronDown} width={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-20 bg-slate-100">
          <Link href="/payment">
            <button className="py-3 px-16 custom-background rounded-xl font-bold text-white">
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
