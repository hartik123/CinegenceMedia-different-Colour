import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Reels from './Reels'
import { useParams, useHistory, Link } from 'react-router-dom';

const ReelInformation = () => {
    const { _id } = useParams();
    const history = useHistory();

    // useEffect(()=>{
    //     fetch('')
    //     .then(res=>res.json(`https://picsum.photos/200/300?random=${_id}`))
    //     .then(data=>setUrl(data))
    //     .catch(err=> console.log(err.data));
    // })
    return (
        <div>
            <button style={{ color: "white", backgroundColor: "black", borderRadius: "1rem", margin: "1rem" }} onClick={() => history.push("/")}>Go back</button><br />

            <Link to="/reels/4/watch">
                <div style={{ backgroundColor: "black", borderRadius: "1rem", margin: "1rem", display: "flex", justifyContent: "space-between" }}>

                    <div style={{ color: "white", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                            <h2>Loki</h2>
                            <p>1 season . 6 Episode . SuperHero . 12+ . Marvel</p>
                            <p>Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will</p>
                        </div>
                        <div>

                            <FaPlay style={{ fontSize: "2rem" }} />
                        </div>
                    </div>

                    <div style={{ textAlign: "right" }}>
                        <img src={`https://picsum.photos/700/400?random=${_id}`} style={{
                            margin:
                                "1rem", marginLeft: "1rem"
                        }} />
                    </div>

                </div>
            </Link>





            <Reels />

        </div>
    )
}

export default ReelInformation
