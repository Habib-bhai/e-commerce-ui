import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ItemCard from "../itemCard/ItemCard"



export default function FlashSales() {
    return (
        <div className="w-screen overflow-x-hidden flex flex-col justify-center  items-center md:items-start mt-20">
            <div className="flex flex-col justify-center items-start">
                <div className="flex justify-center items-center gap-5 ml-10">
                    <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></p>
                    <p className="text-[#DB4444] font-semibold">Today's</p>
                </div>

                <div className="w-full flex justify-start md:ml-10">

                    <div className=" mt-10 md:mt-2 w-[320px] md:w-full flex flex-col md:flex-row justify-center items-start md:items-center  md:gap-20 ">

                        <h1 className="ml-9 md:ml-0 text-2xl md:text-3xl font-bold text-black">Flash Sales</h1>

                        <div className="w-[302px] flex justify-center items-center gap-3 text-[#DB4444]">
                            <div className="text-[12px] text-black">
                                Days
                                <h2 className="text-2xl font-semibold text-black">03</h2>
                            </div>
                            :
                            <div className="text-[12px] text-black">
                                Hours
                                <h2 className="text-2xl font-semibold">23</h2>
                            </div>
                            :
                            <div className="text-[12px] text-black">
                                Minutes
                                <h2 className="text-2xl font-semibold">19</h2>
                            </div>
                            :
                            <div className="text-[12px] text-black">
                                Seconds
                                <h2 className="text-2xl font-semibold">56</h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Carousel className="w-full  justify-start ml-10">
                <CarouselContent>
                    <CarouselItem className="ml-[10%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[40%] md:basis-1/4 ">

                        <ItemCard image="carousel_item4.png" title="HAVIT HV-G92 Gamepad" originalPrice={160} discountedPrice={120} discount={40} reviews={86}/>

                    </CarouselItem>
                    <CarouselItem className="ml-[10%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[40%] md:basis-1/4 ">
                    
                        <ItemCard image="carousel_item1.png" title="S-Series Comfort Chair " originalPrice={400} discountedPrice={375} discount={25} reviews={99} />

                    </CarouselItem>
                    <CarouselItem className="ml-[10%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[40%] md:basis-1/4 ">

                        <ItemCard image="carouse_item2.png" title="IPS LCD Gaming Monitor" originalPrice={400} discountedPrice={375} discount={25} reviews={99}/>
                    </CarouselItem>

                    <CarouselItem className="ml-[10%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[40%] md:basis-1/4 ">

                        <ItemCard image="carouse_item3.png" title="AK-900 Wired Keyboard" originalPrice={1160} discountedPrice={960} discount={35} reviews={75} />
                    </CarouselItem>

                    <CarouselItem className="ml-[10%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/3 min-[590px]:basis-[40%] md:basis-1/4 ">
                        <ItemCard image="carousel_item4.png" title="HAVIT HV-G92 Gamepad" originalPrice={160} discountedPrice={120} discount={40} reviews={86} />
                    </CarouselItem>

                    <CarouselItem className="ml-[10%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[40%] md:basis-1/4 ">
                        <ItemCard image="carouse_item3.png" title="AK-900 Wired Keyboard" originalPrice={1160} discountedPrice={960} discount={35} reviews={75} />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}
