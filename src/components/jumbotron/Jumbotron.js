import React from  'react';
import Carousel from 'react-bootstrap/Carousel';
import '../jumbotron/Jumbotron.css';

function Jumbotron() {
  

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://scontent.fpoz3-1.fna.fbcdn.net/v/t39.30808-6/278568123_498660315237686_5133426428343217996_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=PUDo-cH6PpwAX_ikOHt&_nc_ht=scontent.fpoz3-1.fna&oh=00_AfDqVN41VyuHBVVTzF_1R9GPo6G7y5FoDoJ0Jh32nvIKYw&oe=6485EF4F"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PONAGE</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fpoz3-1.fna.fbcdn.net/v/t39.30808-6/279870376_506013471169037_4506478801249442751_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=AFyA_kIpFsUAX8h7asN&_nc_ht=scontent.fpoz3-1.fna&oh=00_AfD4evZRaC3tiX-rw28Lj9HiobZ-8598DpJqZTTSdRT2Cg&oe=64868303"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{color:"red"}}>PONAGE</h3>
          <p style={{color:"red"}}>Design for rich beach</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fpoz3-1.fna.fbcdn.net/v/t39.30808-6/280652315_513364120433972_4911261458466269916_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=IIK-iFTVljIAX-wUvq3&_nc_ht=scontent.fpoz3-1.fna&oh=00_AfB2tOhK_UFyEl1edelBaMwJ9VKVZOqNMNZ5-3xSCH2Vdg&oe=648639E6"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Jumbotron;