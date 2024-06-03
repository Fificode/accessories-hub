import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AccessoriesIcons from "./components/AccessoriesIcons";
import About from "./components/About";
import LimitedCollection from "./components/LimitedCollection";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
     <Header /> 
     <AccessoriesIcons/>
     <About/>
     <LimitedCollection/>
    </div>
  );
}
