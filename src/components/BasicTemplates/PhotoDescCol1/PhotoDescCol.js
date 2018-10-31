import React from 'react';
import classes from './PhotoDescCol.css';
import Pic1 from '../AboutMe1.jpg'


function createMarkup(data) {
    return {__html: data};
  }
const PhotoDescCol = (props) => (


            props.aboutMeText.map((parent, i) =>
            <div>
                <header className={classes.header}>
                    <h4 className={classes.logo}>{parent.Header}</h4>
                </header>
                <section className={classes.intro}>
                    <div className={classes.column1}>
                        <h3>{parent.Title}</h3>
                        <img src={parent.PictureURL} alt="" className={classes.profile} />
                    </div>
                    <div>
                        {
                            (typeof (parent.childs) === "object") ?
                                <div>
                                    {
                                        parent.childs.map((childData, k) =>

                                            <div className={classes.column}>
                                                <h3>{childData.Title}</h3>
                                                <div dangerouslySetInnerHTML={createMarkup(childData.data)} />;
                                            </div>
                                        )
                                    }
                                </div>
                                : null

                        }
                    </div>
            </section>
            </div>
            )
        );


export default PhotoDescCol;