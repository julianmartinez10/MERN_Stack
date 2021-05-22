import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const EditProduct = (props) => {
    const [prodInfo, setProdInfo] = useState({
        title: "",
        description: "",
        price:""
    })

    const[errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=>{
            console.log(res)
            setProdInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])

    const updateProd = (e) =>{
        e.preventDefault()
        console.log("SUBMITTING")
        axios.put(`http://localhost:8000/api/products/update/${props.id}`, prodInfo)
        .then(res=>{
            console.log("Here's the submitted res info: ", res)
            if(res.data.results){
                navigate("/")
            }else{
                setErrors(res.data.errors)
                console.log(setErrors)
            }
        })
        .catch(err=>console.log("Error!", err))
    }

    const changeProd = (e) =>{
        console.log("Updating Info")
        setProdInfo({
            ...prodInfo,
            [e.target.name]:e.target.value
        })
    }


    return (
        <div className="container text-center">
            <Link to="/"> Home </Link>
            {/* <Link to="/" className="btn btn-dark mt-4">Home
            </Link> */}
            <h1 className="mt-2">Edit Product</h1>
            <form onSubmit={updateProd}>
                <div className="form-group text-left">
                    <label>Product Title</label>
                    {errors.title? <p className="text-danger">{errors.title.message}</p>: ""}
                    <input onChange={changeProd} type="text" className="form-control" name="title" value={prodInfo.title}/>
                </div>
                <div className="form-group text-left">
                    <label>Product Description</label>
                    {errors.description? <p className="text-danger">{errors.description.message}</p>: ""}
                    <textarea onChange={changeProd} name="description" cols="30" rows="5" className="form-control" value={prodInfo.description}></textarea>
                </div>
                <div className="form-group text-left">
                    <label>Product Price</label>
                    {errors.price? <p className="text-danger">{errors.price.message}</p>: ""}
                    <input onChange={changeProd} type="text" className="form-control" name="price" value={prodInfo.price}/>
                </div>
                <input className="btn btn-info" type="submit" value="Update" />
            </form>

        </div>
    );
};


export default EditProduct;


