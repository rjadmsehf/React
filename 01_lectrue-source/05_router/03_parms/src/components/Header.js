import { NavLink } from "react-router-dom";

function Navbar() {

    const activeStyle = {
        backgroundColor: 'purple',
        color: 'white'
    }

    return(
        <div>
            <ul>
                <li><NavLink to="/main" style={({isActive}) => isActive? activeStyle : undefined}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => isActive? activeStyle : undefined}>소개</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive? activeStyle : undefined}>메뉴소개</NavLink></li>
            </ul>
        </div>
   );
}

export default Navbar;