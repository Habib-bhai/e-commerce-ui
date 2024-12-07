import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import CategoryContainer from "../categoryContainer/CategoryContainer"
import ItemCard from "../itemCard/ItemCard"


export default function BestSellingProducts() {
    return (
        <div className=" w-screen overflow-x-hidden">

            <div className="flex flex-col justify-center items-start">
                <div className="flex justify-center items-center gap-5 ml-10">
                    <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></p>
                    <p className="text-[#DB4444] font-semibold">This Month</p>
                </div>


                <div className="flex justify-between   items-center w-[92%] mb-10">

                    <h1 className="ml-9 md:ml-10 my-8 text-2xl md:text-3xl font-bold text-black">Best Selling Products</h1>
                    
                    <button className="bg-[#DB4444] text-white w-[159px] h-[52px] rounded-md">View All</button>
                </div>


            </div>
            <Carousel className="w-full  justify-start ml-10">
                <CarouselContent>
                    <CarouselItem className="ml-[20%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 md:basis-[40%] lg:basis-[28%] xl:basis-[23%] ">

                        <ItemCard display="hidden" image="bestSelling/b_image4.png" title="The north coat" originalPrice={360} discountedPrice={260} reviews={65} />

                    </CarouselItem>

                    <CarouselItem className="ml-[50%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 md:basis-[40%] lg:basis-[28%] xl:basis-[23%] ">

                        <ItemCard display="hidden" image="bestSelling/b_image3.png" title="Gucci duffle bag" originalPrice={1160} discountedPrice={960} reviews={65} />

                    </CarouselItem>
                    <CarouselItem className="ml-[30%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 md:basis-[40%] lg:basis-[28%] xl:basis-[23%] ">

                    <ItemCard display="hidden" image="bestSelling/b_image2.png" title="RGB liquid CPU Cooler" originalPrice={170} discountedPrice={160} reviews={65} />

                    </CarouselItem>

                    <CarouselItem className="ml-[30%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 md:basis-[40%] lg:basis-[28%] xl:basis-[23%] ">

                    <ItemCard display="hidden" image="bestSelling/b_image1.png" title="RGB liquid CPU Cooler" originalPrice={170} discountedPrice={160} reviews={65} />

                    </CarouselItem>

                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <p className="ml-10 h-[1px]  bg-[#ececec] mt-14 mb-20 w-[92%]"></p>
        </div>
    )
}
