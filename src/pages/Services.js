import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../images/services/body_enhancement.jpg';
import image2 from '../images/services/chroma.jpg';
import image3 from '../images/services/crowd_multiplication.jpg';
import image4 from '../images/services/infilm_branding.jpg';
import image5 from '../images/services/rotoscoping.jpg';

const slideImages = [
    'src/services/body_enhancement.jpg',
    'src/services/body_enhancement.jpg',
    'src/services/body_enhancement.jpg'
];

const Services = () => {
    return (
        <div className="slide-container" id="services">
            <Slide>
                <div className="each-slide" style={{ backgroundSize: "100% 100vh", height: "100vh" }} >
                    <div style={{
                        'backgroundImage': `url(${image1})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${image2})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${image3})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${image4})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${image5})`, backgroundSize: "100% 100vh", height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Services