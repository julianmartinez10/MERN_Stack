import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { navigate, Link } from '@reach/router';


const CreateProduct = (props) => {
    const [formInfo, setFormInfo] = useState({
        title: "",
        description: "",
        price:"",
    })

    const[products, setProducts] = useState([])

    const[errors, setErrors] = useState({})

    const changeHandler = (e)=>{
        console.log("Inputting Info")
        // console.log(e.target.value)
        // console.log(e.target.name)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log("Submitting")
        axios.post("http://localhost:8000/api/products/create", formInfo)
        .then(res=>{
            console.log("You just submitted the following info:", res)
            if(res.data.results){
                navigate("/")
            }else{
                setErrors(res.data.errors)
                console.log(setErrors)
            }
        })
        .catch(err=>console.log("Error", err))
        
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res)
            setProducts(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])

    return (
        <div className="container">
            <Link to={'/'}>Home</Link>
            <form onSubmit={submitHandler} >
                <div className="form-group text-left">
                    <label>Product Title</label>
                    {errors.title? <p className="text-danger">{errors.title.message}</p>: ""}
                    {/* <p className="text-danger">{errors.title.messages}</p> */}
                    <input onChange={changeHandler} type="text" className="form-control" name="title"/>
                </div>
                <div className="form-group text-left">
                    <label>Product Description</label>
                    {errors.description? <p className="text-danger">{errors.description.message}</p>: ""}
                    <textarea onChange={changeHandler} name="description" cols="30" rows="5" className="form-control"></textarea>
                    {/* <input type="text" className="form-control" name=""/> */}
                </div>
                <div className="form-group text-left">
                    <label>Product Price</label>
                    {errors.price? <p className="text-danger">{errors.price.message}</p>: ""}
                    {/* <textarea name="description" cols="30" rows="5" className="form-control"></textarea> */}
                    <input onChange={changeHandler} type="text" className="form-control" name="price"/>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
            <h1 className="m-4">All Products:</h1>
            <div className="container">
                {
                    products.map((prod, idx)=>{
                        return <ul key={idx} className="list-group">
                <Link to={`/products/${prod._id}`} className="list-group-item text-center">{prod.title}</Link>
            </ul>
                    })
                }
            </div>
        </div>
    );
};


export default CreateProduct;