import React, { Component } from 'react';
import classes from './RegistrationForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'


class RegistrationForm extends Component {

    state={
        userInput: {
              email: '',
              pass: '',
              ValidateErrors:{
                      emailError:'',
                      passError:'',  
                  }
          },
          
    }
    
    render() {

        return (
            <div className={classes.main}>

            <section className={classes.signup}>
                <div className={classes.container}>
                    <div className={classes.signupcontent}>
                        <div className={classes.signupform}>
                            <h2 className={classes.formtitle}>Create account</h2>
                            <div className={classes.formgroup}>
                               <span> <input type="text" className={classes.forminput} name="name" id="name" placeholder="Your Name"/> </span>
                            </div>
                            <div className={classes.formgroup}>
                                <input type="text" className={classes.forminput} name="name" id="name" placeholder="Your PhoneNo"/>
                            </div>
                            <div className={classes.formgroup}>
                                <input type="email" className={classes.forminput} name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className={classes.formgroup}>
                                <input type="text" className={classes.forminput} name="password" id="password" placeholder="Password"/>
                                <span toggle="#password" className={[classes.zmdi,classes.zmdieye,classes.fieldicon,classes.togglepassword].join(' ')}></span>
                            </div>
                            <div className={classes.formgroup}>
                                <input type="password" className={classes.forminput} name="re_password" id="re_password" placeholder="Repeat your password"/>
                            </div>
                            <div className={classes.formgroup}>
                                <input type="checkbox" name="agree-term" id="agree-term" className={classes.agreeterm} />
                                <label for="agree-term" className={classes.labelagreeterm}><span><span>
                                    </span></span>I agree all statements in  <a href="#" className={classes.termservice}>Terms of service</a></label>
                            </div>
                            <div className={classes.formgroup}>
                                <input type="submit" name="submit" id="submit" className={classes.formsubmit} value="Sign up"/>
                            </div>
                        </div>
                        <p className={classes.loginhere}>
                            Have already an account ? <a href="#" className={classes.loginherelink}>Login here</a>
                        </p>
                    </div>
                </div>
            </section>
    
        </div>
        );
    }
}

export default RegistrationForm;