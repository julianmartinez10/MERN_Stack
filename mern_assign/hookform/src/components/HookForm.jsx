import React, {useState} from 'react';
// import PropTypes from 'prop-types';

const HookForm = props => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    // const [email, setemail] = useState("");


    return (
        <div>
            <form className="offset-md-4 mt-4">
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">First Name</label>
                    <div className="col-sm-6">
                        <input onChange={e => setfirstName(e.target.value)} type="text" name="" id=""className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">Last Name</label>
                    <div className="col-sm-6">
                        <input onChange={e => setlastName(e.target.value)} type="text" name="" id=""className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">Email</label>
                    <div className="col-sm-6">
                        <input onChange={e=>setemail(e.target.value)} type="email" name="" id=""className="form-control"/>
                    </div>
                </div>
                <div className="form-group row" >
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">Password</label>
                    <div className="col-sm-6">
                        <input onChange={e=>setpassword(e.target.value)} type="password" name="" id=""className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-left">Confirm Password</label>
                    <div className="col-sm-6">
                        <input type="password" name="" id=""className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 ofset-sm-2">
                        <button type="submit" className="btn btn-primary">Create Person</button>
                    </div>
                </div>
            </form>
                <ul className="col-6 offset-md-4 list-group">
                    <p className="list-group-item-dark text-left">First Name: {firstName}</p>
                    <p className="list-group-item-light text-left">Last Name: {lastName}</p>
                    <p className="list-group-item-dark text-left">Email: {email}</p>
                    <p className="list-group-item-light text-left">Password: {password}</p>
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