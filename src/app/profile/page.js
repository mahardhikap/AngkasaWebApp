import './profile.css';
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

export default function Profile() {
  return (
    <>
      <Navbar />
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
                <div className="flex flex-row items-center justify-between mb-4">
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
                <Link href='/pages/index'>
                  <div className="flex flex-row items-center justify-between mb-4 hover:text-blue-900">
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
                </Link>
              </div>
            </div>
            <div className="col-span-3 p-2 ">
              <div className="bg-white rounded-xl p-3 mb-4">
                <div className="custom-color text-sm py-2">P R O F I L E</div>
                <div className="font-bold text-xl py-2 mb-14">Profile</div>
                <div className="grid grid-cols-2">
                  <div>
                    <div className="font-semibold mb-5">Contact</div>
                    <div className="p-2">
                      <div className="border-b-2 mb-5">
                        <label className="p-3 text-sm">Email</label>
                        <input
                          defaultValue="putrad578@gmail.com"
                          type="email"
                          className="w-full p-3 outline-none"
                        />
                      </div>
                      <div className="border-b-2 mb-5">
                        <label className="p-3 text-sm">Phone Number</label>
                        <input
                          defaultValue="0123123123"
                          type="number"
                          className="w-full p-3 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-5">Biodata</div>
                    <div className="p-2">
                      <div className="border-b-2 mb-5">
                        <label className="p-3 text-sm">Fullname</label>
                        <input
                          defaultValue="Mahardhika Pratama"
                          type="text"
                          className="w-full p-3 outline-none"
                        />
                      </div>
                      <div className="border-b-2 mb-5">
                        <label className="p-3 text-sm">City</label>
                        <select className="p-2 bg-transparent outline-none w-full">
                          <option>Yogyakarta</option>
                          <option>Jakarta</option>
                          <option>Medan</option>
                        </select>
                      </div>
                      <div className="border-b-2 mb-5">
                        <label className="p-3 text-sm">Address</label>
                        <input
                          defaultValue="Yogyakarta, Indonesia"
                          type="text"
                          className="w-full p-3 outline-none"
                        />
                      </div>
                      <div className="border-b-2 mb-5">
                        <label className="p-3 text-sm">Post Code</label>
                        <input
                          defaultValue="12345"
                          type="number"
                          className="w-full p-3 outline-none"
                        />
                      </div>
                    </div>
                    <button className="px-10 py-3 custom-background rounded-xl font-semibold text-white float-right hover:bg-blue-900">
                      Save
                    </button>
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