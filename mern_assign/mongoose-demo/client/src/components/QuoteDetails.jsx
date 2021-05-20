import React, {useState, useEffect} from 'react';
import axios from 'axios'

const QuoteDetails = (props) => {
    const [quoteDetail, setQuoteDetail] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${props.id}`)
        .then(res=>{
            console.log(res)
            setQuoteDetail(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <h1>{quoteDetail.author}</h1>
            <h6 className="text-muted">{props.id}</h6>
            <h3>{quoteDetail.content}</h3>
            <h5>{quoteDetail.quotedOn}</h5>
        </div>
    );
};


export default QuoteDetails;