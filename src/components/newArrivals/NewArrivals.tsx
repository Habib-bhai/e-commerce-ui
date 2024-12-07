import Image from "next/image";

export default function NewArrivals() {
    return (
        <div className="w-[92%] mb-10 flex xl:flex-row flex-col justify-center items-center gap-10">
            {/* primary/playstation */}
            <div className="rounded-md w-[70%] xl:w-[40%] h-[550px] bg-black flex justify-center items-center relative">
                <Image src={"/images/New_Arrival/ps5.png"} alt="ps5" height={400} width={400} />

                <div className="text-white flex flex-col justify-center items-start gap-2 absolute bottom-2 left-5">
                    <h2 className="text-base font-medium">PlayStation 5</h2>
                    <p className="w-[242px] text-[13px] text-gray-300">Black and White version of the PS5 coming out on sale.</p>
                    <p className="text-[13px] underline">Shop Now</p>
                </div>
            </div>

            {/* Secondary/ women's collection, perfume and speakers. */}
            <div className="mt-12  w-[88%] xl:w-[50%] flex justify-center items-center flex-col gap-5">

                {/* women's collection */}
                <div className="rounded-md relative  w-[80%] h-[320px] bg-black flex md:flex-row flex-col justify-around items-center px-5">

                    <div className=" w-[250px] text-white flex flex-col justify-center items-start gap-3">
                        <h2 className="text-base font-medium">Women's Collection</h2>
                        <p className="w-[230px] text-[13px] text-gray-300">Featured woman collections that give you another vibe.</p>
                        <p className="text-[13px] underline">Shop Now</p>
                    </div>
                    <Image src={"/images/New_Arrival/woman.png"} alt="woman " height={400} width={300} />
                </div>

                {/* perfume and speaker */}
                <div className="gap-5 lg:gap-0 w-[80%] flex lg:flex-row flex-col justify-between items-center ">

                    <div className="w-full lg:w-[350px] xl:w-[240px] h-[274px] rounded-md bg-black flex justify-center items-center relative">
                        <Image src={"/images/New_Arrival/speakers.png"} alt="speaker" height={150} width={150} />

                        <div className="flex flex-col justify-center items-start absolute bottom-2 left-5 text-white gap-3">
                            <h2 className="text-base font-medium">Speakers</h2>
                            <p className="w-[230px] text-[13px] text-gray-300">Amazon wireless speakers</p>
                            <p className="text-[13px] underline">Shop Now</p>
                        </div>

                    </div>

                    <div className="w-full lg:w-[350px] xl:w-[240px] h-[274px] rounded-md bg-black flex justify-center items-center relative">
                        <Image src={"/images/New_Arrival/fragrance.png"} alt="fragrance" height={150} width={150} />

                        <div className="flex flex-col justify-center items-start absolute bottom-2 left-5 text-white gap-3">
                            <h2 className="text-base font-medium">Speakers</h2>
                            <p className="w-[230px] text-[13px] text-gray-300">Amazon wireless speakers</p>
                            <p className="text-[13px] underline">Shop Now</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
