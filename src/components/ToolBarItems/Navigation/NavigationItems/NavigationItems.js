import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>My Galary</NavigationItem>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/">My Writings</NavigationItem>
        <NavigationItem link="/">Contact Me</NavigationItem>
        <NavigationItem link="/">About Me</NavigationItem>
    </ul>
);

export default navigationItems;