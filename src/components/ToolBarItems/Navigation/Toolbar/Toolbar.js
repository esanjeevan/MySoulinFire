import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../SIFLogo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import UserProfile from '../../UserProfile/UserProfile';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
    
    
        <nav >
        <UserProfile/>
        </nav>
     {/* <div className={classes.Logo}>
            <Logo />
        </div>
         */}  
        <DrawerToggle clicked={props.drawerToggleClicked} />

    </header>
);

export default toolbar;