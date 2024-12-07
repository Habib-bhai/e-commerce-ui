import Image from "next/image";

export default function SpeakerBanner() {
  return (
    <div className="overflow-x-hidden w-screen flex justify-center items-center">
    <div className=" w-full md:w-[92%] md:h-[500px] bg-black flex justify-center items-center md:flex-nowrap flex-wrap">


            <div className="mt-10 flex flex-col justify-center items-start">
                    <p className="text-[#00FF66] font-medium">Categories</p>
                    <h1 className="mt-10 w-[443px] text-5xl text-white">Enhance Your Music Experience</h1>

                    <div className="-ml-4 mt-10 w-[320px] flex justify-center items-center gap-4">
                            <div className="w-[62px] h-[62px] bg-white rounded-full flex justify-center items-center flex-col">
                                <p className="text-sm">23</p>
                                <p className="text-sm">Hours</p>
                            </div>
                            <div className="w-[62px] h-[62px] bg-white rounded-full flex justify-center items-center flex-col">
                                <p className="text-sm">05</p>
                                <p className="text-sm">Days</p>
                            </div>
                            <div className="w-[62px] h-[62px] bg-white rounded-full flex justify-center items-center flex-col">
                                <p className="text-sm">59</p>
                                <p className="text-sm">Minutes</p>
                            </div>
                            <div className="w-[62px] h-[62px] bg-white rounded-full flex justify-center items-center flex-col">
                                <p className="text-sm">35</p>
                                <p className="text-sm">Seconds</p>
                            </div>
                    </div>

                    <button className="w-[171px] h-[56px] bg-[#00FF66] text-white rounded-md mt-10"> Buy Now!</button>
            </div>

            <div className="mt-20 md:mt-0 w-[600px] h-[420px] relative">
            <Image src={"/images/Ellipse.png"} alt="speaker" height={400} width={600} className="rounded-full " />

            <Image src={"/images/speaker.png"} alt="speaker" height={400} width={400} className=" absolute top-[18%] left-1/4 lg:w-[400px] md:top-[2%] lg:top-[10%] lg:left-[18%] xl:top-[18%] xl:left-1/4 " />
            </div>
    </div>
    </div>
  )
}
