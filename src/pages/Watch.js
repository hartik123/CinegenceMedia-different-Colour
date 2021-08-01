import React from 'react'
import './Watch.css'

const Watch = () => {
    return (
//         {/* <div  className="iframe-container"> 
//     <iframe width="100vw" height="100vw" src="https://www.youtube.com/embed/_n9MPF3PLSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//    </div>      */}


        // <div style={{width: "auto", height: "100vh"}} className="embed-responsive embed-responsive-16by9" >
        //     <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_n9MPF3PLSI" allowfullscreen />
           
        // </div >

        <>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/_n9MPF3PLSI" frameborder="0" allowfullscreen></iframe>
  <div class="overlay">
    <h1>Youtube Video Autoplay</h1>
    <p>Youtube Video overlay example.</p>
    <p>View <a target="_BLANK" href="https://codepen.io/doddsy105/full/rtcbE/">fullscreen</a> for best experience.</p>
    
  </div>
  </>
    )
}

export default Watch
