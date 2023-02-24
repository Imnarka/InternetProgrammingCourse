import carousel1 from "../../media/carousel_item1.png"
import carousel2 from "../../media/carousel_item2.png"
import "./style.css"

const Carousel = () => {
    return ( 
        <div className="container">
			<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" >
						<img src={carousel1} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={carousel2} className="d-block w-100" alt="..." />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Предыдущий</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Следующий</span>
				</button>
			</div>
		</div>
    );
}
 
export default Carousel;