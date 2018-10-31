import React, { Component } from 'react';

import Aux from '../Auxilary/Auxilary';
import classes from './Layout.css';
import Toolbar from '../../components/ToolBarItems/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/ToolBarItems/Navigation/SideDrawer/SideDrawer';
import AboutMe from '../../containers/AboutMe/AboutMe';
import Gallery from '../../containers/PaintingGalary/GalaryContainer';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile';
import ChatBox from '../../components/ChatBox/ChatBox';


class Layout extends Component {
    state = {
        showSideDrawer: false,
        showLoginForm: false,
        user: null,
    }

    //  state = {
    //      ingredients: {
    //          salad: 0,
    //          bacon: 0,
    //          cheese: 0,
    //          meat: 0
    //      },
    //      totalPrice: 4,
    //      purchasable: false,
    //      purchasing: false
    //  }


    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showLoginForm: false });
    }


    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    loginFormToggleHandler = (props) => {
        if(!(props.LoginFormBoolean === this.state.showLoginForm)){
        this.setState((prevState) => {
            return { showLoginForm: !prevState.showLoginForm };
        });
    }
    }
    logoutUser = () => {
        //dummy code for time being. This method should logout the user completely from all components.
        this.setState({ user: null });
    }
    authenticateUser = () => {
        //dummy code for time being. This method should login the user completely in to all components.
        let user = {
            firstName: 'Sanjeevan',
            lastName: 'Elangovan',
            fullName: 'Sanjeevan Elangovan',
            displayPicture: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s',
            authenticated: true
        };
        this.setState({ user: user });
    }
    render() {
        return (
            <Aux>
               
                <Toolbar user={this.state.user} 
                drawerToggleClicked={this.sideDrawerToggleHandler} 
                LoginFormClicked={this.loginFormToggleHandler}
                />
                <LoginForm
                    open={this.state.showLoginForm}
                    closed={this.closeLoginForm} />
                    <RegistrationForm/>
                    <EditUserProfile/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <AboutMe />
                <Gallery />
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            <ChatBox/>
            </Aux>
        )
    }
}

export default Layout;