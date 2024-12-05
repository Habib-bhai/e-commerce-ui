import Image from 'next/image'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {
    return (
        <div className='flex justify-center items-center flex-col w-screen '>

            <div className='w-full hidden lg:flex justify-evenly md:justify-center items-center relative bg-black h-12 text-white text-center'>
                <div className='flex  md:text-sm lg:text-base  justify-center  items-center gap-5'>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <h2 className='font-semibold underline'>ShopNow</h2>
                </div>

                <div className='hidden  absolute md:right-10 lg:right-20 text-white  lg:flex justify-center items-center gap-2 '>
                    <p>English</p>
                    ^
                </div>
            </div>

            <div className='flex justify-evenly items-center w-full border-b h-24 border-gray-700'>
                <Image src={"/images/navbar/Logo.png"} alt='logo' height={150} width={200} className=' object-contain w-[150px] h-[80px] lg:w-[200px] lg:h-[150px]' />

                <div className='hidden lg:flex justify-center items-center gap-10'>
                    <p className='text-lg'> Home</p>
                    <p className='text-lg'> Contact</p>
                    <p className='text-lg'> About</p>
                    <p className='text-lg'> SignUp</p>
                </div>

                <div className='flex justify-center items-center gap-8 '>

                    <div className='p-3 w-[243px] h-[38px] hidden lg:flex justify-evenly items-center  bg-gray-100'>
                        <input type="text" placeholder='what are you looking for?' className=' bg-gray-100 h-full outline-none border-none text-sm font-sans' />
                        <Image src={"/images/navbar/component.svg"} alt='search icon' height={30} width={30} className='' />
                    </div>

                    <div className='hidden lg:flex justify-center items-center gap-5'>
                        <Image src={"/images/navbar/Wishlist.svg"} alt='wishlist' height={40} width={40} />
                        <Image src={"/images/navbar/Cart.svg"} alt='wishlist' height={40} width={40} />
                    </div>

                    <Image src={"/images/navbar/Cart.svg"} alt='cart' height={40} width={40} className='block lg:hidden'/>
                    <DropdownMenu >
                        <DropdownMenuTrigger className='relative '>
                            <Image src={"/images/navbar/user.png"} alt='user' height={40} width={40} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='absolute -top-1 left-[-13rem] flex flex-col justify-center items-start pl-2 w-[224px] h-[208px] bg-gray-600/60 rounded-none backdrop-blur-md text-white'>

                            <DropdownMenuItem className='hover:bg-transparent'>
                                <div className=' flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/user.svg"} alt='user' height={30} width={30} />
                                    <p> Manage My Account</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/icon-mallbag.svg"} alt='user' height={25} width={25} />
                                    <p>My Order</p>
                                </div>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/icon-cancel.svg"} alt='user' height={25} width={25} />
                                    <p>My Cancellations</p>
                                </div>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/icon-Reviews.svg"} alt='user' height={30} width={30} />
                                    <p>My Reviews</p>
                                </div>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/icon-logout.svg"} alt='user' height={30} width={30} />
                                    <p>Logout</p>
                                </div>

                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>



                    <Sheet>
                        <SheetTrigger>
                            <Image src={"/images/navbar/menu.svg"} alt='hamburger' height={40} width={40} className='block lg:hidden' />
                        </SheetTrigger>
                        <SheetContent className='w-screen bg-gray-700 h-screen flex flex-col justify-center items-center'>
                                    <div className='absolute top-20 w-[280px] h-[58px] flex justify-evenly items-center rounded-lg bg-gray-100'>

                                        <input type="text" placeholder='what are you looking for?' className='bg-gray-100  h-full outline-none border-none text-lg font-sans' />
                                        <Image src={"/images/navbar/component.svg"} alt='search icon' height={30} width={30}  />
                                    </div>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Home</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Contact</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>About</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Signup</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Wish List</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Wish List</Link>
                                    
                            
                            </SheetContent>
                    </Sheet>

                </div>

            </div>
        </div>
    )
}
