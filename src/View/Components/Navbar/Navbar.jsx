import React from 'react';
import classes from './Navbar.module.css'

let Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/dialogs'>Messages</a>
            </div>
            <div>
                <a href='./news'>News</a>
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;