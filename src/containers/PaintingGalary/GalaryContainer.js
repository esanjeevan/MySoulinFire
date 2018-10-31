import React from 'react';
import jsonp from 'jsonp';
import ExampleWithLightbox from '../../components/Gallery/ExampleWithLightbox';

class GalaryContainer extends React.Component {
  constructor() {
    super();
    this.state = { width: -1 };
    this.loadPhotos = this.loadPhotos.bind(this);
    this.myPhotos = {
      pictures: [
        {
          alt: "DSC02427",
          height: 1065,
          key: "20770219315",
          likes: "1234",
          shares: "123",
          sizes: "(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw",
          src: "https://farm6.staticflickr.com/5638/20770219315_50e1c69aae.jpg",
          srcSet: [
            { 0: "https://farm6.staticflickr.com/5638/20770219315_50e1c69aae.jpg 500w" },
            { 1: "https://farm6.staticflickr.com/5638/20770219315_50e1c69aae_c.jpg 800w" },
            { 2: "https://farm6.staticflickr.com/5638/20770219315_50e1c69aae_b.jpg 1024w" },
            { 3: "https://farm6.staticflickr.com/5638/20770219315_0443da777d_h.jpg 1600w" },
          ],
          length: 4,
          title: "Title1",
          width: 1600,
          primary: "Dummy For Later Use",
          Category: "Oil_Painting",
          ownerID: "1",
          ownername: "UserName1",
          ispublic: "1",
          description: "ajdnasd asdknasdna askdnaskndas kknaslkdnasdn aspidnaslkdna faiifnasslkfnasa asdlknasdlknasd",
          pictureComments: [
            {
              commentID: "12",
              commentDate: "Fri, 18 Oct 2013 11:38:23 GMT",
              commentContent: "masdn asjbnb sjbfd sujasdas asdasdas",
              commentByUserName: "userName12",
              commentByAltName: "userName12",
              commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Antony-Vinall.jpg",
              commentByUserProfileLink:"www.soulinfire.com",
              commentByUserId: "1012",
              subComment: [
                {
                  commentID: "11",
                  commentDate: "Fri, 24 Oct 2018 11:38:23 GMT",
                  commentContent: "knszdklnas aklnasd sdkn asdas",
                  commentByUserName: "userName11",
                  commentByAltName: "userName11",
                  commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Ana-Panchevska.jpg",
                  commentByUserProfileLink: "www.soulinfire.com",
                  commentByUserId: "1011"
                }
              ]
            },
            {
              commentID: "2",
              commentContent: "hi i like ZSDas adsthis pictruer vbery mauch",
              commentByUserName: "userName2",
              commentByUserId: "2",
              commentByAltName: "userName2",
              commentByUserProfilePicture: "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
              commentByUserProfileLink: "www.soulinfire.com",
              commentDate: "Fri, 17 Sep 2018 11:38:23 GMT"
            }
          ],
        },
        {
          alt: "bleik sólsetur",
          height: 1065,
          key: "20149281203",
          likes: "34",
          shares: "13",
          sizes: "(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw",
          src: "https://farm6.staticflickr.com/5825/20149281203_0335e3ed19.jpg",
          srcSet: [
            { 0: "https://farm6.staticflickr.com/5825/20149281203_0335e3ed19.jpg 500w" },
            { 1: "https://farm6.staticflickr.com/5825/20149281203_0335e3ed19_c.jpg 800w" },
            { 2: "https://farm6.staticflickr.com/5825/20149281203_0335e3ed19_b.jpg 1024w" },
            { 3: "https://farm6.staticflickr.com/5825/20149281203_16cdbb86d5_h.jpg 1600w" },
          ],
          length: 4,
          title: "Title2",
          width: 1600,
          primary: "Dummy For Later Use",
          Category: "Oil_Painting",
          ownerID: "1",
          ownername: "UserName1",
          ispublic: "1",
          description: "ajdnasd asdknasdna askdnaskndas kknaslkdnasdn aspidnaslkdna faiifnasslkfnasa asdlknasdlknasd",
          pictureComments: [
            {
              commentID: "1",
              commentContent: "hi i like this pictruer vbery mauch",
              commentByUserName: "userName1",
              commentByUserId: "1",
              commentByAltName: "userName1",
              commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Ana-Panchevska.jpg",
              commentByUserProfileLink: "www.soulinfire.com",
              commentDate: "Fri, 24 Oct 2018 19:33:23 GMT",
              subComment: [
                {
                  commentID: "11",
                  commentDate: "Fri, 24 Oct 2018 11:38:23 GMT",
                  commentContent: "knszdklnas aklnasd sdkn asdas",
                  commentByUserName: "userName11",
                  commentByAltName: "userName11",
                  commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Amanda-Orza.jpg",
                  commentByUserProfileLink: "www.soulinfire.com",
                  commentByUserId: "1011"
                },
                {
                  commentID: "12",
                  commentDate: "Fri, 18 Oct 2013 11:38:23 GMT",
                  commentContent: "masdn asjbnb sjbfd sujasdas asdasdas",
                  commentByUserName: "userName12",
                  commentByAltName: "userName12",
                  commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Antony-Vinall.jpg",
                  commentByUserProfileLink:"www.soulinfire.com",
                  commentByUserId: "1012"
                },
                {
                  commentID: "13",
                  commentDate: "Fri, 1 Oct 2018 00:38:23 GMT",
                  commentContent: "asdnasd knij i ewwwew",
                  commentByUserName: "userName13",
                  commentByAltName: "userName13",
                  commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2018-Profile-Photos-Antoine-Quentin.jpg",
                  commentByUserProfileLink:"www.soulinfire.com",
                  commentByUserId: "1013",
                  subComment: [
                    {
                      commentID: "111",
                      commentDate: "Fri, 18 Oct 2013 11:38:23 GMT",
                      commentContent: "asdnasd knij i ewwwew",
                      commentByUserName: "userName12",
                      commentByAltName: "userName12",
                      commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Antony-Vinall.jpg",
                      commentByUserProfileLink:"www.soulinfire.com",
                      commentByUserId: "1012"
                    }
                  ]
                }
              ]
            },
            {
              commentID: "2",
              commentContent: "hi i like ZSDas adsthis pictruer vbery mauch",
              commentByUserName: "userName2",
              commentByUserId: "2",
              commentByAltName: "userName2",
              commentByUserProfilePicture: "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
              commentByUserProfileLink:"www.soulinfire.com",
              commentDate: "Fri, 18 Oct 2013 11:38:23 GMT"
            }
          ],
        },
        {
          alt: "DSC02393",
          height: 1023,
          key: "20147663824",
          likes: "14",
          shares: "23",
          sizes: "(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw",
          src: "https://farm1.staticflickr.com/760/20147663824_3767d70a45.jpg",
          srcSet: [
            { 0: "https://farm1.staticflickr.com/760/20147663824_3767d70a45.jpg 500w" },
            { 1: "https://farm1.staticflickr.com/760/20147663824_3767d70a45_c.jpg 800w" },
            { 2: "https://farm1.staticflickr.com/760/20147663824_3767d70a45_b.jpg 1024w" },
            { 3: "https://farm1.staticflickr.com/760/20147663824_bb6ffff6e6_h.jpg 1600w" },
          ],
          length: 4,
          title: "Title3",
          width: 1600,
          length: 3,
          primary: "Dummy For Later Use",
          Category: "Oil_Painting",
          ownerID: "2",
          ownername: "UserName2",
          ispublic: "1",
          description: "ajdnasd asdknasdna askdnaskndas kknaslkdnasdn aspidnaslkdna faiifnasslkfnasa asdlknasdlknasd",
          pictureComments: [
            {
              commentID: "1",
              commentContent: "hi i like this pictruer vbery mauch",
              commentByUserName: "userName1",
              commentByUserId: "1",
              commentByAltName: "userName1",
              commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Ana-Panchevska.jpg",
              commentByUserProfileLink:"www.soulinfire.com",
              commentDate: "Fri, 18 Oct 2017 11:38:23 GMT",
              subComment: [
                {
              commentID: "2",
              commentContent: "hi i like ZSDas adsthis pictruer vbery mauch",
              commentByUserName: "userName2",
              commentByUserId: "2",
              commentByAltName: "userName2",
              commentByUserProfilePicture: "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
              commentByUserProfileLink:"www.soulinfire.com",
              commentDate: "Fri, 18 Oct 2018 11:38:23 GMT"
                }
              ]
            },
            {
              commentID: "111",
              commentDate: "Fri, 22 Oct 2018 10:38:23 GMT",
              commentContent: "asdnasd knij i ewwwew",
              commentByUserName: "userName12",
              commentByAltName: "userName12",
              commentByUserProfilePicture: "http://gpluseurope.com/wp-content/uploads/Website2016-Profile-Photos-Antony-Vinall.jpg",
              commentByUserProfileLink:"www.soulinfire.com",
              commentByUserId: "1012"
            }
          ],
        },
      ]
    };
  }
  componentDidMount() {
    this.loadPhotos();
  }
  loadPhotos() {
    this.setState({
      myPhotos: this.myPhotos,
    });
  }

  render() {
    if (this.state.myPhotos) {

      const width = this.state.width;
      return (
        <div >
          <ExampleWithLightbox photos={this.state.myPhotos.pictures} />

        </div>
      );
    } else {
      return (
        <div className="App">
          <div id="msg-app-loading" className="loading-msg">
            Loading
          </div>
        </div>
      );
    }
  }
}
export default GalaryContainer;
