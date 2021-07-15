import React from 'react'
import {useParams, useHistory} from 'react-router-dom';

const ReelInformation = () => {
    const {_id} = useParams();
    const history = useHistory();

    // useEffect(()=>{
    //     fetch('')
    //     .then(res=>res.json(`https://picsum.photos/200/300?random=${_id}`))
    //     .then(data=>setUrl(data))
    //     .catch(err=> console.log(err.data));
    // })
    return (
        <div>
             <button style={{color: "white", backgroundColor:"black", borderRadius: "1rem", margin:"1rem"}} onClick={()=>history.goBack()}>Go back</button><br />
            <img src={`https://picsum.photos/200/300?random=${_id}`} />
            
        </div>
    )
}

export default ReelInformation
