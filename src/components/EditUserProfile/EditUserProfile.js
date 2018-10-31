import React, { Component } from 'react';
import classes from './EditUserProfile.css';
import utils from '../Utils/util.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import Auxilary from '../../hoc/Auxilary/Auxilary';

class EditUserProfile extends Component {
    render() {
        return (
            <Auxilary>



            <div className={[classes.pagewrapper, classes.bggra02, classes.pt130, classes.pb100, classes.fontpoppins].join(' ')}>
                        <div className={utils.mb45}>

                <h1 className={[utils.textcenter, utils.mt5, utils.mb2].join(' ')}>First Name, Last Name</h1>
                <p className={utils.textcenter}>{"emailaddress"}</p>

                < div className={[classes.uxauseravatar, utils.mb35].join(' ')}>
                    <img src="https://s-media-cache-ak0.pinimg.com/564x/07/3d/4c/073d4c881442c782d2cefed3e7e814f2.jpg" alt="User avatar" />
                </div>
            </ div>
                <div className={[classes.wrapper, classes.wrapperw680].join(' ')}>
                    <div className={[classes.card, classes.card4].join(' ')}>
                        <div className={classes.cardbody}>
                            <h2 className={classes.title}>Registration Form</h2>
                            <div className={[classes.row, classes.rowspace].join(' ')}>
                                <div className={classes.col2}>
                                    <div className={classes.inputgroup}>
                                        <label className={classes.label}>first name</label>
                                        <input className={classes.inputstyle4} type="text" name="first_name" />
                                    </div>
                                </div>
                                <div className={classes.col2}>
                                    <div className={classes.inputgroup}>
                                        <label className={classes.label}>last name</label>
                                        <input className={classes.inputstyle4} type="text" name="last_name" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className={[classes.row, classes.rowspace].join(' ')}>
                                <div className={classes.col2}>
                                    <div className={classes.inputgroup}>
                                        <label className={classes.label}>Birthday</label>
                                        <div className={classes.inputgroupicon}>
                                            <input className={[classes.inputstyle4, classes.jsdatepicker].join(' ')} type="text" name="birthday" />
                                            <i className={[classes.zmdi, classes.zmdicalendarnote, classes.inputicon, classes.jsbtncalendar].join(' ')}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.col2}>
                                    <div className={classes.inputgroup}>
                                        <label className={classes.label}>Gender</label>
                                        <div className={classes.pt10}>
                                            <label className={[classes.radiocontainer, classes.mr45].join(' ')}>Male
                                                <input type="radio" checked="checked" name="gender" />
                                                <span className={classes.checkmark}></span>
                                            </label>
                                            <label className={classes.radiocontainer}>Female
                                                <input type="radio" name="gender" />
                                                <span className={classes.checkmark}></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={[classes.row, classes.rowspace].join(' ')}>
                                <div className={classes.col2}>
                                    <div className={classes.inputgroup}>
                                        <label className={classes.label}>Email</label>
                                        <input className={classes.inputstyle4} type="email" name="email" />
                                    </div>
                                </div>
                                <div className={classes.col2}>
                                    <div className={classes.inputgroup}>
                                        <label className={classes.label}>Phone Number</label>
                                        <input className={classes.inputstyle4} type="text" name="phone" />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.inputgroup}>
                                <label className={classes.label}>Subject</label>
                                <div className={[classes.rsselect2, classes.jsselectsimple, classes.selectnosearch].join(' ')}>
                                    <select name="subject">
                                        <option disabled="disabled" selected="selected">Choose option</option>
                                        <option>Subject 1</option>
                                        <option>Subject 2</option>
                                        <option>Subject 3</option>
                                    </select>
                                    <div className={classes.selectdropdown}></div>
                                </div>
                            </div >
                            <div className={classes.pt15}>
                                < button className={[classes.btn, classes.btnradius2, classes.btnblue].join(' ')} type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Auxilary>

                                    );
    }
}

export default EditUserProfile;