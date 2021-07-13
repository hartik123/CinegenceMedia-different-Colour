// import React from 'react';
// import './OwnerCard.css';

// const OwnerCard = () => {
    //     return (
        //         <div>
        //             <div class="flip-box">
        //                 <div class="flip-box-inner">
        //                     <div class="flip-box-front">
        //                         <img src={stephen} alt="Paris"  />
        //                     </div>
        //                     <div class="flip-box-back">
        //                         <h2>stephen mascarenhas</h2>
        //                         <p>What an amazing city</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }
        
        // export default OwnerCard
        
        
        
        
        import React from 'react'
        import {Carousel} from 'react-bootstrap';
        import stephen from '../images/stephen.jpg';

const OwnerCard = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item style={{width: "1000px", height: "700px"}} interval={1000000}>
    <img
      className="d-block"
      src={stephen} style={{width: "200px", height:"500px"}}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default OwnerCard
