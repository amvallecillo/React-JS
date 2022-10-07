import "./NavBar.css"
import{NavLink} from 'react-router-dom'
import CartWidget from "../CartWidget.js";

const NavBar = ()=>(

    <div>
        <h2 className= "Name">Andrelo's Bar</h2>

        <ul className= "List">
            <li>
                <NavLink to='/'>Inicio
                </NavLink>
            </li>

            <li>
                <NavLink to='/categoria/Cervezas'>Cervezas
                </NavLink>
            </li>

            <li>
            <NavLink to='/categoria/Vinos'>Vinos
                </NavLink>
            </li>

            <li>
            <NavLink to='/categoria/Licores'>Licores
                </NavLink>
            </li>

            <li>
            <NavLink to='/categoria/Whiskys'>Whiskys
                </NavLink>
            </li>
            <NavLink to='/cart'> <CartWidget /></NavLink>

        </ul>

    </div>
)

export default NavBar;