import './footer.css';

export default function Footer() {
  return (
    <>
      <div className="footer-design bg-white">
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 container mx-auto">
          <div className='p-5'>
            <img src="/Group_28.svg" />
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
            <img src='/logo_download.png' className='mt-10'/>
          </div>
          <div className='p-5'>
            <p className='font-bold'>Follow Us</p>
            <div className='flex gap-3 mt-10'>
                <img src='/facebook.svg'/>
                <img src='/twitter.svg'/>
                <img src='/instagram.svg'/>
                <img src='/youtube.svg'/>
            </div>
            <img src='/location_jakarta.svg' className='mt-44'/>
          </div>
        </div>
      </div>
    </>
  );
}
