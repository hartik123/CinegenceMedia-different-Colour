import React from 'react'
import stephen from '../images/stephen.jpg'

const CardComponent1 = () => {
    return (
        <div style={{backgroundColor: "#bbb", color: "#000",fontSize: "17px", width: "300px",margin: "20px", textAlign: "center", border: "3px solid #ccc", borderRadius: "10px"}}>
            <img src={stephen} alt="stephen" style={{padding: "10px"}}/>
            <p >20+ years of Experience, Advanced Imaging Society award winner for The Martian, Peoples person, a trained chef, basketball coach, a theatrical actor and a sports commentator for ESPN Star Sports in Singapore.</p>
        </div>
    )
}

export default CardComponent1;





