
import Image from "next/image"
import ItemCard from "../itemCard/ItemCard"



export default function ExploreProducts() {
    return (
        <div className="overflow-x-hidden mt-20">

            <div className="flex flex-col justify-center items-start">
                <div className="flex justify-center items-center gap-5 ml-10">
                    <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></p>
                    <p className="text-[#DB4444] font-semibold">Our Products</p>
                </div>


                <div className="flex  justify-between   items-center w-[92%] mb-10">

                    <h1 className="ml-9 md:ml-10 my-8 text-2xl md:text-3xl font-bold text-black">Explore Our Products</h1>

                    <div className="flex justify-center items-center gap-2">
                        <Image src={"/images/Left_Arrow.svg"} alt="arrow" height={40} width={40}/>
                        <Image src={"/images/Right_Arrow.svg"} alt="arrow" height={40} width={40}/>
                    </div>
                </div>


            </div>

            <div className="flex justify-center items-center flex-wrap w-full md:w-[92%] gap-10 ">
                <ItemCard display="hidden" image="explore_products/image2.png" title="Breed Dry Dog Food" discountedPrice={100} discount={35} reviews={75} />
                <ItemCard display="hidden" image="explore_products/image1.png" title="CANON EOS DSLR Camera" discountedPrice={360} discount={35} reviews={95} />
                <ItemCard display="hidden" image="explore_products/image3.png" title="ASUS FHD Gaming Laptop" discountedPrice={700} discount={35} reviews={325} />
                <ItemCard display="hidden" image="explore_products/image4.png" title="Jr. Zoom Soccer Cleats" discountedPrice={1160} discount={35} reviews={35} />
                <ItemCard display="hidden" image="explore_products/image5.png" title="Curology Product Set " discountedPrice={500} discount={35} reviews={145} />
                <ItemCard display="hidden" image="explore_products/image6.png" title="GP11 Shooter USB Gamepad" discountedPrice={660} discount={35} reviews={56} />
                <ItemCard display="hidden" image="explore_products/image7.png" title="Quilted Satin Jacket" discountedPrice={660} discount={35} reviews={56} />
                <ItemCard display="hidden" image="explore_products/image8.png" title="Kids Electric Car" discountedPrice={960} discount={35} reviews={190} />
            </div>

            <div className="w-full flex justify-center items-center mt-5 ">
                <button className="w-[234px] h-[56px] bg-[#DB4444] text-white text-[16px] rounded-sm " >View All Products</button>
            </div>

            <p className="ml-10 h-[1px]  bg-[#ececec] mt-14 mb-20 w-[92%]"></p>

        </div>
    )
}
