import React from 'react'
import CardComponent from '../component/CardComponent';
import {useHistory} from 'react-router-dom';

const OwnerInformation = () => {
    const history = useHistory();
    return (
        <div style= {{display: "flex",paddingLeft:"4rem", backgroundColor: "black"}}>
        <div style={{minHeight: "100vh", display: "inline-block"}}>
            <button style={{color: "white", backgroundColor:"black", borderRadius: "1rem", margin:"1rem"}} onClick={()=>history.goBack()}>Go back</button>
            <CardComponent />
        </div>
        <div style= {{paddingTop: "3rem", margin: "0px auto"}}>
            
            <div style={{textAlign: "center"}}>
            <h1 style= {{color:"white"}}>Stephen Mascarenhas</h1>
            <h3 style= {{color:"#666666",marginLeft:"1px auto"}} >Founder and CEO</h3>
            </div>
            <p style = {{fontFamily:"serif",fontSize:"20px",color:"GrayText" ,width: "60%",margin: "1rem auto", textAlign:"center"}}>20+ years of Experience, Advanced Imaging Society award winner for The Martian, Peoples person, a trained chef, basketball coach, a theatrical actor and a sports commentator for ESPN Star Sports in Singapore. </p>
            
        
        </div>
        </div>
    )
}

export default OwnerInformation;
