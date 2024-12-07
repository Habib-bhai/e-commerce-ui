import BestSellingProducts from "@/components/bestSellingProducts/BestSellingProducts";
import BrowseByCategory from "@/components/browseByCategory/BrowseByCategory";
import ExploreProducts from "@/components/exploreProducts/ExploreProducts";
import FlashSales from "@/components/flashSales/FlashSales";
import Hero_section from "@/components/heroSection/Hero_section";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import SpeakerBanner from "@/components/speakerBanner/SpeakerBanner";


export default function Home() {
  return (
   <>
   <Hero_section />
   <FlashSales />
   <BrowseByCategory />
   <BestSellingProducts />
   <SpeakerBanner />
   <ExploreProducts />
   <NewArrivals />
   </>
  );
}
