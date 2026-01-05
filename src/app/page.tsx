import CollectionGrid from "@/components/Collectiongrid";
import Header from "@/components/Header";
import HeroSection from "@/components/Herosection";
import Footer from "@/components/Shared/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">
     
      <HeroSection />
      <CollectionGrid />
   
    </main>
  );
}