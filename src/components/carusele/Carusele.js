import React from  'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carusele.css';

function Jumbotron() {
  

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://scontent.fpoz3-1.fna.fbcdn.net/v/t39.30808-6/278568123_498660315237686_5133426428343217996_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ODKaBO1B8GMAX95h1kY&_nc_ht=scontent.fpoz3-1.fna&oh=00_AfBgC7bek6EXemqhdIcK3MPMqwDeucjMPIFfpklAbKMD1Q&oe=648BDE0F"
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
          src="https://scontent.fpoz3-1.fna.fbcdn.net/v/t39.30808-6/291476904_545386557231728_7014751900222143798_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=96jkU5AmsUEAX92IG45&_nc_ht=scontent.fpoz3-1.fna&oh=00_AfD6QJln7P3jor_kJaSmZHZdPyBlHVwpynxbITiHVSpiUA&oe=648BDB1A"
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
          src="https://scontent.fpoz3-1.fna.fbcdn.net/v/t39.30808-6/280652315_513364120433972_4911261458466269916_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=YOKbsYac10gAX-Tlcgt&_nc_ht=scontent.fpoz3-1.fna&oh=00_AfBp77SIYmDVDMRaXynA_4cTLcys3zfsO7oc5NfOQQSALQ&oe=648C28A6"
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