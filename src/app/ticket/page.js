'use client';
import './ticket.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import Link from 'next/link';

export default function Ticket() {
  const [rangeValue, setRangeValue] = useState([2, 20]);
  const [transitOpen, setTransitOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [departureOpen, setDepartureOpen] = useState(false);
  const [arrivedOpen, setArrivedOpen] = useState(false);
  const [airlinesOpen, setAirlinesOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);
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

  const transitToggle = () => {
    setTransitOpen(!transitOpen);
  };
  const facilitiesToggle = () => {
    setFacilitiesOpen(!facilitiesOpen);
  };
  const departureToggle = () => {
    setDepartureOpen(!departureOpen);
  };
  const arrivedToggle = () => {
    setArrivedOpen(!arrivedOpen);
  };
  const airlinesToggle = () => {
    setAirlinesOpen(!airlinesOpen);
  };
  const ticketToggle = () => {
    setTicketOpen(!ticketOpen);
  };

  const handleSliderChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setRangeValue([newValue, rangeValue[1]]);
  };

  return (
    <>
      <div className="w-11/12 container mx-auto">
        {NavbarHandle()}
      </div>
      <div className="bg-slate-100 container mx-auto">
        <div className="background-ticket-header container w-full mx-auto rounded-b-3xl relative">
          <img src="/logo_plane_blue.png" className="absolute z-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 py-10 z-10 w-full lg:w-10/12 container mx-auto text-white">
            <div className="z-10 p-3 grid grid-cols-3">
              <div className="col-span-3">
                <div className="flex justify-between font-medium">
                  <div>From</div>
                  <div>To</div>
                </div>
              </div>
              <div>
                <div className="font-extrabold">Medan (IDN)</div>
                <div>Monday, 20 July 20</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <img src="/arrowdestination.svg" />
                </div>
                <div>6 Passenger</div>
              </div>
              <div className="text-right">
                <div className="font-extrabold">Tokyo (JPN)</div>
                <div>Economy</div>
              </div>
            </div>
            <div className="flex justify-end items-center justify-center sm:justify-end p-3">
              <div className="font-bold">Change Search</div>
            </div>
          </div>
        </div>

        <div className="container w-11/12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4">
            <div className="col-span-1 mt-10 px-2">
              <div className="font-bold flex justify-between">
                <div>Filter</div>
                <div>Reset</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 rounded-lg bg-white p-3">
                <div className="col-span-3">
                  <details>
                    <summary
                      className="mb-2 font-bold flex justify-between items-center"
                      onClick={transitToggle}
                    >
                      <span>Transit</span>
                      <span className="color-ticket">
                        {transitOpen === false ? (
                          <FontAwesomeIcon icon={faChevronDown} width={20} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronUp} width={20} />
                        )}
                      </span>
                    </summary>
                    <div>
                      <input type="checkbox" className="ring-2" /> Direct
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> Transit
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> Transit 2+
                    </div>
                  </details>

                  <hr className="my-2" />

                  <details>
                    <summary
                      className="mb-2 font-bold flex justify-between items-center"
                      onClick={facilitiesToggle}
                    >
                      <span>Facilities</span>
                      <span className="color-ticket">
                        {facilitiesOpen === false ? (
                          <FontAwesomeIcon icon={faChevronDown} width={20} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronUp} width={20} />
                        )}
                      </span>
                    </summary>
                    <div>
                      <input type="checkbox" className="ring-2" /> Luggage
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> In-Flight
                      Meal
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> Wi-fi
                    </div>
                  </details>

                  <hr className="my-2" />

                  <details>
                    <summary
                      className="mb-2 font-bold flex justify-between items-center"
                      onClick={departureToggle}
                    >
                      <span>Departure Time</span>
                      <span className="color-ticket">
                        {departureOpen === false ? (
                          <FontAwesomeIcon icon={faChevronDown} width={20} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronUp} width={20} />
                        )}
                      </span>
                    </summary>
                    <div>
                      <input type="checkbox" className="ring-2" /> 00:00 - 06:00
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> 06:00 - 12:00
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> 12:00 - 18:00
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> 18:00 - 24:00
                    </div>
                  </details>

                  <hr className="my-2" />

                  <details>
                    <summary
                      className="mb-2 font-bold flex justify-between items-center"
                      onClick={arrivedToggle}
                    >
                      <span>Time Arrived</span>
                      <span className="color-ticket">
                        {arrivedOpen === false ? (
                          <FontAwesomeIcon icon={faChevronDown} width={20} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronUp} width={20} />
                        )}
                      </span>
                    </summary>
                    <div>
                      <input type="checkbox" className="ring-2" /> 00:00 - 06:00
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> 06:00 - 12:00
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> 12:00 - 18:00
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> 18:00 - 24:00
                    </div>
                  </details>

                  <hr className="my-2" />

                  <details>
                    <summary
                      className="mb-2 font-bold flex justify-between items-center"
                      onClick={airlinesToggle}
                    >
                      <span>Airlines</span>
                      <span className="color-ticket">
                        {airlinesOpen === false ? (
                          <FontAwesomeIcon icon={faChevronDown} width={20} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronUp} width={20} />
                        )}
                      </span>
                    </summary>
                    <div>
                      <input type="checkbox" className="ring-2" /> Garuda
                      Indonesia
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> Air Asia
                    </div>
                    <div>
                      <input type="checkbox" className="ring-2" /> Lion Air
                    </div>
                  </details>

                  <hr className="my-2" />

                  <details>
                    <summary
                      className="mb-2 font-bold flex justify-between items-center"
                      onClick={ticketToggle}
                    >
                      <span>Ticket</span>
                      <span className="color-ticket">
                        {ticketOpen === false ? (
                          <FontAwesomeIcon icon={faChevronDown} width={20} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronUp} width={20} />
                        )}
                      </span>
                    </summary>
                    <div className="range-slider">
                      <input
                        type="range"
                        min={2}
                        max={20}
                        step={0.01}
                        value={rangeValue[0]}
                        onChange={handleSliderChange}
                      />
                    </div>
                    <div>
                      Min Price: ${rangeValue[0].toFixed(2)} - Max Price: $
                      {rangeValue[1].toFixed(2)}
                    </div>
                  </details>
                </div>
              </div>
            </div>
            <div className="col-span-3 px-2">
              <div className="font-bold flex justify-between mt-10">
                <Link href='flight-detail'>
                  <div>Select Ticket</div>
                </Link>
                <div>Sort by</div>
              </div>
              <section className="overflow-auto">
                <div className="bg-white rounded-xl p-3 mt-4">
                  <div className="mt-5 flex flex-row items-center gap-x-3">
                    <img src="/logo_garuda.png" alt="Airplane" />
                    <p>Garuda Indonesia</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
                    <div className="col-span-1 flex flex-col">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-center">
                          <div className="font-bold">IDN</div>
                          <div>12:33</div>
                        </div>
                        <div>
                          <img src="/small_plane_logo.svg" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="font-bold">JPN</div>
                          <div>15:21</div>
                        </div>
                      </div>
                      <div className="color-ticket flex flex-row justify-center items-center gap-x-3">
                        <div className="font-extrabold">View Detail</div>
                        <div>
                          <FontAwesomeIcon icon={faChevronDown} width={15} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="text-center">3 hours 11 minutes</div>
                      <div>(1 transit)</div>
                    </div>
                    <div className="col-span-1 flex flex-row justify-evenly items-center">
                      <div>
                        <img src="/logo_bag.svg" />
                      </div>
                      <div>
                        <img src="/logo_food.svg" />
                      </div>
                      <div>
                        <img src="/logo_wifi.svg" />
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="font-bold">
                        <span className="color-ticket">$214,00</span>/pax
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <button className="px-10 py-3 text-white button-ticket rounded-xl">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 mt-4">
                  <div className="mt-5 flex flex-row items-center gap-x-3">
                    <img src="/logo_garuda.png" alt="Airplane" />
                    <p>Garuda Indonesia</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
                    <div className="col-span-1 flex flex-col">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-center">
                          <div className="font-bold">IDN</div>
                          <div>12:33</div>
                        </div>
                        <div>
                          <img src="/small_plane_logo.svg" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="font-bold">JPN</div>
                          <div>15:21</div>
                        </div>
                      </div>
                      <div className="color-ticket flex flex-row justify-center items-center gap-x-3">
                        <div className="font-extrabold">View Detail</div>
                        <div>
                          <FontAwesomeIcon icon={faChevronDown} width={15} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="text-center">3 hours 11 minutes</div>
                      <div>(1 transit)</div>
                    </div>
                    <div className="col-span-1 flex flex-row justify-evenly items-center">
                      <div>
                        <img src="/logo_bag.svg" />
                      </div>
                      <div>
                        <img src="/logo_food.svg" />
                      </div>
                      <div>
                        <img src="/logo_wifi.svg" />
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="font-bold">
                        <span className="color-ticket">$214,00</span>/pax
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <button className="px-10 py-3 text-white button-ticket rounded-xl">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 mt-4">
                  <div className="mt-5 flex flex-row items-center gap-x-3">
                    <img src="/logo_garuda.png" alt="Airplane" />
                    <p>Garuda Indonesia</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
                    <div className="col-span-1 flex flex-col">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-center">
                          <div className="font-bold">IDN</div>
                          <div>12:33</div>
                        </div>
                        <div>
                          <img src="/small_plane_logo.svg" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="font-bold">JPN</div>
                          <div>15:21</div>
                        </div>
                      </div>
                      <div className="color-ticket flex flex-row justify-center items-center gap-x-3">
                        <div className="font-extrabold">View Detail</div>
                        <div>
                          <FontAwesomeIcon icon={faChevronDown} width={15} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="text-center">3 hours 11 minutes</div>
                      <div>(1 transit)</div>
                    </div>
                    <div className="col-span-1 flex flex-row justify-evenly items-center">
                      <div>
                        <img src="/logo_bag.svg" />
                      </div>
                      <div>
                        <img src="/logo_food.svg" />
                      </div>
                      <div>
                        <img src="/logo_wifi.svg" />
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="font-bold">
                        <span className="color-ticket">$214,00</span>/pax
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <button className="px-10 py-3 text-white button-ticket rounded-xl">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 mt-4">
                  <div className="mt-5 flex flex-row items-center gap-x-3">
                    <img src="/logo_garuda.png" alt="Airplane" />
                    <p>Garuda Indonesia</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
                    <div className="col-span-1 flex flex-col">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-center">
                          <div className="font-bold">IDN</div>
                          <div>12:33</div>
                        </div>
                        <div>
                          <img src="/small_plane_logo.svg" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="font-bold">JPN</div>
                          <div>15:21</div>
                        </div>
                      </div>
                      <div className="color-ticket flex flex-row justify-center items-center gap-x-3">
                        <div className="font-extrabold">View Detail</div>
                        <div>
                          <FontAwesomeIcon icon={faChevronDown} width={15} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="text-center">3 hours 11 minutes</div>
                      <div>(1 transit)</div>
                    </div>
                    <div className="col-span-1 flex flex-row justify-evenly items-center">
                      <div>
                        <img src="/logo_bag.svg" />
                      </div>
                      <div>
                        <img src="/logo_food.svg" />
                      </div>
                      <div>
                        <img src="/logo_wifi.svg" />
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="font-bold">
                        <span className="color-ticket">$214,00</span>/pax
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <button className="px-10 py-3 text-white button-ticket rounded-xl">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 mt-4">
                  <div className="mt-5 flex flex-row items-center gap-x-3">
                    <img src="/logo_garuda.png" alt="Airplane" />
                    <p>Garuda Indonesia</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
                    <div className="col-span-1 flex flex-col">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-center">
                          <div className="font-bold">IDN</div>
                          <div>12:33</div>
                        </div>
                        <div>
                          <img src="/small_plane_logo.svg" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="font-bold">JPN</div>
                          <div>15:21</div>
                        </div>
                      </div>
                      <div className="color-ticket flex flex-row justify-center items-center gap-x-3">
                        <div className="font-extrabold">View Detail</div>
                        <div>
                          <FontAwesomeIcon icon={faChevronDown} width={15} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="text-center">3 hours 11 minutes</div>
                      <div>(1 transit)</div>
                    </div>
                    <div className="col-span-1 flex flex-row justify-evenly items-center">
                      <div>
                        <img src="/logo_bag.svg" />
                      </div>
                      <div>
                        <img src="/logo_food.svg" />
                      </div>
                      <div>
                        <img src="/logo_wifi.svg" />
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="font-bold">
                        <span className="color-ticket">$214,00</span>/pax
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <button className="px-10 py-3 text-white button-ticket rounded-xl">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 mt-4">
                  <div className="mt-5 flex flex-row items-center gap-x-3">
                    <img src="/logo_garuda.png" alt="Airplane" />
                    <p>Garuda Indonesia</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
                    <div className="col-span-1 flex flex-col">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-center">
                          <div className="font-bold">IDN</div>
                          <div>12:33</div>
                        </div>
                        <div>
                          <img src="/small_plane_logo.svg" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="font-bold">JPN</div>
                          <div>15:21</div>
                        </div>
                      </div>
                      <div className="color-ticket flex flex-row justify-center items-center gap-x-3">
                        <div className="font-extrabold">View Detail</div>
                        <div>
                          <FontAwesomeIcon icon={faChevronDown} width={15} />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="text-center">3 hours 11 minutes</div>
                      <div>(1 transit)</div>
                    </div>
                    <div className="col-span-1 flex flex-row justify-evenly items-center">
                      <div>
                        <img src="/logo_bag.svg" />
                      </div>
                      <div>
                        <img src="/logo_food.svg" />
                      </div>
                      <div>
                        <img src="/logo_wifi.svg" />
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <div className="font-bold">
                        <span className="color-ticket">$214,00</span>/pax
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <button className="px-10 py-3 text-white button-ticket rounded-xl">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="footer-wrap mt-40">
          <Footer />
        </div>
      </div>
    </>
  );
}
