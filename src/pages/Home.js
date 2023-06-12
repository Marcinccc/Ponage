import React from  'react';
import Menu from  "../components/menu/Menu";
import Jumbotron from  "../components/jumbotron/Jumbotron";
import Footer from  "../components/footer/Footer";
import ProductCarosel from  "../components/ProductCarosel";


function Home(){
    return (
    <>
 <Menu/>
 <Jumbotron/>
 <ProductCarosel/>
 <Footer/>
    </>

    );
};


export default Home;
