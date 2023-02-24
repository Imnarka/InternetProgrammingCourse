import Navbar from "./components/nav/Navbar"
import Carousel from "./components/carousel/CarouselContainer";
import Info from "./components/info/Info";
import Priemlemo from "./components/priemlemo/Priemlemo";
import Bwt from "./components/buttonWithText/Bwt";

function App() {
  return (
    <div className="App">
		
		<Navbar />
    	<Carousel />
		<Info />
		<Bwt />
		<Priemlemo />
      	   
    </div>
  );
}

export default App;
