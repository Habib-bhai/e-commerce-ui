import Image from "next/image";

export default function CategoryContainer({CategoryImage, CategoryName}: {CategoryImage:string, CategoryName:string}) {
  return (
    <div className="rounded-sm w-[170px] h-[145px] border flex flex-col justify-evenly items-center ">
     <Image src={`/images/categories/${CategoryImage}`} alt="image" height={60} width={60}/>   
     <p>{CategoryName}</p>
    </div>
  )
}
