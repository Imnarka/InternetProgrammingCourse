const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<ul className="navbar-nav mr-auto">
            	<li className="nav-item">
                	<a className="nav-link" href="#">Лаба 1</a>
            	</li>
            	<li className="nav-item">
                	<a className="nav-link" href="#">Раз</a>
            	</li>
            	<li className="nav-item">
                	<a className="nav-link" href="#">Два</a>
            	</li>
        	</ul>
        	<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            	<li className="nav-item">
                	<a className="nav-link" href="#">Три</a>
            	</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Четыре</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Пять</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Шесть</a>
				</li>
        	</ul>
      	</nav>
     );
}
 
export default Navbar;
