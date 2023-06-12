import React from 'react';
import { Bootstrap} from 'react-bootstrap'
import Menu from  "../components/menu/Menu";
import Image from 'react-bootstrap/Image';
import '../pages/About.css';
import Photo from '../img/ponage2.jpg'


function About (){
    return (
      <>
    <Menu/>
<div className='row' style = {{ marginTop:"100px"}}></div>
    <div className='container-fluid'><Image src= {Photo} fluid /></div>;
    <div className='container'>
    Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


    </div>
    </>
      
    )
};

export default About ;
