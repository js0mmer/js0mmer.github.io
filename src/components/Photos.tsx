/* eslint-disable jsx-a11y/alt-text */

const PHOTOS_BASE_URL = 'https://js0mmer.github.io/photos/';

const Photos = () => {
  return (
    <div id="photos">
      <header>
        <h1>Photos</h1>
      </header>
      <div className="container">
        <img src={PHOTOS_BASE_URL + 'IMG_0015_stitch0.jpg'} alt="crater lake" />
        <div className="row">
          <div className="col-sm-4">
            <img src={PHOTOS_BASE_URL + 'IMG_0037-3.jpg'} alt="abby the lab" />
            <img src={PHOTOS_BASE_URL + 'IMG_0153-01.jpeg'} alt="lake tahoe" />
            <img src={PHOTOS_BASE_URL + 'IMG_0338.jpg'} alt="social science tower" />
            <img src={PHOTOS_BASE_URL + 'IMG_0340.jpg'} alt="social science tower looking up" />
            <img src={PHOTOS_BASE_URL + 'IMG_0350_01.jpg'} alt="mesa court" />
            <img src={PHOTOS_BASE_URL + 'IMG_0483.jpg'} alt="outside langston library" />
            <img src={PHOTOS_BASE_URL + 'sadr.jpg'} alt="sadr" />
            <img src={PHOTOS_BASE_URL + 'neowise.jpg'} alt="comet neowise" />
          </div>
          <div className="col-sm-4">
            <img src={PHOTOS_BASE_URL + 'IMG_1566-02.jpeg'} alt="langston library rooftop patio" />
            <img src={PHOTOS_BASE_URL + 'IMG_1579.jpg'} alt="aldrich park flowers" />
            <img src={PHOTOS_BASE_URL + 'IMG_1582-01.jpeg'} alt="sunset" />
            <img src={PHOTOS_BASE_URL + 'IMG_0585.jpg'} alt="ics building" />
            <img src={PHOTOS_BASE_URL + 'IMG_1682-01.jpeg'} alt="krieger hall" />
            <img src={PHOTOS_BASE_URL + 'IMG_1685-01.jpeg'} alt="krieger hall" />
            <img src={PHOTOS_BASE_URL + 'hdrmoon.jpg'} alt="1st quarter moon" />
          </div>
          <div className="col-sm-4">
            <img src={PHOTOS_BASE_URL + 'IMG_1693_01.jpg'} alt="krieger hall looking up" />
            <img src={PHOTOS_BASE_URL + 'IMG_0308.jpg'} alt="engineering tower" />
            <img src={PHOTOS_BASE_URL + 'IMG_2678-02.jpeg'} alt="rowland and mcgaugh halls" />
            <img src={PHOTOS_BASE_URL + 'andromeda_dss2.jpg'} alt="andromeda galaxy" />
            <img src={PHOTOS_BASE_URL + 'sequator.jpg'} alt="milky way" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;