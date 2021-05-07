//  similar to Class but {Component} is not needed
import React, {useState} from 'react';

const PersonCard = props => {
//  function body
    //  initialize my state variables
    const [ageCount, setAgeCount] = useState(props.age) 
    const {firstName: first, lastName: last, hairColor} = props

    const birthday = () =>{
        setAgeCount(ageCount+1);
        alert(`Happy Birthday ${first}`)
    }



    return(
        <div className="personCard col-4 offset-4 card mt-4">
            <div className="card-body">
                <h1 className="card-title text-center">{first} {last}</h1>
                <p className="card-text">Age: {ageCount}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={birthday}>Birthday Button for {first} {last} </button>
            </div>
        </div>
    );
}
export default PersonCard;




