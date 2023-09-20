import './booking-pass.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/app/navbar/page';
import Footer from '@/app/footer/page';
export default function BookingPass() {
  return (
    <>
      <div className='w-11/12 container mx-auto'>
        <Navbar />
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
