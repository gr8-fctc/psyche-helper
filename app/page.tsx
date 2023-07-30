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
        className="grid h-full w-full place-items-center justify-end border-2 border-solid p-16"
      >
        <div className="flex grid space-y-4">
          <div>
            <div className="place-items-center">
              <a className="text-blue-400 text-4xl text-center pl-[130px] pb-[px]">
                PsycheHelper
              </a>
            </div>
            <div className="pt-[20px]">
              <a className="text-black text-xl">
                Guiding you towards the path to better mental health
              </a>
            </div>

            <div className="">
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>

            <div>
              <Link href="/" legacyBehavior>
                <a className="text-blue-300 underline text-lg pl-[160px]">
                  Read more about us
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="grid place-items-center mt-20">
        <a className="pl-5 text-blue-400 font-bold text-5xl">
          What is PsycheHelper?
        </a>
      </div>

      <div className="grid place-items-start mt-5">
        <a className="pl-10 text-blue-400 text-2xl font-light">
          PsycheHelper is an app designed to help users <br></br> evaluate their
          mental wellbeing based on four indexes:
          <br></br>
          <br></br>* CWI: Cognitive Wellbeing Index
          <br></br>* SWI: Social Wellbeing Index
          <br></br>* EWI: Emotional Wellbeing Index
          <br></br>* PWI: Physical Wellbeing Index
          <br></br>
          <br></br>
          With PsycheHelper, you can track your mental health status <br></br>
          just by answering a couple of simple questions every day.
        </a>
      </div>

      <div className="grid place-items-center bg-[#76c2cc] p-5 mt-5">
        <a className="text-3xl">
          Be on track towards better mental health with
        </a>
        <a className="text-5xl text-amber-500 mt-2">PsycheHelper.</a>
        <Link href="/register">
          <button className="bg-amber-600 hover:bg-blue-500 text-black hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-3 transition-all mt-3">
            Sign up
          </button>
        </Link>
      </div>
    </>
  );
}
