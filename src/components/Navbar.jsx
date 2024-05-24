import { NavLink } from 'react-router-dom';
import SuperHero from "../assets/img/sps.png"
 export const Navbar = () => {

    return(
        <nav className="ps-2 navbar navbar-expand-sm navbar-dark bg-dark py-3 w-100 d-flex ">
		  <div className="navbar-collapse">
          <div className="navbar-nav w-100 d-flex">
                    <NavLink className="navbar-brand me-5" to="/">
                    <img src={SuperHero} alt="Logo" style={{width: 170}} className="img-fluid h-100" />               
                    </NavLink>
                    <NavLink className='nav-item nav-link ' to="/">
						Home
					</NavLink>
					<NavLink className='nav-item nav-link' to="/marvel">
						Marvel
					</NavLink>
					<NavLink className='nav-item nav-link' to="/dc">
						DC
					</NavLink>
				</div>
          </div>    
		</nav>
    )
 };