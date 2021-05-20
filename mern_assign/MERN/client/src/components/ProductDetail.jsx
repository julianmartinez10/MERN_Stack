import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const ProductDetail = (props) => {
    const[prodDetail, setProdDetail] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=>{
            console.log(res)
            setProdDetail(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])

    const clickDelete=()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${props.id}`)
        .then(res=>{
            console.log("Here's the response: ", res)
            navigate("/")
        })
    }

    return (
        <div className="container text-center mt-4">
            <Link to={"/"} className="btn btn-dark">Home</Link>
            <div>
            <h1>{prodDetail.title}</h1>
            <h3>{prodDetail.description}</h3>
            <h5>{prodDetail.price}</h5>
            </div>
            <Link to={`/products/edit/${props.id}`} className="btn btn-warning m-4">Edit Product</Link>
            <Link to={"#!"} onClick={clickDelete} className="btn btn-danger m-4">Remove Product</Link>
        </div>
        
    );
};


export default ProductDetail;