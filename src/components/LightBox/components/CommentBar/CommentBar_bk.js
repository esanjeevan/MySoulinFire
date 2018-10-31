import React from 'react';
import classes from './CommentBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'

const CommentBar = (props) => {

    return (
        //https://bootsnipp.com/snippets/459K9#comments
        <div className={classes.commentscontainer}>
            <div className={classes.buildFlexRow}>
                <h1>Comments</h1>
                <div><FontAwesomeIcon icon={faHeart} /> Likes
                        <FontAwesomeIcon icon={faShare} /> share
                    </div>
            </div>

            <ul className={classes.commentslist}>
                <li>
                    <div className={classes.commentmainlevel}>
                        <div className={classes.commentavatar}>
                            <img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" />
                        </div>
                        <div className={classes.commentbox}>
                            <div className={classes.commenthead}>
                               
                                <div className={classes.commentname}><a href="http://creaticode.com/blog">sanjeevan Elangovan</a></div>
                              
                                <div>
                                    <span>20 mins ago</span>
                                    <i> <FontAwesomeIcon icon={faReply} /></i>
                                    <i>  <FontAwesomeIcon icon={faHeart} /></i>
                                </div>
                            </div>
                            <div className={classes.commentcontent}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                        </div>
                        </div>
                    </div>
                    
                        {/*  reply */}
                        <ul  className={[classes.commentslist,classes.replylist].join(' ')}>
                            <li>
                            
                                <div  className={classes.commentavatar}><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" />
                                </div>
                                <div className={classes.commentbox}>
                                    <div className={classes.commenthead}>
                                    <div className={classes.commentname}><a href="http://creaticode.com/blog">Lorena Rojero</a></div>
                                        <span>hace 10 minutos</span>
                                        <i> <FontAwesomeIcon icon={faReply} /></i>
                                        <i>  <FontAwesomeIcon icon={faHeart} /></i>
                                    </div>
                                    <div className={classes.commentcontent}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div  className={classes.commentavatar}><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>
                                <div className={classes.commentbox}>
                                <div className={classes.commenthead}>
                                    <div className={classes.commentname}><a href="http://creaticode.com/blog">Agustin Ortiz</a></div>
                                    <span>hace 10 minutos</span>
                                    <i> <FontAwesomeIcon icon={faReply} /></i>
                                    <i>  <FontAwesomeIcon icon={faHeart} /></i>
                                </div>
                                    <div className={classes.commentcontent}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                    </div>
                                </div>
					        </li>
				        </ul>
                </li>
            </ul>
            <ul className={classes.commentslist}>
                <li>
                    <div className={classes.commentmainlevel}>
                        <div className={classes.commentavatar}>
                            <img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" />
                        </div>
                        <div className={classes.commentbox}>
                            <div className={classes.commenthead}>
                               
                                <div className={classes.commentname}><a href="http://creaticode.com/blog">sanjeevan Elangovan</a></div>
                              
                                <div>
                                    <span>20 mins ago</span>
                                    <i> <FontAwesomeIcon icon={faReply} /></i>
                                    <i>  <FontAwesomeIcon icon={faHeart} /></i>
                                </div>
                            </div>
                            <div className={classes.commentcontent}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                        </div>
                        </div>
                    </div>
                    
                        {/*  reply */}
                        <ul  className={[classes.commentslist,classes.replylist].join(' ')}>
                            <li>
                            
                                <div  className={classes.commentavatar}><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" />
                                </div>
                                <div className={classes.commentbox}>
                                    <div className={classes.commenthead}>
                                    <div className={classes.commentname}><a href="http://creaticode.com/blog">Lorena Rojero</a></div>
                                        <span>hace 10 minutos</span>
                                        <i> <FontAwesomeIcon icon={faReply} /></i>
                                        <i>  <FontAwesomeIcon icon={faHeart} /></i>
                                    </div>
                                    <div className={classes.commentcontent}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div  className={classes.commentavatar}><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>
                                <div className={classes.commentbox}>
                                <div className={classes.commenthead}>
                                    <div className={classes.commentname}><a href="http://creaticode.com/blog">Agustin Ortiz</a></div>
                                    <span>hace 10 minutos</span>
                                    <i> <FontAwesomeIcon icon={faReply} /></i>
                                    <i>  <FontAwesomeIcon icon={faHeart} /></i>
                                </div>
                                    <div className={classes.commentcontent}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                    </div>
                                </div>
					        </li>
				        </ul>
                </li>
            </ul>
        </div>
    );
}


export default CommentBar;