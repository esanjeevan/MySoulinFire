import React from 'react';
import classes from './ShareButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faPinterest, faTumblr , faInstagram ,faWhatsapp, faGooglePlusG } from '@fortawesome/fontawesome-free-brands';


const ShareButton = (props) => {

    return (
        <div  className={classes.container}>
                <ul className={classes.socialbtns}>
                    <li>
                        <a href="javascript:void(0);" className={[classes.socialbtnroll, classes.facebook].join(' ')}>
                            <div className={classes.socialbtnrollicons}>
                               
                            <div> <FontAwesomeIcon className={classes.socialbtnrolliconSmall} icon={faFacebookF}  size={"1x"}/> </div> 
         
                            <div>    <FontAwesomeIcon  className={classes.socialbtnrolliconSmall} icon={faFacebookF} size={"1x"} /> </div> 

                            </div>
                        </a>
                    </li>
                           <li>
                        <a href="javascript:void(0);" className={[classes.socialbtnroll, classes.google].join(' ')}>
                            <div className={classes.socialbtnrollicons}>
                               
                            <div> <FontAwesomeIcon className={classes.socialbtnrolliconLarge} icon={faGooglePlusG}  /> </div> 
         
                            <div>    <FontAwesomeIcon  className={classes.socialbtnrolliconLarge} icon={faGooglePlusG} /> </div> 

                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" className={[classes.socialbtnroll, classes.pinterest].join(' ')}>
                            <div className={classes.socialbtnrollicons}>
                               
                            <div> <FontAwesomeIcon className={classes.socialbtnrollicon} icon={faPinterest}  /> </div> 
         
                            <div>    <FontAwesomeIcon  className={classes.socialbtnrollicon} icon={faPinterest} /> </div> 

                            </div>
                        </a>
                    </li>        <li>
                        <a href="javascript:void(0);" className={[classes.socialbtnroll, classes.instagram].join(' ')}>
                            <div className={classes.socialbtnrollicons}>
                               
                            <div> <FontAwesomeIcon className={classes.socialbtnrollicon} icon={faInstagram}  /> </div> 
         
                            <div>    <FontAwesomeIcon  className={classes.socialbtnrollicon} icon={faInstagram} /> </div> 

                            </div>
                        </a>
                    </li>    
                        <li>
                        <a href="javascript:void(0);" className={[classes.socialbtnroll, classes.whatsapp].join(' ')}>
                            <div className={classes.socialbtnrollicons}>
                               
                            <div> <FontAwesomeIcon className={classes.socialbtnrollicon} icon={faWhatsapp}  /> </div> 
         
                            <div>    <FontAwesomeIcon  className={classes.socialbtnrollicon} icon={faWhatsapp} /> </div> 

                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" className={[classes.socialbtnroll, classes.twitter].join(' ')}>
                            <div className={classes.socialbtnrollicons}>
                               
                            <div> <FontAwesomeIcon className={classes.socialbtnrollicon} icon={faTwitter}  /> </div> 
         
                            <div>    <FontAwesomeIcon  className={classes.socialbtnrollicon} icon={faTwitter} /> </div> 

                            </div>
                        </a>
                    </li>     <li>
                        <a href="javascript:void(0);" className={[classes.socialbtnroll, classes.tumblr].join(' ')}>
                            <div className={classes.socialbtnrollicons}>
                               
                            <div> <FontAwesomeIcon className={classes.socialbtnrolliconSmall} icon={faTumblr}  /> </div> 
         
                            <div>    <FontAwesomeIcon  className={classes.socialbtnrolliconSmall} icon={faTumblr} /> </div> 

                            </div>
                        </a>
                    </li>
                </ul>
            </div>


    );
}


export default ShareButton;