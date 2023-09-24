import Image from 'next/image';
import './forgot.css';

export default function Register() {
  return (
    <div className="container mx-auto flex flex-wrap h-screen">
      <div className="flex-auto w-full sm:w-1/3 md:w-2/5 lg:w-3/5 color-login">
        <div className="flex justify-center items-center h-full">
          <Image
            className="sm:w-4/5 md:w-3/5 lg:w-3/5 my-screen"
            src="/illustration.png"
            alt="Angkasa-Logo"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex-auto w-full sm:w-2/3 md:w-3/5 lg:w-2/5 flex flex-col justify-center">
        <div className="w-4/5 mx-auto">
          <Image
            src="/Group_28.svg"
            width={200}
            height={100}
            className="hidden sm:inline md:inline lg:inlin mt-2"
            alt='image'
          />
          <div className="my-10 sm:my-40">
            <h1 className="font-semibold text-3xl">Forgot Password</h1>
            <div className="mb-4 border-b-2">
              <input
                className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                type="email"
                placeholder="Email"
              />
            </div>
            <button className="rounded-md color-button-forgot border-solid border-2 w-full p-4 font-bold text-white">
              Send
            </button>
            <div className="my-5">
              <p className="text-center my-3">You will get message soon on your email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}