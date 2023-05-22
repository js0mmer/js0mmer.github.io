/* eslint-disable jsx-a11y/alt-text */

const photosBaseUrl = 'https://js0mmer.github.io/photos/';

const Photos = () => {
  return (
    <div id="photos">
      <header>
        <h1>Photos</h1>
      </header>
      <div className="container">
        <img src={photosBaseUrl + 'IMG_0015_stitch0.jpg'} />
        <div className="row">
          <div className="col-sm-4">
            <img src={photosBaseUrl + 'IMG_0037-3.jpg'} />
            <img src={photosBaseUrl + 'IMG_0153-01.jpeg'} />
            <img src={photosBaseUrl + 'IMG_0338.jpg'} />
            <img src={photosBaseUrl + 'IMG_0340.jpg'} />
            <img src={photosBaseUrl + 'IMG_0350_01.jpg'} />
            <img src={photosBaseUrl + 'IMG_0483.jpg'} />
            <img src={photosBaseUrl + 'sadr.jpg'} />
            <img src={photosBaseUrl + 'neowise.jpg'} />
          </div>
          <div className="col-sm-4">
            <img src={photosBaseUrl + 'IMG_1566-02.jpeg'} />
            <img src={photosBaseUrl + 'IMG_1579.jpg'} />
            <img src={photosBaseUrl + 'IMG_1582-01.jpeg'} />
            <img src={photosBaseUrl + 'IMG_0585.jpg'} />
            <img src={photosBaseUrl + 'IMG_1682-01.jpeg'} />
            <img src={photosBaseUrl + 'IMG_1685-01.jpeg'} />
            <img src={photosBaseUrl + 'hdrmoon.jpg'} />
          </div>
          <div className="col-sm-4">
            <img src={photosBaseUrl + 'IMG_1693_01.jpg'} />
            <img src={photosBaseUrl + 'IMG_0308.jpg'} />
            <img src={photosBaseUrl + 'IMG_2678-02.jpeg'} />
            <img src={photosBaseUrl + 'andromeda_dss2.jpg'} />
            <img src={photosBaseUrl + 'sequator.jpg'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;