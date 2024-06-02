import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AccessoriesIcons from "./components/AccessoriesIcons";
import About from "./components/About";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
     <Header /> 
     <AccessoriesIcons/>
     <About/>
    </div>
  );
}
