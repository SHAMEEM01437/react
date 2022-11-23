import React from 'react-dom'
import {useState, useEffect} from 'react';
import axios from 'axios'
function About(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://demo4esl.com/dawadawa/api/guest-all-opportunity')
        .then(res => {
            setData(res.data.Opportunity);
        })
        .then(err => console.log(err))
    }, []);
    return(
        
        <section>
            {
                data.map(val => {
                    return(
                        <div className='key' key={val.id}>
                            <h1>{val.title}</h1>
                            <p>{val.oppr_type}</p>
                            <p>{val.business_name}</p>
                            <p>{val.services_type}</p>
                            <p>{val.business_mining_type}</p>
                            <p>{val.business_mining_block}</p>
                            <p>{val.description}</p>
                            <p>{val.mobile_num}</p>
                            <img src={val.image}></img>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default About;