import "./NavBar.css"
import Cart from '../CartWidget.js'

const NavBar = ()=>(

    <div>
        <h2 className= "Name">Andrelo's Bar</h2>

        <ul className= "List">
            <li>
                <a href="/">Cervezas
                </a>
            </li>

            <li>
            <a href="/">Vinos
                </a>
            </li>

            <li>
            <a href="/">Licores
                </a>
            </li>

            <li>
            <a href="/">Whiskys
                </a>
            </li>
            <a href="/"> <Cart /></a>

        </ul>

    </div>
)

export default NavBar;