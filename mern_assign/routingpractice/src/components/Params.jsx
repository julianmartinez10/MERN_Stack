import React from 'react';

const Params = (props) => {
    return (
        <div className="container mt-4">
            {
                isNaN(props.id)?
                <h3 style={{color:props.wc, backgroundColor:props.bc}}>The Word Is {props.id} </h3> : <h3 style={{color:props.wc, backgroundColor:props.bc}}>The Number Is: {props.id}</h3>
            }
        </div>
    );
};


export default Params;