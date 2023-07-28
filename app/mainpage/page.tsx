import Link from 'next/link'
import Image from 'next/image'

import bg from '@/public/homepage.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import mongoose from 'mongoose';
import UModel from "@/misc/models/User";

export async function POST() {
    
}

async function getUser(token: any) {

    const currentUser = await UModel.findOne({token})

    return currentUser.username;
}

export default async function Page() {
    return(
        <>
        <div>
        <div className="">
      <div className="flex items-center space-x-2 pl-2 pr-2 bg-[#76C2CC] rounded h-16">
        <Link href="https://fct-club.com">
        <div>
        <Image className="flex object-fit: contain"
          src='/logo.png'
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
        <Link href={"/"} className='rounded-md flex hover:bg-pink-200 transition-all h-fit'>
          
        </Link>
        <div className="ltr absolute right-0 pr-2">
        <a className="flex" href='/'>
            <div>
                <AccountCircleIcon>
                    
                </AccountCircleIcon>
            </div>
        </a>
        </div>

        <div className='pr-3 ltr absolute right-0 '>
        </div> 
        </div>
    </div>
        </div>
            <div style={{
                backgroundImage: `url(${bg.src})`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
            }}
            className="grid h-full w-full place-items-center justify-end border-2 border-solid p-16">
               
              <div>
              
              <div>
                <a className="text-blue-400 text-4xl">Welcome back!</a>
                <div>
                    <a className='text-blue-500 text-2xl'>Take 5 minutes to get to know your<br></br> mental health status</a>
                </div>
                <div>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdhNK2AI-0xeI3YrVKCrIMT-dzJTJgJ9b6QjdXcP8djjbBaJw/viewform" >
                        <button className="bg-amber-600 hover:bg-blue-500 text-black hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-3 transition-all mt-3">
                            Sign up
                        </button>
                    </Link>
                </div>
              </div>
              
              </div>
              
            </div>
        </>
    )
}