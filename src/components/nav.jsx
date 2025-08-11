import { NavLink } from "react-router-dom";
import "./nav.css";
/*                style={({ isActive }) => ({  
                color: isActive ? '#4B2F2F' : '#977A7A' })}> 

                style={({ isActive }) => ({  
                color: isActive ? '#aa8866' : '#4B2F2F' })}
*/

function NavBar(){
    return(
        <div>
        <NavLink 
                to="/" 
                className="nav_link">
                me
          </NavLink>
          <NavLink 
                to="/experience" 
                className="nav_link"
                > 
                experience
          </NavLink>
          <NavLink 
                to="/projects"
                className="nav_link"> 
                projects
          </NavLink>
          <NavLink 
                to="/design"
                className="nav_link"> 
                design
          </NavLink>
          <NavLink 
                to="/manifesto"
                className="nav_link"> 
                manifesto
          </NavLink>
        </div>
    );
}


export default NavBar;