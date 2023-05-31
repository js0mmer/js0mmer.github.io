/* eslint-disable jsx-a11y/alt-text */

const PHOTOS_BASE_URL = 'https://js0mmer.github.io/photos/';

const Photos = () => {
  return (
    <div id="photos">
      <header>
        <h1>Photos</h1>
      </header>
      <div className="container">
        <img src={PHOTOS_BASE_URL + 'IMG_0015_stitch0.jpg'} />
        <div className="row">
          <div className="col-sm-4">
            <img src={PHOTOS_BASE_URL + 'IMG_0037-3.jpg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_0153-01.jpeg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_0338.jpg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_0340.jpg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_0350_01.jpg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_0483.jpg'} />
            <img src={PHOTOS_BASE_URL + 'sadr.jpg'} />
            <img src={PHOTOS_BASE_URL + 'neowise.jpg'} />
          </div>
          <div className="col-sm-4">
            <img src={PHOTOS_BASE_URL + 'IMG_1566-02.jpeg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_1579.jpg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_1582-01.jpeg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_0585.jpg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_1682-01.jpeg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_1685-01.jpeg'} />
            <img src={PHOTOS_BASE_URL + 'hdrmoon.jpg'} />
          </div>
          <div className="col-sm-4">
            <img src={PHOTOS_BASE_URL + 'IMG_1693_01.jpg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_0308.jpg'} />
            <img src={PHOTOS_BASE_URL + 'IMG_2678-02.jpeg'} />
            <img src={PHOTOS_BASE_URL + 'andromeda_dss2.jpg'} />
            <img src={PHOTOS_BASE_URL + 'sequator.jpg'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;