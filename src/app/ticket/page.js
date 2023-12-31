'use client';
import './ticket.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import LoginNavbar from '@/app/login-navbar/page';
import Footer from '@/app/footer/page';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function Ticket() {
  const [loading, setLoading] = useState(true);
  const [transitOpen, setTransitOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [departureOpen, setDepartureOpen] = useState(false);
  const [arrivedOpen, setArrivedOpen] = useState(false);
  const [airlinesOpen, setAirlinesOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState(null);
  const [reqFacility, setReqFacility] = useState('');
  const [reqAirline, setReqAirline] = useState('');
  const [reqMinPrice, setReqMinPrice] = useState([0, 1000]);
  const facilitiesData = [
    { name: 'baggage', image: '/logo_bag.svg' },
    { name: 'meal', image: '/logo_food.svg' },
    { name: 'wifi', image: '/logo_wifi.svg' },
  ];

  const getFlightMain = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/airlines/flight-all`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setData(response.data.data);
      setLoading(false);
      toast.success('Get list flight success!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Get list flight failed');
    }
  };

  const getFilteredFlight = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/airlines/flight?facilities=${reqFacility}&airlineId=${reqAirline}&minPrice=${reqMinPrice[0]}&maxPrice=${reqMinPrice[1]}`
      );
      setFilter(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const NavbarHandle = () => {
    if (!token) {
      return <Navbar />;
    } else {
      return <LoginNavbar />;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('access_token'));
    }
    getFlightMain();
  }, []);

  useEffect(() => {
    getFilteredFlight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reqFacility, reqAirline, reqMinPrice]);

  const resetButton = () => {
    setReqAirline('');
    setReqFacility('');
    setReqMinPrice([0,1000]);
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

  // const handleSliderChange = (e) => {
  //   const newValue = parseFloat(e.target.value);
  //   setReqMinPrice(newValue);
  // };

  return (
    <>
      <div className="w-11/12 container mx-auto">{NavbarHandle()}</div>
      <div className="bg-slate-100 container mx-auto">
        <div className="background-ticket-header container w-full mx-auto rounded-b-3xl relative">
          <Image
            src="/logo_plane_blue.png"
            className="absolute z-0"
            width={220}
            height={220}
            alt="plane-blue"
          />
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
                  <Image
                    src="/arrowdestination.svg"
                    width={20}
                    height={20}
                    alt="arrow-destination"
                  />
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
              <div className="font-bold flex justify-between cursor-pointer">
                <div>Filter</div>
                <div
                  onClick={() => resetButton()}
                  className="color-ticket hover:text-blue-900"
                >
                  Reset
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 rounded-lg bg-white p-3">
                <div className="col-span-3 cursor-pointer">
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
                      <input
                        type="checkbox"
                        className="ring-2"
                        onClick={() => setReqFacility(1)}
                        checked={reqFacility === 1}
                      />{' '}
                      Luggage
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="ring-2"
                        onClick={() => setReqFacility(2)}
                        checked={reqFacility === 2}
                      />{' '}
                      In-Flight Meal
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="ring-2"
                        onClick={() => setReqFacility(3)}
                        checked={reqFacility === 3}
                      />{' '}
                      Wi-fi
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
                      <input
                        type="checkbox"
                        className="ring-2"
                        onClick={() => setReqAirline(2)}
                        checked={reqAirline === 2}
                      />{' '}
                      Garuda Indonesia
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="ring-2"
                        onClick={() => setReqAirline(4)}
                        checked={reqAirline === 4}
                      />{' '}
                      Air Asia
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="ring-2"
                        onClick={() => setReqAirline(3)}
                        checked={reqAirline === 3}
                      />{' '}
                      Lion Air
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="ring-2"
                        onClick={() => setReqAirline(5)}
                        checked={reqAirline === 5}
                      />{' '}
                      City Link
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="ring-2"
                        onClick={() => setReqAirline(1)}
                        checked={reqAirline === 1}
                      />{' '}
                      Singapore Airlines
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
                    <div className="flex flex-row justify-between">
                      <div>Min</div>
                      <div>Max</div>
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <div>${reqMinPrice[0]}</div>
                      <div>${reqMinPrice[1]}</div>
                    </div>
                    <RangeSlider
                      min={0}
                      max={1000}
                      value={reqMinPrice}
                      onInput={setReqMinPrice}
                    />
                  </details>
                </div>
              </div>
            </div>
            <div className="col-span-3 px-2">
              <div className="font-bold flex justify-between mt-10">
                <Link href="flight-detail">
                  <div>Select Ticket</div>
                </Link>
                <div className="color-ticket hover:text-blue-900 cursor-pointer">
                  Sort
                </div>
              </div>
              <section className="overflow-auto">
                {loading ? (
                  <div>Loading...</div>
                ) : filter ? (
                  filter?.map((item) => {
                    return (
                      <>
                        <div className="bg-white rounded-xl p-3 mt-4">
                          <div className="mt-5 flex flex-row items-center gap-x-3">
                            <Image
                              src={item.photo}
                              alt="Airplane"
                              className="w-6/12 md:w-3/12"
                              width={100}
                              height={100}
                            />
                            <p>{item.name}</p>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
                            <div className="col-span-1 flex flex-col">
                              <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-center">
                                  <div className="font-bold">
                                    {item.from.code}
                                  </div>
                                  <div>
                                    {new Date(`${item.takeoff}`).toLocaleString(
                                      'en-US',
                                      {
                                        timeZone: 'Asia/Jakarta',
                                        hour12: false,
                                        hour: '2-digit',
                                        minute: '2-digit',
                                      }
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <Image
                                    src="/small_plane_logo.svg"
                                    width={20}
                                    height={20}
                                    alt="small-plane-logo"
                                  />
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="font-bold">
                                    {item.to.code}
                                  </div>
                                  <div>
                                    {new Date(`${item.landing}`).toLocaleString(
                                      'en-US',
                                      {
                                        timeZone: 'Asia/Jakarta',
                                        hour12: false,
                                        hour: '2-digit',
                                        minute: '2-digit',
                                      }
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="color-ticket flex flex-row justify-center items-center gap-x-3">
                                <div className="font-extrabold">
                                  View Detail
                                </div>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faChevronDown}
                                    width={15}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                              <div className="text-center">
                                {item.interval_time}
                              </div>
                              <div>(1 transit)</div>
                            </div>
                            <div className="col-span-1 flex flex-row justify-evenly items-center">
                              {item?.facilities?.map((facility) => {
                                const matchingFacility = facilitiesData.find(
                                  (data) => data.name === facility
                                );

                                return (
                                  <div key={facility}>
                                    {matchingFacility && (
                                      <Image
                                        src={matchingFacility.image}
                                        alt={facility}
                                        width={17}
                                        height={17}
                                      />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                              <div className="font-bold">
                                <span className="color-ticket">
                                  ${item.price}
                                </span>
                                /pax
                              </div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                              <Link href={`ticket/${item.code}`}>
                                <button className="px-10 py-3 text-white button-ticket rounded-xl">
                                  Select
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  data?.tickets?.map((item) => {
                    return (
                      <>
                        <div className="bg-white rounded-xl p-3 mt-4">
                          <div className="mt-5 flex flex-row items-center gap-x-3">
                            <Image
                              src={item.photo}
                              alt="Airplane"
                              className="w-6/12 md:w-3/12"
                              width={100}
                              height={100}
                            />
                            <p>{item.name}</p>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
                            <div className="col-span-1 flex flex-col">
                              <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-center">
                                  <div className="font-bold">
                                    {item.from.code}
                                  </div>
                                  <div>
                                    {new Date(`${item.takeoff}`).toLocaleString(
                                      'en-US',
                                      {
                                        timeZone: 'Asia/Jakarta',
                                        hour12: false,
                                        hour: '2-digit',
                                        minute: '2-digit',
                                      }
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <Image
                                    src="/small_plane_logo.svg"
                                    width={20}
                                    height={20}
                                    alt="small-plane-logo"
                                  />
                                </div>
                                <div className="flex flex-col items-center">
                                  <div className="font-bold">
                                    {item.to.code}
                                  </div>
                                  <div>
                                    {new Date(`${item.landing}`).toLocaleString(
                                      'en-US',
                                      {
                                        timeZone: 'Asia/Jakarta',
                                        hour12: false,
                                        hour: '2-digit',
                                        minute: '2-digit',
                                      }
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="color-ticket flex flex-row justify-center items-center gap-x-3">
                                <div className="font-extrabold">
                                  View Detail
                                </div>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faChevronDown}
                                    width={15}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                              <div className="text-center">
                                {item.interval_time}
                              </div>
                              <div>(1 transit)</div>
                            </div>
                            <div className="col-span-1 flex flex-row justify-evenly items-center">
                              {item.facilities.map((facility) => {
                                const matchingFacility = facilitiesData.find(
                                  (data) => data.name === facility
                                );

                                return (
                                  <div key={facility}>
                                    {matchingFacility && (
                                      <Image
                                        src={matchingFacility.image}
                                        alt={facility}
                                        width={17}
                                        height={17}
                                      />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                              <div className="font-bold">
                                <span className="color-ticket">
                                  ${item.price}
                                </span>
                                /pax
                              </div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                              <Link href={`ticket/${item.code}`}>
                                <button className="px-10 py-3 text-white button-ticket rounded-xl">
                                  Select
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                )}
              </section>
            </div>
          </div>
        </div>
        <div className="footer-wrap mt-40">
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
