import React, { Component } from "react";

class NewComponent extends Component{
    render(){
        return (
            <>
                <div>
                    {this.props.someText}
                </div>
            </>
        );
    }
}

export default NewComponent;