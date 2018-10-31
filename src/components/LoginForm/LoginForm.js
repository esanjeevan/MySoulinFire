import React, { Component } from 'react';
import classes from './LoginForm.css';
import utils from '../Utils/util.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import  Facebook  from './assets/facebook.svg';
import googleplus  from './assets/googleplus.svg';
import  instagram  from './assets/instagram.svg';
import  twitter  from './assets/twitter.svg';


class LoginForm extends Component {

    state={
        userInput: {
              email: '',
              pass: '',
              ValidateErrors:{
                      emailError:'',
                      passError:'',  
                  }
          },
          focusChange: classes.hasval,
    }

    handleEmailChange=(event) =>{
        let userInput={...this.state.userInput};
        userInput.email=event.target.value;
        userInput.ValidateErrors.emailError='';
        this.setState({userInput : userInput});
      }
    handlePassChange=(event) =>{
        let userInput={...this.state.userInput};
        userInput.pass=event.target.value;
        userInput.ValidateErrors.passError='';  
        this.setState({userInput : userInput});
      }
      showErrorMsgsIfAny=(type) =>{
        console.log("type",type);
          if(type==='Username' && this.state.userInput.ValidateErrors.emailError !== ''){
            return this.showInputErrorMsg(this.state.userInput.ValidateErrors.emailError);
          }
          if(type==='PassCode' && this.state.userInput.ValidateErrors.passError !== ''){
            return this.showInputErrorMsg(this.state.userInput.ValidateErrors.passError);
        }
      }

      validateInput = (input) => {
        console.log("emailVlidation",this.state.userInput.email.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/))
        if(this.state.userInput.email === '') {
            let userInput={...this.state.userInput};
            userInput.ValidateErrors.emailError="Enter Email";
            this.setState({userInput:userInput})
        }
        else if(this.state.userInput.email.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            let userInput={...this.state.userInput};
            userInput.ValidateErrors.emailError="Invalid Email";
            this.setState({userInput:userInput})
            }

        if(this.state.userInput.pass === '') {
            let userInput={...this.state.userInput};
            userInput.ValidateErrors.passError="Enter Password";
            this.setState({userInput:userInput})
        }
        else if(this.state.userInput.pass.trim().length >5 && this.state.userInput.pass.trim().length< 16) {
            let userInput={...this.state.userInput};
            userInput.ValidateErrors.passError="6-15 char long";
            this.setState({userInput:userInput})
            }
        }

        showInputErrorMsg=(errorMsg)=>{
            return(
            <span className={classes.alertvalidate}>
            <span className={classes.before} >{errorMsg}</span>
            <FontAwesomeIcon className={classes.after} icon={faExclamationCircle} size={'1x'} color={'red'}/>
            </span>
            );
        }

    render() {

        return (
            <div className={classes.limiter}>
                <div className={classes.containerlogin100} >
                    <div className={[classes.wraplogin100, utils.pt85, utils.pb20].join(' ')} >
                        <a href="#" className={classes.close} />
                        <div className={classes.login100form}>
                         <span className={[classes.login100formtitle, utils.pb10].join(' ')}>
                                Welcome
                            </span>
                            <span className={classes.login100formavatar}>
                                <img src="http://soulinfire.com/wp-content/uploads/2018/04/blackcirlce_logo.png" alt="AVATAR" />
                            </span>

                            <div className={[,classes.wrapinput100, classes.validateinput, utils.mt20, utils.mb35,{...this.state.focusChange}].join(' ')}>
                                <input className={classes.input100} value={this.state.userInput.email} onChange={this.handleEmailChange} />
                                <span className={classes.focusinput100} data-placeholder="Username"></span>
                                {this.showErrorMsgsIfAny("Username")}
                            </div>
                            <div className={[classes.wrapinput100, classes.validateinput, utils.mb50,{...this.state.focusChange}].join(' ')}>
                                <input className={classes.input100} value={this.state.userInput.pass} onChange={this.handlePassChange} />
                                <span className={classes.focusinput100} data-placeholder="Password"></span>
                                {this.showErrorMsgsIfAny("PassCode")}
                            </div>
                            <div className={classes.containerlogin100formbtn}>
                                <button className={classes.login100formbtn} onClick={this.validateInput}>
                                    Login
                                    </button>
                            </div>

                            <ul className={[classes.loginmore, utils.pt30].join(' ')}>
                                <li className={utils.mb8}>
                                    <span className={classes.txt1}>
                                        Forgot
                                    </span>
                                    <a href="#" className={[classes.txt2,utils.ml10].join(' ')}>
                                        Username / Password?
                                    </a>
                                </li>
                                <li>
                                    <span className={classes.txt1}>
                                        Don’t have an account?
                                                    </span>

                                    <a href="#" className={[classes.txt2,utils.ml10].join(' ')}>
                                        Sign up
                                                    </a>
                                </li>
                            </ul>
                            <hr className={[utils.mt10,utils.mb10].join(' ')}/>

                            <ul>
                                <li className={[utils.mt30,classes.txt1].join(' ')}>
                                    Login with : 
                                    <span ><img src={Facebook} className={classes.logo} sizes="1x" alt="Facebook"/></span>
                                    <span ><img src={googleplus} className={classes.logo} sizes="1x" alt="googleplus"/></span>
                                    <span ><img src={instagram} className={classes.logo} sizes="1x" alt="instagram"/></span>
                                    <span ><img src={twitter} className={classes.logo} sizes="1x" alt="twitter"/></span>                         
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LoginForm;