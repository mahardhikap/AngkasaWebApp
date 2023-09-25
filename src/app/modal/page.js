'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './mymodal.css';
import Link from 'next/link';
import Image from 'next/image';

const Modal = ({ buttonLabel }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="relative mx-auto container flex items-center justify-center w-full">
      <button onClick={openModal} className='font-bold hover:text-blue-900'>{buttonLabel || 'Open Modal'}</button>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 mt-16">
          <div className="absolute w-96 z-20 bg-white rounded-lg p-3 shadow-2xl">
            <div className="flex justify-end">
              <span onClick={closeModal} className="cursor-pointer p-1 w-fit rounded-lg bg-red-900 hover:bg-red-500 text-white">
                <FontAwesomeIcon icon={faXmark} width={25} />
              </span>
            </div>
            <div>Hey, Where you want to go?</div>
            <div className="flex flex-row items-center justify-between text-custom font-bold">
              <div>Recently Searched</div>
              <div>
                <FontAwesomeIcon icon={faChevronRight} width={20} />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <div>From</div>
                <div className='font-bold'>Medan</div>
                <div>Indonesia</div>
              </div>
              <div>
                <Image src="/arrowblue.svg" width={20} height={20} alt='logo-arrow-blue'/>
              </div>
              <div>
                <div>To</div>
                <div className='font-bold'>Tokyo</div>
                <div>Japan</div>
              </div>
            </div>
            <div className="flex items-center flex-row justify-between">
              <div className="background-custom rounded-lg flex items-center p-3 justify-center gap-3">
                <div><Image src={'/small_white_plane.svg'} width={20} height={20} alt='small-white-plane'/></div>
                <div className='text-white font-medium'>One Way</div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center p-3 justify-center gap-3">
                <div><Image src={'/small_reverse_logo.svg'} width={20} height={20} alt='small-reverse-logo'/></div>
                <div className='font-medium'>Round Trip</div>
              </div>
            </div>
            <div>Departure</div>
            <div className="flex flex-row items-center justify-between border-2 p-3 rounded-lg">
              <div className='font-semibold'>Monday, 20 July 2020</div>
              <div><FontAwesomeIcon icon={faChevronRight} width={20} color='#2395FF'/></div>
            </div>
            <div>How many person?</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center p-3 rounded-lg border-2 gap-6">
                <div className='font-semibold'>2 Child</div>
                <div><FontAwesomeIcon icon={faChevronRight} width={20} color='#2395FF'/></div>
              </div>
              <div className="flex items-center p-3 rounded-lg border-2 gap-6">
                <div className='font-semibold'>4 Adult</div>
                <div><FontAwesomeIcon icon={faChevronRight} width={20} color='#2395FF'/></div>
              </div>
            </div>
            <div>Which class do you want?</div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  id="economy"
                  className="peer/draft"
                  type="radio"
                  name="status"
                />
                <label
                  for="economy"
                  className="peer-checked/draft:text-sky-500"
                >
                  Economy
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="business"
                  className="peer/draft"
                  type="radio"
                  name="status"
                />
                <label
                  for="business"
                  className="peer-checked/draft:text-sky-500"
                >
                  Business
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="firstclass"
                  className="peer/draft"
                  type="radio"
                  name="status"
                />
                <label
                  for="firstclass"
                  className="peer-checked/draft:text-sky-500"
                >
                  First Class
                </label>
              </div>
            </div>
            <Link href="/ticket">
              <div className="flex flex-row items-center gap-10 p-3 justify-center background-custom rounded-lg mt-4 hover:bg-blue-600 text-white font-bold">
                <div>Search Flight</div>
                <div><Image src='/right_arrow_white.svg' width={30} height={30} alt='arrow-right'/></div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
