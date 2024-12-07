import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">

      <div className="w-screen h-[21px] my-16 flex gap-2 ml-[10%]">
        <p className="text-gray-300">Home </p>
        /
        <p >About</p>
      </div>


      {/* our story */}
      <div className="flex justify-center items-center w-screen mb-20 flex-wrap">
        <div className="flex flex-col justify-center items-start gap-9">
          <h1 className="text-5xl font-semibold">Our Story</h1>
          <p className="text-base w-[520px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

          <p className="text-base w-[520px]">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <Image src={"/images/about/two-women.png"} alt="hero image" height={837} width={609} className="mt-10 min-[1130px]:mt-0" />
      </div>

      {/*Achievements */}
      <div className="flex justify-center items-center gap-5 w-screen mb-20 flex-wrap">

        {/*sellers  */}
        <div className="rounded-sm border-gray-400 border-[1px] w-[270px] h-[230px] flex justify-center items-center flex-col">
          {/* circlular logo */}
          <div className="rounded-full w-[80px] h-[80px] bg-[#c1c0c1] flex justify-center items-center">
            <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-black">
              <Image src={"/images/about/icons/icon_shop.png"} alt="shop" height={40} width={40} />
            </div>
          </div>
          {/* heading and other content */}
          <h1 className="text-2xl font-semibold mt-5 mb-3">10.5k</h1>
          <p className="text-sm">Sallers active our site</p>

        </div>

        {/* sales */}
        <div className="shadow rounded-sm border-gray-400 bg-[#DB4444] border-[1px] w-[270px] h-[230px] flex justify-center items-center flex-col text-white">
          {/* circlular logo */}
          <div className="rounded-full w-[80px] h-[80px] bg-white/40 flex justify-center items-center">
            <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-white">
              <Image src={"/images/about/icons/Icon-Sale.png"} alt="shop" height={40} width={40} />
            </div>
          </div>
          {/* heading and other content */}
          <h1 className="text-2xl font-semibold mt-5 mb-3">33k</h1>
          <p className="text-sm">Mopnthly Produduct Sale</p>

        </div>

        {/* customers */}
        <div className="rounded-sm border-gray-400 border-[1px] w-[270px] h-[230px] flex justify-center items-center flex-col">
          {/* circlular logo */}
          <div className="rounded-full w-[80px] h-[80px] bg-[#c1c0c1] flex justify-center items-center">
            <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-black">
              <Image src={"/images/about/icons/Icon-Shopping-bag.png"} alt="shop" height={40} width={40} />
            </div>
          </div>
          {/* heading and other content */}
          <h1 className="text-2xl font-semibold mt-5 mb-3">45.5k</h1>
          <p className="text-sm">Customer active in our site</p>

        </div>

        {/* Annual gross sales  */}
        <div className="rounded-sm border-gray-400 border-[1px] w-[270px] h-[230px] flex justify-center items-center flex-col">
          {/* circlular logo */}
          <div className="rounded-full w-[80px] h-[80px] bg-[#c1c0c1] flex justify-center items-center">
            <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-black">
              <Image src={"/images/about/icons/Icon-Moneybag.png"} alt="shop" height={40} width={40} />
            </div>
          </div>
          {/* heading and other content */}
          <h1 className="text-2xl font-semibold mt-5 mb-3">25k</h1>
          <p className="text-sm">Anual gross sale in our site</p>

        </div>

      </div>

      {/* founders */}
      <div className="mb-20 w-screen flex justify-evenly items-center flex-wrap">
        {/* card1 */}
        <div className="flex justify-center items-start flex-col w-[370px] h-[564px]">
          <div className="w-full h-[430px] bg-[#fafafa] flex justify-center items-center">
            <Image src={"/images/about/image-46.png"} alt="tom cruise" height={250} width={250} />
          </div>
          <h1 className="text-2xl font-semibold mt-5 mb-2">Tom Cruise</h1>
          <p className="text-sm mb-3">Founder & Chairman</p>

          <div className="flex justify-center items-center gap-3">
            <Image src={"/images/about/icons/Icon-Twitter.svg"} alt="twitter" height={20} width={20} />
            <Image src={"/images/about/icons/Icon-instagram.svg"} alt="twitter" height={20} width={20} />
            <Image src={"/images/about/icons/Icon-Linkedin.svg"} alt="twitter" height={20} width={20} />

          </div>

        </div>

        {/* card2*/}
        <div className="flex justify-center items-start flex-col w-[370px] h-[564px]">
          <div className="w-full h-[430px] bg-[#fafafa] flex justify-center items-center">
            <Image src={"/images/about/image-51.png"} alt="tom cruise" height={250} width={250} />
          </div>
          <h1 className="text-2xl font-semibold mt-5 mb-2">Emma Watson</h1>
          <p className="text-sm mb-3">Managing Director</p>

          <div className="flex justify-center items-center gap-3">
            <Image src={"/images/about/icons/Icon-Twitter.svg"} alt="twitter" height={20} width={20} />
            <Image src={"/images/about/icons/Icon-instagram.svg"} alt="twitter" height={20} width={20} />
            <Image src={"/images/about/icons/Icon-Linkedin.svg"} alt="twitter" height={20} width={20} />

          </div>

        </div>

        {/* card3 */}
        <div className="flex justify-center items-start flex-col w-[370px] h-[564px]">
          <div className="w-full h-[430px] bg-[#fafafa] flex justify-center items-center">
            <Image src={"/images/about/image-47.png"} alt="tom cruise" height={250} width={250} />
          </div>
          <h1 className="text-2xl font-semibold mt-5 mb-2">Will Smith</h1>
          <p className="text-sm mb-3">Product Designer</p>

          <div className="flex justify-center items-center gap-3">
            <Image src={"/images/about/icons/Icon-Twitter.svg"} alt="twitter" height={20} width={20} />
            <Image src={"/images/about/icons/Icon-instagram.svg"} alt="twitter" height={20} width={20} />
            <Image src={"/images/about/icons/Icon-Linkedin.svg"} alt="twitter" height={20} width={20} />

          </div>

        </div>

      </div>


      {/* Benefits */}
      <div className="flex justify-center items-center flex-wrap gap-7">

        {/* FAST DELIVERY */}
        <div className="flex flex-col justify-center items-center ">
          {/* circlular logo */}
          <div className="rounded-full w-[80px] h-[80px] bg-[#c1c0c1] flex justify-center items-center mb-4">
            <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-black">
              <Image src={"/images/about/icons/icon-delivery.png"} alt="shop" height={40} width={40} />
            </div>
          </div>

            <h1 className="mb-1 w-[242px] font-semibold text-base">FREE AND FAST DELIVERY</h1>
            <p className="w-[242px] text-sm">Free delivery for all orders over $140</p>

        </div>


        {/* service */}
        <div className="flex flex-col justify-center items-center ">
          {/* circlular logo */}
          <div className="rounded-full w-[80px] h-[80px] bg-[#c1c0c1] flex justify-center items-center mb-4">
            <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-black">
              <Image src={"/images/about/icons/Icon-CustomerS.png"} alt="shop" height={40} width={40} />
            </div>
          </div>

            <h1 className="mb-1 w-[242px] font-semibold text-base">24/7 CUSTOMER SERVICE</h1>
            <p className="w-[242px] text-sm">Friendly 24/7 customer support</p>

        </div>

        {/* money back guarantee */}
        <div className="flex flex-col justify-center items-center ">
          {/* circlular logo */}
          <div className="rounded-full w-[80px] h-[80px] bg-[#c1c0c1] flex justify-center items-center mb-4">
            <div className="rounded-full flex justify-center items-center w-[60px] h-[60px] bg-black">
              <Image src={"/images/about/icons/shield-tick.png"} alt="shop" height={40} width={40} />
            </div>
          </div>

            <h1 className="mb-1 w-[242px] font-semibold text-base">MONEY BACK GUARANTEE</h1>
            <p className="w-[242px] text-sm">We return money within 30 days</p>

        </div>


      </div>

    </div>

  )
}
