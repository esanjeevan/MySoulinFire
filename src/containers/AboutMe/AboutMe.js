import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import classes from './AboutMe.css';
import crows from './Pictures/flyingCrows.png';
import Logo from '../../assets/images/SIF_Logo.png';
import PhotoDescCol from '../../components/BasicTemplates/PhotoDescCol1/PhotoDescCol';

class AboutMe extends Component {
    state = {
        ObjLoader:
            [
                {
                    Header: 'WhEN', Title: '1990s', PictureURL: 'http://soulinfire.com/wp-content/uploads/2018/siteSupportingMedias/AboutME/7-1.jpg', childs: [
                        { Title: 'When it started?', data: 'ok! let me start from here.. </p> My mother(also an hobby artist), wanted me to end up as a successful writer. Weird isn’t it!?!<br>yes!<br/>I was given the taste of books at my early ages and when ever I need a change I used to sketch some non-sense.During my collage days, painting which started as a distraction became my point of concentration. It was happy days.. instead of absconding the boring lecturers, I used to sketch the professors, just to make fun of them. And my journey in painting started in this way.<br>' },
                        { Title: 'Present', data: 'asdfkjhasflj aifasopjfpasojdfp saojf isjfp asdfoi asfoiphj asdfh asidfh osaihf oiashf oisahf ' },
                    ]
                },
                {
                    Header: 'Why', Title: '2010s', PictureURL: 'http://soulinfire.com/wp-content/uploads/2018/siteSupportingMedias/AboutME/1-1-199x300.jpg', childs: [
                        { Title: 'Title1', data: 'asdfjksand fojadsfiopjsadpfjsadf' },
                        { Title: 'Title2', data: 'klmnasdkfnskanfaksl;ndfm;klasnf saknmf sanf asddp kfnkasnf lkasnf lksanflksna fklnas fknasdk fnlsaknf lasfnooasknf obnsadf' },
                        { Title: 'Title3', data: 'masdnlkf;nsadkfnas;kln n sadfn aspinfiasfias nfiashnoisaddgh oiasidbfioasdbngfioasdnfg' },
                    ]
                },
                {
                    Header: 'Where', Title: '2017', PictureURL: 'http://soulinfire.com/wp-content/uploads/2018/03/IMG-20160815-WA0018-300x200.jpg', childs: [
                        { Title: 'Title1', data: 'asdfjasbnjd foin oisadn foiashih asiodlf;gmspdkvnspkfnspknpkkmnpkmnpksefsdfrgoias ghoihas dhoipashf iasd' },
                        { Title: 'Title2', data: 'jknasdjfvnioasfhasi iohj osadidhf sabnforgfkpbnas djfuasbfg asubgsad' },

                    ]
                },
            ]
        ,
    }


    render() {

        return (
            <Auxilary>
               {/*  <Logo className={classes.Logo} /> */}
                <div className={classes.container}>
                  <span> <img src={Logo} className={classes.Logo}/>  </span> 
                  <span>   <img src={crows} alt="SoulInFire" />  </span> 
                    <h1>About Me</h1>
                </div>
                <PhotoDescCol aboutMeText={this.state.ObjLoader} />
            </Auxilary>
        );

    };

}


export default AboutMe;