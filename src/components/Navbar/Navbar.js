import React from 'react'
import {NavLink} from 'react-router-dom'

import cls from './Navbar.module.scss'

const Navbar = ({ isMenu, setMenu }) => {
    
    const toggleNavbar = [cls.Navbar]
    if (isMenu) {
        toggleNavbar.push(cls.NavbarActive)
    }


    return (
        <nav className={toggleNavbar.join(' ')}>
            <ul>
                <li><NavLink 
                    className={cls.link} 
                    onClick={() => setMenu(false)}
                    activeClassName={cls.activeLink}
                    to="/"
                    exact 
                >Главная</NavLink></li>
                <li><NavLink 
                    className={cls.link} 
                    onClick={() => setMenu(false)}
                    activeClassName={cls.activeLink}
                    to="/about" 
                    exact
                >Информация</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar