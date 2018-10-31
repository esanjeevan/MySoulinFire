import React, { Component } from 'react';
import classes from './CommentBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faHeart, faShare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import Auxilary from '../../../../hoc/Auxilary/Auxilary';
import ShareButton from '../../../ShareButton/ShareButton';

import { faTwitter, faFacebookF, faPinterest, faTumblr , faInstagram ,faWhatsapp, faGooglePlusG } from '@fortawesome/fontawesome-free-brands';



class CommentBar extends Component {
    state = {
        showSharePanel: false,
    }

    toggleShowSharePanel = () => {
        const showSharePanelVal = this.state.showSharePanel;
        this.setState({ showSharePanel: !showSharePanelVal });
        console.log("toggle state",this.state.showSharePanel);
    }

    renderSharePannel = () => {
        console.log("render pannel",this.state.showSharePanel);
        if (this.state.showSharePanel) {
            return (
                <div>
                    <ShareButton />
                </div>
            );
        }
    }
    render() {

        return (
            <Auxilary>
                                                {this.renderSharePannel()}
    

                <div className={classes.commentscontainer} style={this.props.style} >
                    <div className={classes.hrTop} />
                    <div className={classes.hrTop} />
                    <div>
                        <h1 className={classes.buildFlexRow}>
                            <span ><FontAwesomeIcon icon={faHeart} />{this.props.image.likes} <i>Likes</i> </span>
                            <span>Comments</span>
                            <span onClick={this.toggleShowSharePanel} ><FontAwesomeIcon icon={faShare}  /> {this.props.image.shares} shares</span>
                        </h1>
                    </div>

                    <div className={classes.hrBottom} />

                    {showCommentsList(this.props)}
                </div>
            </Auxilary>
        )
    }
}

function calculateTime(date) {
    const commentDate = new Date(date);
    const fromDate = commentDate.toLocaleString();
    const toDate = new Date().toLocaleString();
    //const timeDifference = Math.floor(toDate - fromDate);
    const timeDifference = Math.ceil(new Date(toDate) - new Date(fromDate));
    //var differenceInMinutes = Math.floor(timeDifference / (1000 * 60));
    var day, hour, minute, seconds;
    seconds = Math.floor(timeDifference / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    console.log("toDate", toDate);
    console.log("fromDate", fromDate);
    console.log("day", day);
    console.log("hour", hour);
    console.log("minute", minute);
    console.log("seconds", seconds);

    if ((day / 365) > 1) {
        let years = Math.round(day / 365);
        if (years === 1) {
            return years + " yr ago.";
        }
        return years + " yrs ago.";
    }
    else if (day < 365 && day > 30) {
        let months = Math.round(day / 30);
        if (months === 1) {
            return months + " mnth ago.";
        }
        return months + " mnths ago.";
    }
    else if (day < 30 && day > 6) {
        let weeks = Math.round(day / 7);
        if (weeks === 1) {
            return weeks + " week ago.";
        }
        return weeks + " weeks ago.";
    }
    else if (day < 7 && day > 0) {
        if (day === 1) {
            return day + " day ago.";
        }
        return day + " days ago.";
    }
    else if (day < 1 && hour > 0) {
        let hours = Math.round(hour);
        if (hours === 1) {
            return hours + " hr ago.";
        }
        return hours + " hrs ago.";
    }
    else if (minute > 0 && hour === 0) {
        return minute + " mins " + seconds + " sec ago."
    }
    else if (minute === 0 && seconds > 0) {
        return seconds + " sec ago."
    }
}
function showChildCommentsList(props) {
    return (
        props.subComment.map((childComment, childCommentKey) => {
            return (
                <Auxilary>
                    <ul className={[classes.commentslist, classes.replylist].join(' ')}>
                        <li>
                            <div className={classes.commentavatar}>
                                <img src={childComment.commentByUserProfilePicture} alt={childComment.commentByAltName} />
                            </div>
                            <div className={classes.commentbox}>
                                <div className={classes.commenthead}>

                                    <div className={classes.commentname}><a href={childComment.commentByUserProfileLink}>{childComment.commentByUserName}</a></div>
                                    <span>{calculateTime(childComment.commentDate)}</span>
                                    <i> <FontAwesomeIcon icon={faReply} /></i>
                                    <i>  <FontAwesomeIcon icon={faHeart} /></i>
                                </div>
                                <div className={classes.commentcontent}>
                                    {childComment.commentContent}
                                </div>
                            </div>
                            {
                                (typeof (childComment.subComment) === "object") ?
                                    showChildCommentsList(childComment)
                                    : null
                            }
                        </li>
                    </ul>
                </Auxilary>
            )
        }
        )
    )
}

function showCommentsList(props) {
    return (props.image.pictureComments.map((cmvalue, cmkey) => {
        return (
            <Auxilary>
                <div key={cmkey}>
                    <ul className={classes.commentslist}>
                        <li>
                            <div className={classes.commentmainlevel}>

                                <div className={classes.commentbox}>
                                    <div className={classes.commenthead}>
                                        <div className={classes.commentavatar}>
                                            <img src={cmvalue.commentByUserProfilePicture} alt={cmvalue.commentByAltName} />
                                        </div>
                                        <div className={classes.commentname}><a href={cmvalue.commentByUserProfileLink}>{cmvalue.commentByUserName}</a></div>

                                        <div>
                                            <span>{calculateTime(cmvalue.commentDate)}</span>
                                            <i> <FontAwesomeIcon icon={faReply} /></i>
                                            <i> <FontAwesomeIcon icon={faHeart} /></i>
                                        </div>
                                    </div>
                                    <div className={classes.commentcontent}>
                                        {cmvalue.commentContent}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {
                                    (typeof (cmvalue.subComment) === "object") ?
                                        showChildCommentsList(cmvalue)
                                        : null

                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </Auxilary>
        );
    }
    ));
};

const openSharePanel = () => {

}




export default CommentBar;