import React from 'react';

import sifLogo from '../assets/SIF_Logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} >
    <img src={sifLogo}/>
    </div>
);

export default logo;