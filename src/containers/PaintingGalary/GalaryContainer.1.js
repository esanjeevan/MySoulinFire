import React from 'react';
import jsonp from 'jsonp';
import ExampleWithLightbox from '../../components/Gallery/ExampleWithLightbox';

class GalaryContainer extends React.Component {
  constructor() {
    super();
    this.state = { width: -1 };
    this.loadPhotos = this.loadPhotos.bind(this);
  }
  componentDidMount() {
    this.loadPhotos();
    console.log("GalaryContent:",this.loadPhotos);
  }
  loadPhotos() {

    const urlParams = {
      api_key: '372ef3a005d9b9df062b8240c326254d',
      photoset_id: '72157680705961676',
      user_id: '57933175@N08',
      format: 'json',
      per_page: '24',
      extras: 'url_m,url_c,url_l,url_h,url_o',
    };

    let url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
    url = Object.keys(urlParams).reduce((acc, item) => {
      return acc + '&' + item + '=' + urlParams[item];
    }, url);

    jsonp(url, { name: 'jsonFlickrApi' }, (err, data) => {
      let photos = data.photoset.photo.map(item => {
        let aspectRatio = parseFloat(item.width_o / item.height_o);
        return {
          src: aspectRatio >= 3 ? item.url_c : item.url_m,
          width: parseInt(item.width_o),
          height: parseInt(item.height_o),
          title: item.title,
          alt: item.title,
          key: item.id,
          srcSet: [
            `${item.url_m} ${item.width_m}w`,
            `${item.url_c} ${item.width_c}w`,
            `${item.url_l} ${item.width_l}w`,
            `${item.url_h} ${item.width_h}w`,
          ],
          sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
        };
      });
      this.setState({
        photos: this.state.photos ? this.state.photos.concat(photos) : photos,
      });
    });

  }

 render() {
    if (this.state.photos) {
      const width = this.state.width;
      return (
        <div className="App">
      <ExampleWithLightbox photos={this.state.photos.slice(12, 18)} />

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