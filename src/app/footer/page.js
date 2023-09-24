import './footer.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="footer-design bg-white">
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 container mx-auto">
          <div className='p-5'>
            <Image src="/Group_28.svg" width={180} height={180} alt='logo-ankasa'/>
            <p className='mt-10'>
              Find your Flight and explore the world with us. We will take care
              of the rest
            </p>
            <p className='mt-32'>© Ankasa.  All Rights Reserved.</p>
          </div>
          <div className='p-5'>
            <p className='font-bold'>Features</p>
            <ul className='flex flex-col gap-3 mt-10'>
                <li>
                    Find Ticket
                </li>
                <li>
                    My Booking
                </li>
                <li>
                    Chat
                </li>
                <li>
                    Notification
                </li>
            </ul>
          </div>
          <div className='p-5'>
            <p className='font-bold'>Download Angkasa app</p>
            <Image src='/logo_download.png' width={180} height={180} alt='logo-download' className='mt-10'/>
          </div>
          <div className='p-5'>
            <p className='font-bold'>Follow Us</p>
            <div className='flex gap-3 mt-10'>
                <Image src='/facebook.svg' width={15} height={15} alt='logo-fb'/>
                <Image src='/twitter.svg' width={25} height={25} alt='logo-twitter'/>
                <Image src='/instagram.svg' width={25} height={25} alt='logo-instagram'/>
                <Image src='/youtube.svg' width={25} height={25} alt='logo-youtube'/>
            </div>
            <Image src='/location_jakarta.svg' width={150} height={150} alt='logo-location' className='mt-44'/>
          </div>
        </div>
      </div>
    </>
  );
}
