import React , { Component } from 'react';
import classes from './UserProfile.css';
import Auxilary from '../../../hoc/Auxilary/Auxilary';
import GuestDP from './assets/Guest.png';
import LoginIcon from './assets/Login.png';
import LogoutIcon from './assets/Logout.png';
import * as ConstantFile  from '../../../Utility/ConstantsFile';

class UserProfile extends Component {
    state={
        user:null,
        UserAuthenicated:false

    }
  logoutUser = () =>{
    let newUserState=null;
    this.setState({user:newUserState});
    this.setState({UserAuthenicated:false});

 } 
 loginUser = () =>{
        let newUserState={...this.props.user};
        this.setState({user:newUserState});
        this.setState({UserAuthenicated:true});
    } 
    render(){
        let userProfile = { };
   
  
        if(this.state.UserAuthenicated===false){
            console.log(" UserAuthenicated===false");

             userProfile = (
                  // Guest user state.
            <Auxilary>
            <img className={classes.log} src={LoginIcon} alt="Login Icon" 
            onClick={this.props.LoginFormClicked} />
            <img className={classes.avatar} src={GuestDP} alt="Display Picture" />
            <div className={classes.username}>{ConstantFile.GUEST_USER_FULL_NAME}</div>
            </Auxilary>);
           } 
            if(this.props.user!=null && this.props.user.authenticated && this.state.UserAuthenicated===false){
                // add this new user state to the state of this component
                console.log("setting UserAuthenicated===true");
                this.setState({UserAuthenicated:true});

                let newUserState={...this.props.user};
                this.setState({user:newUserState});
                // update render to the new user state of this component
             userProfile=(   
                <Auxilary>
            <img className={classes.log} src={LogoutIcon} alt="Logout Icon" 
                onClick={this.props.logoutUser}/>
            <img className={classes.avatar} src={this.props.user.displayPicture} alt="Display Picture" />
            <div className={classes.username}>{this.props.user.fullName}</div>
            </Auxilary>
        );
    }

    return (
        <Auxilary>
        <div className={classes.userprofile}>
         {userProfile}
           {/*  <button >Logout</button> */}
        </div>
        </Auxilary>

    );
   }
   
}

export default UserProfile;