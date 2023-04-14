import { component } from "vue/types/umd";
import "./navbar.css";
import {menuitems} from './menuitems';

class Navbar extends component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Tours</h1>
                <ul className="nav-menu">
                    {menuitems.map((item, index) =>{
                        return(
                            <li key={index}>
                            <a href="/">
                            <i className={item.icon}></i>
                            {item.title}
                            </a>
                        </li>
                   
                        )
                    })}
                   </ul>
            </nav>
        )
    }
}
 

export default {Navbar};