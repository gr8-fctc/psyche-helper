import Link from "next/link";
import Image from "next/image";

import bg from "@/public/bg.png";
export default function Page() {
  return (
    <>
      <div>
        <div className="">
          <div className="flex items-center space-x-2 pl-2 pr-2 bg-[#76C2CC] rounded h-16">
            <Link href="https://fct-club.com">
              <div>
                <Image
                  className="flex object-fit: contain"
                  src="/logo.png"
                  width={50}
                  height={50}
                  alt={"icon"}
                />
              </div>
            </Link>
            <Link href={"/"}>
              {/* <div className='rounded'>
            <a className="rounded-md flex hover:bg-pink-200 transition-all" href="/">Problems</a>
          </div> */}
            </Link>
            <Link
              href={"/"}
              className="rounded-md flex hover:bg-pink-200 transition-all h-fit"
            ></Link>
            <Link href={"/"}>
              {/* <div className="ltr absolute right-0 pr-2">
            <a className="flex" href='/'>Logged in as</a>
          </div> */}
            </Link>
            <div className="pr-3 ltr absolute right-0 ">
              <Link href="/login">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-all">
                  Sign in
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-3 transition-all">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
        className="grid h-full w-full place-items-end place-items-center justify-end border-2 border-solid p-16"
      >
        <div className="flex grid space-y-4">
          <h2 className="text-black text-xl">Login</h2>
          <label className="block text-gray-700 text-sm mb-2">Email</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>

          <label className="block text-gray-700 text-sm mb-2">Password</label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>

          <button
            type="button"
            className="bg-[#ff8c40] hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-md mb-2"
          >
            Login
          </button>

          <Link href="/register" legacyBehavior>
            <a className="text-black underline">Don't have an account?</a>
          </Link>
        </div>
      </div>
    </>
  );
}
