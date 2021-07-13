import React from 'react'
import { useState, useEffect } from 'react';
import './Slider.css';


const Slider = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
            .then(res => res.json())
            .then(data => { setImages(data) })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="main_div">
            <b><h4 style={{color: "#fff", paddingLeft: "1rem"}}>{props.title}</h4></b>
            <div className="center_div">
                {
                    images.map((imageUrl) => {
                        console.log(imageUrl)
                        return (<div className="content_img">
                            <img className="images" key={imageUrl.id} src={`https://picsum.photos/200/300?random=${imageUrl.id}`} />
                            <div>
                                {imageUrl.title}
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Slider;