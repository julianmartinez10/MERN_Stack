import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

const AllQuotes = () => {
    //  create variable to store info (array of objects (all quotes))
    const[quotes, setQuote] = useState([])

    useEffect(()=>{
//  get("api") comes from postman and quotes.routes.js 
    axios.get("http://localhost:8000/api/quotes")
        //  PROMISE
        .then(res =>{
            console.log("*********")
            console.log(res)
            console.log("*********")
            
            setQuote(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])
    

    return (
        <div className="container">
            {
                quotes.map((q, idx) =>{
                    return <div key={idx} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Author: {q.author}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Quoted On: {q.quotedOn}</h6>
                                <h4 className="card-text">Quote: {q.content}</h4>
                                <Link to={`/quotes/${q._id}`} className="card-link">View Details</Link>
                                {/* <a href="#!" className="card-link">Another Link</a> */}
                            </div>
                            </div>
                })
            }
        </div>
    );
};


export default AllQuotes;