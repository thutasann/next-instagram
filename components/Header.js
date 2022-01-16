import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline";
import { HomeIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';


function Header() {

    const { data: session } = useSession();
    console.log(`session`, session);

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
                {/* left */}
                <div className="cursor-pointer hidden lg:inline-grid relative w-24">
                    <Image src="https://links.papareact.com/ocw" objectFit="contain" layout="fill"/>
                </div>

                <div className="cursor-pointer relative w-10 lg:hidden flex-shrink-0">
                    <Image src="https://links.papareact.com/jjm" objectFit="contain" layout="fill"/>
                </div>


                {/* Mid */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input 
                            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-gray-400 focus:border-gray-400 rounded-md" 
                            type="text" 
                            placeholder="Search" 
                        />  
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-8 md:hidden cursor-pointer" />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="rotate-45 navBtn" />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                    <img
                        className="h-10 rounded-full cursor-pointer" 
                        src={session.user.image}
                        alt={session.user.name}
                        title={session.user.name}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
