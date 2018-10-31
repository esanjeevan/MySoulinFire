import React from 'react';
import classes from './PhotoDescCol.css';
import Pic1 from '../AboutMe1.jpg'

const PhotoDescCol = (props) => (
    <div className={classes.flexRowcontainer}>
        <div className={[classes.flexColcontainer, classes.small].join(' ')}>
            <h2>WhEN</h2>
            <img src={Pic1} />
            <h3>1990's</h3>
        </div>
        <div className={classes.flexColcontainer} />
        <div className={[classes.flexColcontainer, classes.big].join(' ')}>
            <h2>When it started? </h2>
            <p>ok! let me start from here..</p>
            <p>My mother(also an hobby artist), wanted me to end up as a successful writer. Weird isn’t it!?!
                        </p>
            <p>yes!</p>

            <p>I was given the taste of books at my early ages and when ever I need a change I used to sketch some non-sense.During my collage days, painting which started as a distraction became my point of concentration. It was happy days.. instead of absconding the boring lecturers, I used to sketch the professors, just to make fun of them. And my journey in painting started in this way.</p>
            <h2>Present </h2>
            <p>I am a sr. software consultant in Oracle finance now. Life has changed in the course of time. Maturity has been forced to be taken (as in most of our life) generally because of the count of years we have lived(they call it as age).
            I have tired till now, every way possible to spend time for myself in every single day and painting is the time I really enjoy the most.
                        </p>
        </div>
    </div>
);



export default PhotoDescCol;