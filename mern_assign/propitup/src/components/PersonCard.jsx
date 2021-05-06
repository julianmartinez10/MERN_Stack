// import React, { Component } from 'react';


// class SomeClassComponent extends Component {
//     render() {
//         return <div>This is our first class component.</div>;
//     }
// }

// export default SomeClassComponent;
import React, {Component} from 'react';

class PersonCard extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         position: "On"
    //     };
    // }
    constructor(props){
        super(props);
        this.state = {
            ageCount: this.props.age
        };
    }

    render(){
        const {firstName: first, lastName: last, hairColor, children} = this.props;
        const doSomething = ()=>{
            this.setState({ageCount: this.state.ageCount += 1})
            alert(`Happy Birthday ${first} ${last}`)
        }
        const {ageCount} = this.state
        return <div className="cardName">
            <h1>{first} {last}</h1>
            <p>Age: {ageCount}</p>
            <p>Hair Color: {hairColor}</p>
            <p>{children}</p>
            <button onClick={ doSomething }>Birthday Button for {first} {last}</button>
        </div>
    }
}

export default PersonCard;

//  onClick is the "Event Listener"
//  anything set in State cannot be modified unless using setState