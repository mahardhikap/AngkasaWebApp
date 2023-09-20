import './booking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faAddressCard,
  faStar,
  faGear,
  faRightFromBracket,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import Footer from '@/app/footer/page';
import Link from 'next/link';

export default function Booking() {
  return (
    <>
      <div className="container w-10/12 mx-auto">
        <Navbar />
      </div>
      <div className="bg-slate-100 py-20">
        <div className="w-11/12 xl:w-10/12 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="col-span-1 p-2">
              <div className="p-3 bg-white rounded-xl">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <img
                      src="/photo_profile.png"
                      className="p-2 rounded-full border-2 border-blue-500 mb-4"
                    />
                  </div>
                  <div className="p-3 border-2 custom-color rounded-xl font-bold border-blue-500 hover:bg-blue-500 hover:text-white mb-4 cursor-pointer">
                    Select Photo
                  </div>
                  <div className="font-bold text-xl text-center mb-2">
                    Mike Kowalski
                  </div>
                  <div className="flex items-center flex-row gap-2 mb-4">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} width={18} />
                    </div>
                    <div className="text-sm">Medan, Indonesia</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between mb-2">
                  <div className="font-bold">Cards</div>
                  <div className="custom-color font-bold">+add</div>
                </div>
                <div className="custom-background p-3 rounded-xl mb-4">
                  <div className="font-semibold text-white">
                    4441 1235 5512 5551
                  </div>
                  <div className="flex flex-row justify-between text-white">
                    <div>X Card</div>
                    <div>$ 1,440.2</div>
                  </div>
                </div>
                <Link href="/profile">
                  <div className="flex flex-row items-center justify-between mb-4 hover:text-blue-900 cursor-pointer">
                    <div className="flex flex-row gap-3 items-center">
                      <div>
                        <FontAwesomeIcon icon={faAddressCard} width={20} />
                      </div>
                      <div>Profile</div>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faChevronRight} width={10} />
                    </div>
                  </div>
                </Link>
                <div className="flex flex-row items-center justify-between mb-4">
                  <div className="flex flex-row gap-3 items-center">
                    <div>
                      <FontAwesomeIcon icon={faStar} width={20} />
                    </div>
                    <div>My Review</div>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faChevronRight} width={10} />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mb-4">
                  <div className="flex flex-row gap-3 items-center">
                    <div>
                      <FontAwesomeIcon icon={faGear} width={20} />
                    </div>
                    <div>Settings</div>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faChevronRight} width={10} />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mb-4">
                  <div className="flex flex-row gap-3 items-center">
                    <div>
                      <FontAwesomeIcon icon={faRightFromBracket} width={20} />
                    </div>
                    <div>Logout</div>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faChevronRight} width={10} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 p-2 ">
              <div className="bg-white rounded-xl p-3 mb-4">
                <div className="custom-color text-sm py-2">
                  M y B o o k i n g
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <div className="font-bold text-lg py-2">My Booking</div>
                  </div>
                  <div className="flex justify-end items-center">
                    <div className="custom-color font-medium">
                      Order History
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3 mb-4">
                <div className="text-sm py-2">Monday, 20 July '20 - 12:33</div>
                <div className="text-lg py-2 w-full sm:w-1/3 flex justify-between items-center">
                  <div className="font-extrabold">IDN</div>
                  <div>
                    <img src="/small_plane_logo.svg" />
                  </div>
                  <div className="font-extrabold">JPN</div>
                </div>
                <div className="text-sm py-2">Garuda Indonesia, AB-221</div>
                <div className="grid grid-cols-2">
                  <div className="flex w-full flex-col md:w-2/3 md:flex-row justify-between">
                    <div className="font-bold text-sm py-2 text-slate-400">
                      Status
                    </div>
                    <div className="font-bold text-sm py-2 background-waiting p-2 rounded-lg text-white">
                      Waiting for payment
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <div className="custom-color font-medium flex flex-row gap-2 items-center">
                      <div>View Details</div>
                      <div>
                        <FontAwesomeIcon icon={faChevronDown} width={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3 mb-4">
                <div className="text-sm py-2">Monday, 20 July '20 - 12:33</div>
                <div className="text-lg py-2 w-full sm:w-1/3 flex justify-between items-center">
                  <div className="font-extrabold">IDN</div>
                  <div>
                    <img src="/small_plane_logo.svg" />
                  </div>
                  <div className="font-extrabold">JPN</div>
                </div>
                <div className="text-sm py-2">Garuda Indonesia, AB-221</div>
                <div className="grid grid-cols-2">
                  <div className="flex w-full flex-col md:w-2/3 md:flex-row justify-between">
                    <div className="font-bold text-sm py-2 text-slate-400">
                      Status
                    </div>
                    <div className="font-bold text-sm py-2 background-issued p-2 rounded-lg text-white">
                      E-Ticket issued
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <Link href="/booking-pass">
                      <div className="custom-color font-medium flex flex-row gap-2 items-center hover:text-blue-900">
                        <div>View Details</div>
                        <div>
                          <FontAwesomeIcon icon={faChevronDown} width={20} />
                        </div>
                      </div>
                    </Link>
                  </div>
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
