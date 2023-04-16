import { component } from "vue/types/umd";
import "./navbar.css";
import {menuitems} from './menuitems';
import { link } from "reac-router-dom";


class Navbar extends component{
    state = {clicked: false};
    handleClick = () => {
        this.setState( { clicked : !this.state.clicked })
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Tours</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    {/* <i className="fas fa-times"></i> */}
                </div>
                <ul className="nav-menu">
                    {menuitems.map((item, index) =>{
                        return(
                            <li key={index}>
                            <a className={item.cName} href="/">
                            <i className={item.icon}></i>
                            {item.title}
                            </a>
                        </li>
                   
                        );
                    })}
                    <button>Sign-up</button>
                   </ul>
            </nav>
        );
    }
}
 

export default {Navbar};