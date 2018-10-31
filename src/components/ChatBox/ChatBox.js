import React, { Component } from 'react';
import classes from './ChatBox.css';

import  sendIcon  from './assests/sendIcon.svg';
import Auxilary from '../../hoc/Auxilary/Auxilary'; 

class ChatBox extends Component {
    state={
        chats:[ {
              username: '',
              userpic:'',
              content: '',
              date:'',         
          }], 
          chatCirlce: true,
    }

    toggleChat=()=>{
        this.setState({chatCirlce:!this.state.chatCirlce});
    }
    chatBox=() =>{
        if(this.state.chatCirlce){
            return null;
        }
        return(
        <div className={classes.chatbox}>
            <div className={classes.chatboxheader}>
                ChatBot
                <span className={classes.chatboxtoggle}>
                    <i  onClick={this.toggleChat} className={classes.materialicons}>
                    close
                    </i>
                </span>
            </div>
            <div className={classes.chatboxbody}>
                <div className={classes.chatboxoverlay}></div>
                <div className={classes.chatlogs}></div>
            </div>
            <div className={classes.chatinput}>
                <div>
                    <input type="text" id="chat-input" placeholder="Send a message..." />
                    <button type="submit" className={classes.chatsubmit} id="chat-submit">
                    <i className={classes.materialicons}>send</i></button>
                    <span ><img src={sendIcon} className={classes.logo} sizes="1x" alt="Facebook"/></span>

                </div>
            </div>
        </div>
        );
    }
    chatCircle=() =>{
        if(!this.state.chatCirlce){
            return null;
        }
        return(
            <div className={[classes.btn, classes.btnraised].join(' ')} >
            <div id="chat-overlay" onClick={this.toggleChat}></div>
            <i className={classes.materialicons}>speaker_phone</i>
            </div>
        );
    }
       


    render() {
        return (
            <Auxilary>
            <div>
                asfjbnaskdjfbaskjdfbksjasbkabsffkjb alsnsdfknasdjgfnasnfsafnasldkffffffffffklkkkkkkkkkkkkkkkkkkkkkkkkkkalfndsflsadlllllllllllll
            {this.chatCircle}
             {this.chatBox}
            </div>
            </Auxilary>
        );
    }
}

export default ChatBox;