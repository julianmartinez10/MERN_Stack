import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

const Main = () => {
    const[products, setProducts] = useState([])
    const[deleteProd, setDeleteProd] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log("Here is response: ", res)
            setProducts(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [deleteProd])

    const deleteHandler=(e, prodID)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${prodID}`)
        .then(res=>{
            console.log("Here's the response: ", res)
            setDeleteProd(!deleteProd)
        })
        .catch(err=>console.log(err))
    }


    return (
        <div className="container">
            <Link to={'/products/new'} className="btn btn-primary m-4">New Product</Link>
            {
                products.map((prod, idx) =>{
                    return <ul key={idx} className="list-group">
                        <li className="list-group-item">
                        <Link to={`/products/${prod._id}`} className="text-center">{prod.title}</Link><br />
                        <Link to={"#!"} onClick={(e)=>deleteHandler(e, prod._id)} className="text-danger">Remove Product</Link>
                        </li>
                    </ul>
                })
            }
        </div>
    );
};


export default Main;