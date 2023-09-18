import Image from 'next/image';
import './register.css';
import Link from 'next/link';

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
          />
          <div className="my-10 sm:my-40">
            <h1 className="font-semibold text-3xl">Register</h1>
            <div className="mb-4 border-b-2">
              <input
                className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4 border-b-2">
              <input
                className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 border-b-2">
              <input
                className="w-full px-3 py-4 rounded-md bg-transparent outline-none	"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="rounded-md color-button-register w-full p-4 text-white font-bold">
              Sign Up
            </button>
            <div className="mt-2 mb-10">
              <input type="checkbox" className="default:ring-2" />
              Accept terms and condition
            </div>
            <div className="border-t-2 my-5">
              <p className="text-center my-3">Already have an account?</p>
            </div>
            <Link href='/login'>
              <button className="rounded-md border-button-login border-solid border-2 w-full p-4 font-bold">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
