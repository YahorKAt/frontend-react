import { NavLink } from "react-router-dom";

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";


const Navbar = () => {

    const activLink = 'nav-list__link nav-list__link--active';
    const unactivLink = 'nav-list__link';

    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>
                    <BtnDarkMode/>
                    <ul className="nav-list">

                        <li className="nav-list__item"> 
                        <NavLink to="/" className={({isActive})=> isActive ? activLink : unactivLink}> 
                            Home
                        </NavLink> 
                        </li>

                        <li className="nav-list__item"> 
                        <NavLink to="/projects" className={({isActive})=> isActive ? activLink : unactivLink}>
                            Projects
                        </NavLink> 
                        </li>

                        <li className="nav-list__item">
                        <NavLink to="/contacts" className={({isActive})=> isActive ? activLink : unactivLink}>
                            Contacts
                        </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;