const Photos = () => {
  return (
    <div id="photos">
      <header>
        <h1>Photos</h1>
      </header>
      <div className="container">
        <img src={'/photos/IMG_0015_stitch0.webp'} alt="crater lake" />
        <div className="row">
          <div className="col-sm-4">
            <img src={'/photos/IMG_0037-3.webp'} alt="abby the lab" />
            <img src={'/photos/IMG_0153-01.webp'} alt="lake tahoe" />
            <img src={'/photos/IMG_0338.webp'} alt="social science tower" />
            <img src={'/photos/IMG_0340.webp'} alt="social science tower looking up" />
            <img src={'/photos/IMG_0350_01.webp'} alt="mesa court" />
            <img src={'/photos/IMG_0483.webp'} alt="outside langston library" />
            <img src={'/photos/sadr.webp'} alt="sadr" />
            <img src={'/photos/neowise.webp'} alt="comet neowise" />
          </div>
          <div className="col-sm-4">
            <img src={'/photos/IMG_1566-02.webp'} alt="langston library rooftop patio" />
            <img src={'/photos/IMG_1579.webp'} alt="aldrich park flowers" />
            <img src={'/photos/IMG_1582-01.webp'} alt="sunset" />
            <img src={'/photos/IMG_0585.webp'} alt="ics building" />
            <img src={'/photos/IMG_1682-01.webp'} alt="krieger hall" />
            <img src={'/photos/IMG_1685-01.webp'} alt="krieger hall" />
            <img src={'/photos/hdrmoon.webp'} alt="1st quarter moon" />
          </div>
          <div className="col-sm-4">
            <img src={'/photos/IMG_1693_01.webp'} alt="krieger hall looking up" />
            <img src={'/photos/IMG_0308.webp'} alt="engineering tower" />
            <img src={'/photos/IMG_2678-02.webp'} alt="rowland and mcgaugh halls" />
            <img src={'/photos/andromeda_dss2.webp'} alt="andromeda galaxy" />
            <img src={'/photos/sequator.webp'} alt="milky way" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
