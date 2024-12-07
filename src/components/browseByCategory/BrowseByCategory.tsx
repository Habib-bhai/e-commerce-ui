import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import CategoryContainer from "../categoryContainer/CategoryContainer"


export default function BrowseByCategory() {
    return (
        <div className="overflow-x-hidden">

            <div className="flex flex-col justify-center items-start">
                <div className="flex justify-center items-center gap-5 ml-10">
                    <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></p>
                    <p className="text-[#DB4444] font-semibold">Categories</p>
                </div>



                <h1 className="ml-9 md:ml-10 my-8 text-2xl md:text-3xl font-bold text-black">Browse By Category</h1>


            </div>
            <Carousel className="w-full  justify-start ml-10">
                <CarouselContent>
                    <CarouselItem className="ml-[20%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[30%] lg:basis-[20%] xl:basis-[15%] ">

                        <CategoryContainer CategoryImage="Category-CellPhone.png" 
                        CategoryName="Phones" />

                    </CarouselItem>

                    <CarouselItem className="ml-[50%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[30%] lg:basis-[20%] xl:basis-[15%] ">

                    <CategoryContainer CategoryImage="Category-Computer.png" CategoryName="Computer" />

                    </CarouselItem>
                    <CarouselItem className="ml-[30%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[30%] lg:basis-[20%] xl:basis-[15%] ">

                    <CategoryContainer CategoryImage="Category-SmartWatch.png" CategoryName="SmartWatch" />

                    </CarouselItem>

                    <CarouselItem className="ml-[30%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[30%] lg:basis-[20%] xl:basis-[15%] ">

                    <CategoryContainer CategoryImage="Category-Camera.png" CategoryName="Camera" />

                    </CarouselItem>

                    <CarouselItem className="ml-[30%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/3 min-[590px]:basis-[30%] lg:basis-[20%] xl:basis-[15%] ">
                    <CategoryContainer CategoryImage="Category-Headphone.png" CategoryName="HeadPhones" />
                    </CarouselItem>

                    <CarouselItem className="ml-[30%] md:ml-0 mb-10 md:mb-0 min-[510px]:basis-1/2 min-[590px]:basis-[30%] lg:basis-[20%] xl:basis-[15%] ">

                        <CategoryContainer CategoryImage="Category-Gamepad.png" CategoryName="Gaming" />

                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


            <p className="ml-10 h-[1px]  bg-[#ececec] mt-14 mb-20 w-[92%]"></p>

        </div>
    )
}
