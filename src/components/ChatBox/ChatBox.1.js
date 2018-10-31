import React, { Component } from 'react';
import classes from './ChatBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import Auxilary from '../../hoc/Auxilary/Auxilary';

class ChatBox extends Component {
    state={
        chats:[ {
              username: '',
              userpic:'',
              content: '',
              date:'',         
          }], 
    }

    $(function() {
        var INDEX = 0; 
        $("#chat-submit").click(function(e) {
          e.preventDefault();
          var msg = $("#chat-input").val(); 
          if(msg.trim() == ''){
            return false;
          }
          generate_message(msg, 'self');
          var buttons = [
              {
                name: 'Existing User',
                value: 'existing'
              },
              {
                name: 'New User',
                value: 'new'
              }
            ];
          setTimeout(function() {      
            generate_message(msg, 'user');  
          }, 1000)
          
        })
        
        function generate_message(msg, type) {
          INDEX++;
          var str="";
          str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
          str += "          <span class=\"msg-avatar\">";
          str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
          str += "          <\/span>";
          str += "          <div class=\"cm-msg-text\">";
          str += msg;
          str += "          <\/div>";
          str += "        <\/div>";
          $(".chat-logs").append(str);
          $("#cm-msg-"+INDEX).hide().fadeIn(300);
          if(type == 'self'){
           $("#chat-input").val(''); 
          }    
          $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
        }  
        
        function generate_button_message(msg, buttons){    
          /* Buttons should be object array 
            [
              {
                name: 'Existing User',
                value: 'existing'
              },
              {
                name: 'New User',
                value: 'new'
              }
            ]
          */
          INDEX++;
          var btn_obj = buttons.map(function(button) {
             return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
          }).join('');
          var str="";
          str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
          str += "          <span class=\"msg-avatar\">";
          str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
          str += "          <\/span>";
          str += "          <div class=\"cm-msg-text\">";
          str += msg;
          str += "          <\/div>";
          str += "          <div class=\"cm-msg-button\">";
          str += "            <ul>";   
          str += btn_obj;
          str += "            <\/ul>";
          str += "          <\/div>";
          str += "        <\/div>";
          $(".chat-logs").append(str);
          $("#cm-msg-"+INDEX).hide().fadeIn(300);   
          $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
          $("#chat-input").attr("disabled", true);
        }
        
        $(document).delegate(".chat-btn", "click", function() {
          var value = $(this).attr("chat-value");
          var name = $(this).html();
          $("#chat-input").attr("disabled", false);
          generate_message(name, 'self');
        })
        
        $("#chat-circle").click(function() {    
          $("#chat-circle").toggle('scale');
          $(".chat-box").toggle('scale');
        })
        
        $(".chat-box-toggle").click(function() {
          $("#chat-circle").toggle('scale');
          $(".chat-box").toggle('scale');
        })
        
      })

      
    render() {
        return (
            <Auxilary>
            <div id="center-text">
                <h2>ChatBox UI</h2>
                <p>Message send and scroll to bottom enabled </p>
            </div>
            <div id="body">
                <div id="chat-circle" className={[classes.btn, classes.btnraised].join(' ')}>
                    <div id="chat-overlay"></div>
                    <i className={classes.materialicons}>speaker_phone</i>
                </div>
                <div className={classes.chatbox}>
                    <div className={classes.chatboxheader}>
                        ChatBot
                        <span className={classes.chatboxtoggle}>
                            <i className={classes.materialicons}>close</i>
                        </span>
                    </div>
                    <div className={classes.chatboxbody}>
                        <div className={classes.chatboxoverlay}></div>
                        <div className={classes.chatlogs}></div>
                    </div>
                    <div className={classes.chatinput}>
                        <div>
                            <input type="text" id="chat-input" placeholder="Send a message..." />
                            <button type="submit" className={classes.chatsubmit} id="chat-submit"><i className={classes.materialicons}>send</i></button>
                        </div>
                    </div>
                </div>
            </div>
            </Auxilary>
        );
    }
}

export default ChatBox;