import { component } from "vue/types/umd";
import "./navbar.css";


class Navbar extends component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Tours</h1>
                <ul className="nav-menu">
                    <li>
                        <link>
                        <i class="fa-solid fa-house"></i>
                        Home
                        </link>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default {Navbar}