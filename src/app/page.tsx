import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AccessoriesIcons from "./components/AccessoriesIcons";
import About from "./components/About";
import LimitedCollection from "./components/LimitedCollection";
import Reviews from "./components/Reviews";
import Trending from "./components/Trending";
import HolidayGifts from "./components/HolidayGifts";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import ServerLayout from "./layout.server";
import ClientLayout from "./layout";

export default function Home() {
  return (
    <ServerLayout>
      <ClientLayout>
        <div className="overflow-hidden">
      <Navbar/>
     <Header /> 
     <AccessoriesIcons/>
     <About/>
     <LimitedCollection/>
     <Reviews/>
     <Trending/>
     <HolidayGifts/>
     <FollowUs/>
     <Footer/>
     </div>
    </ClientLayout>
    </ServerLayout>
  );
}
