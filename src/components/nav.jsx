import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
        <NavLink 
                to="/" 
                activeStyle={{ color: '#818dc7' }}
                style={{ color: '#1c2554' }}>
                home
          </NavLink>
          <NavLink 
                to="/" 
                activeStyle={{ color: '#818dc7' }}
                style={{ color: '#1c2554' }}>
                about
          </NavLink>
          <NavLink 
                to="/projects" 
                activeStyle={{ color: '#818dc7' }}
                style={{ color: '#1c2554' }}>
                projects
          </NavLink>
          <NavLink 
                to="/" 
                activeStyle={{ color: '#818dc7' }}
                style={{ color: '#1c2554' }}>
                design
          </NavLink>
          <NavLink 
                to="/" 
                activeStyle={{ color: '#818dc7' }}
                style={{ color: '#1c2554' }}>
                manifesto
          </NavLink>
        </div>
    );
}


export default NavBar;