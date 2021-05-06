//  similar to Class but {Component} is not needed
import React from 'react';

const PersonCard = props => {

    const {firstName: first, lastName: last, age, hairColor} = props 

    return(
        <div className="personCard col-4 offset-4 card mt-4">
            <div className="card-body">
                <h1 className="card-title text-center">{first} {last}</h1>
                <p className="card-text">Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button className="btn btn-primary" >Birthday Button for {first} {last} </button>
            </div>
        </div>
    );
}
export default PersonCard;




