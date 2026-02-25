import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PromoBanner from "@/components/home/PromoBanner";
import VideoLookbook from "@/components/home/VideoLookbook";
import InstagramFeed from "@/components/home/InstagramFeed";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <VideoLookbook />
      <FeaturedProducts />
      <PromoBanner />
      <InstagramFeed />
    </>
  );
}
