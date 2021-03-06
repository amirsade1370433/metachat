import Image from 'next/image';
import React from 'react';
import {useMoralis} from 'react-moralis'
import {avatarimage} from './image'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'
function Header() {
    const {user} = useMoralis()
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-500 text-pink-500">
        <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
            <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                <Image layout='fill' objectFit='cover' className='rounded-full ' width={200} height={200} src={avatarimage}/>
            </div>
            <div className=" col-span-4 text-left lg:text-center">
                <div className="ease-in transition-all relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full hover:border-gray-500 hover:animate-pulse ">
                    <Avatar logoutOnPress/>
                </div>
                <h1 className='text-3xl'>
                    welcome to metaverse
                </h1>
                <h2 className='text-5xl font-bold truncate'>
                    {user.get('username')}
                </h2>
                <ChangeUsername/>
             </div>
        </div>
    </div>
    );
}

export default Header;
