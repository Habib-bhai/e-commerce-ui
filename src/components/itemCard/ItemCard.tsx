import Image from "next/image";

export default function ItemCard({ reviews,image, discount,title, discountedPrice, originalPrice}:{image:string, discount: number, discountedPrice:number , originalPrice:number, title:string, reviews: number}) {
    return (
        <div className="w-[270px] h-[350px]">
            <div className="bg-[#fafafa] relative flex  justify-center items-center w-full h-[250px]">
                {/* meta info and image */}
                <div className="px-2 absolute top-0 w-full flex justify-between items-center ">
                    <div className="text-white  text-[12px] w-[45px] h-[26px] bg-[#DB4444] rounded-sm flex justify-center items-center">
                        -{discount}%
                    </div>

                    <div className=" flex flex-col justify-center items-center gap-1">
                        <Image src={"/images/Fill_Heart.png"} alt="heart" height={30} width={30} className="mt-5" />

                        <Image src={"/images/Fill_Eye.png"} alt="Eye" height={30} width={30} />
                    </div>
                </div>

                {/*image  */}
                <Image src={`/images/carousel_products/${image}`} alt="product" height={150} width={150} />
            </div>

            <div className="mt-2 w-full flex flex-col justify-center items-start">
                {/* other details */}
                <h2 className="w-[201px] font-medium ">{title}</h2>
                <div className="flex justify-center items-center gap-3">
                    <p className="text-[#DB4444]">${discountedPrice}</p>
                    <p className="text-gray-400 line-through">${originalPrice}</p>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-1">
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                        <Image src={"/images/star.png"} alt="star" height={15} width={15} className={"mt-2"} />
                    </div>
                    <p className="text-sm text-gray-400">({reviews})</p>
                </div>
            </div>
        </div>

    )
}
