import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='px-20 py-20 bg-black grid gap-10  md:gap-14 grid-cols-1 min-[580px]:grid-cols-2 grid-rows-8   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-screen '>
      <div className='col-span-1 row-span-6 flex flex-col justify-center items-start  '>
        <div className='flex flex-col justify-center items-start gap-5 mb-2'>
          <h1 className='text-3xl font-semibold text-white' >Exclusive</h1>
          <h2 className='text-2xl font-medium text-gray-200'>Subscribe</h2>
          <p className='text-gray-200'>Get 10% off your first order</p>
        </div>

        <div className='w-[222px] h-[48px] flex justify-center items-center  border-[1px] border-white'>
          <input type="text" className='w-[180px] pl-3 text-gray-100/40 h-full outline-none border-none bg-transparent' placeholder='Enter your email' />
          <Image src={"/images/navbar/icon-send.svg"} alt='send' height={30} width={30} />
        </div>
      </div>


      <div className='col-span-1 row-span-6 flex flex-col justify-evenly items-start gap-3'>
        <h2 className='text-white text-2xl '>Support</h2>
        <p className='text-gray-100 w-[176px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh. </p>
        <p className='text-gray-100 '>exclusive@gmail.com</p>
        <p className='text-gray-100 '>+88015-88888-9999</p>

      </div>


      <div className='col-span-1 row-span-8 flex flex-col justify-evenly items-start '>
        <h2 className='text-white text-2xl mb-4 '>Account</h2>
        <p className='text-gray-100 mb-4'>My Account</p>
        <p className='text-gray-100 mb-4 '>Login / Register</p>
        <p className='text-gray-100 mb-4'>Cart</p>
        <p className='text-gray-100 mb-4'>Wishlist</p>
        <p className='text-gray-100 mb-4'>Shop</p>
      </div>

      <div className='col-span-1 row-span-7 flex flex-col justify-evenly items-start '>
        <h2 className='text-white text-2xl mb-4 '>Quick Link</h2>
        <p className='text-gray-100 mb-4'>Privacy Policy</p>
        <p className='text-gray-100 mb-4'>Terms Of Use</p>
        <p className='text-gray-100 mb-4'>FAQ</p>
        <p className='text-gray-100 mb-4'>Contact</p>

      </div>

      <div className='col-span-1 row-span-7 flex flex-col justify-center items-start'>
        <h2 className='text-white text-2xl mb-4 '>Download App</h2>
        <p className='text-gray-400 text-sm mb-4'>Save $3 with App New User Only</p>

        <div className='flex justify-center items-center gap-3'>

          <Image src={"/images/footer/Qr_Code.png"} alt='qr code' height={100} width={100} className='object-cover' />
          <div className='flex flex-col justify-evenly items-center h-full gap-2'>
            <Image src={"/images/footer/GooglePlay.png"} alt='google play' height={130} width={130} className='object-cover' />
            <Image src={"/images/footer/AppStore.png"} alt='App store' height={130} width={130} className='object-cover' />

          </div>

        </div>

        <div className='flex justify-evenly items-center w-full gap-10 mt-5'>

     <Image src={"/images/social_Icons/Icon-Facebook.png"} alt='fb' height={30} width={30}/> 

     <Image src={"/images/social_Icons/Icon-Twitter.png"} alt='X' height={30} width={30}/> 

     <Image src={"/images/social_Icons/Icon-instagram.png"} alt='insta' height={30} width={30}/> 

     <Image src={"/images/social_Icons/Icon-Linkedin.png"} alt='linkedin' height={30} width={30}/> 

        </div>

      </div>
    </div>
  )
}
