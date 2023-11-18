import { NavLink } from "react-router-dom";
/*
                  <NavLink to="/" style={({ isActive }) => ({  
                            color: isActive ? 'greenyellow' : 'white' })}> 
                            Home 
                        </NavLink> 
*/

function NavBar(){
    return(
        <div>
        <NavLink 
                to="/" 
                style={({ isActive }) => ({  
                color: isActive ? '#4B2F2F' : '#977A7A' })}> 
                home
          </NavLink>
          <NavLink 
                to="/" 
                style={({ isActive }) => ({  
                color: isActive ? '#4B2F2F' : '#977A7A' })}> 
                about
          </NavLink>
          <NavLink 
                to="/projects" 
                style={({ isActive }) => ({  
                color: isActive ? '#4B2F2F' : '#977A7A' })}> 
                projects
          </NavLink>
          <NavLink 
                to="/" 
                style={({ isActive }) => ({  
                color: isActive ? '#4B2F2F' : '#977A7A' })}> 
                design
          </NavLink>
          <NavLink 
                to="/" 
                style={({ isActive }) => ({  
                color: isActive ? '#4B2F2F' : '#977A7A' })}> 
                manifesto
          </NavLink>
        </div>
    );
}


export default NavBar;