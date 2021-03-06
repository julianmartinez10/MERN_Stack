import React, {useState} from 'react';
// import PropTypes from 'prop-types';

const HookForm = props => {

    // const [firstName, setfirstName] = useState("");
    // const [lastName, setlastName] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",

    })

    const changeHandler = (e)=>{
        console.log("changing input now")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitPerson = (e)=>{
        e.preventDefault();
        console.log(`What up world!!! Hi ${formInfo.firstName}`)
        setIsSubmitted(true);
    }


    return (
        <div>
            {isSubmitted? <h1 className="text-success">Thank You for Submitting</h1>: <h1 className="text-danger">Please Complete The Form</h1>}
            
            <form className="offset-md-4 mt-4" onSubmit={submitPerson}>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">First Name</label>
                    <div className="col-sm-6">
                        <input onChange={changeHandler} type="text" name="firstName" id=""className="form-control"/>
                        <p className="text-danger">{formInfo.length<2 && formInfo.length>0? `First Name needs still needs at least ${2-formInfo.length}  characters long!`: ""}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">Last Name</label>
                    <div className="col-sm-6">
                        <input onChange={changeHandler} type="text" name="lastName" id=""className="form-control"/>
                        <p className="text-danger">{formInfo.length<2 && formInfo.length>0? `Last Name still needs at least ${2-formInfo.length}  characters long!`: ""}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">Email</label>
                    <div className="col-sm-6">
                        <input onChange={changeHandler} type="email" name="email" id=""className="form-control"/>
                        <p className="text-danger">{formInfo.length<5 && formInfo.length>0? `Email still needs at least ${5-formInfo.length}  characters long!`: ""}</p>
                    </div>
                </div>
                <div className="form-group row" >
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">Password</label>
                    <div className="col-sm-6">
                        <input onChange={changeHandler} type="password" name="password" id=""className="form-control"/>
                        <p className="text-danger">{formInfo.length<8 && formInfo.length>0? `Password still needs at least ${8-formInfo.length}  characters long!`: ""}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">Confirm Password</label>
                    <div className="col-sm-6">
                        <input onChange={e=>setConfirmPassword(e.target.value)} type="password" name="" id=""className="form-control"/>
                        <p className="text-danger">{confirmPassword !== formInfo.password? `Confirmed password must match password!` : ""}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 ofset-sm-2">
                        <button type="submit" className="btn btn-primary">Create Person</button>
                    </div>
                </div>
            </form>
                <ul className="col-6 offset-md-4 list-group">
                    <p className="list-group-item-dark text-left">First Name: {formInfo.firstName}</p>
                    <p className="list-group-item-light text-left">Last Name: {formInfo.lastName}</p>
                    <p className="list-group-item-dark text-left">Email: {formInfo.email}</p>
                    <p className="list-group-item-light text-left">Password: {formInfo.password}</p>
                    <p className="list-group-item-light text-left">Confirm Password: {confirmPassword}</p>
                </ul>
        </div>
    );
};

HookForm.propTypes = {};

export default HookForm;




// import React, { useState } from  'react';
    
    
// const UserForm = (props) => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");  
    
//     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { username, email, password };
//         console.log("Welcome", newUser);
//     };
    
//     return(
//         <form onSubmit={ createUser }>
//             <div>
//                 <label>Username: </label> 
//                 <input type="text" onChange={ (e) => setUsername(e.target.value) } />
//             </div>
//             <div>
//                 <label>Email Address: </label> 
//                 <input type="text" onChange={ (e) => setEmail(e.target.value) } />
//             </div>
//             <div>
//                 <label>Password: </label>
//                 <input type="text" onChange={ (e) => setPassword(e.target.value) } />
//             </div>
//             <input type="submit" value="Create User" />
//         </form>
//     );
// };
    
// export default UserForm;