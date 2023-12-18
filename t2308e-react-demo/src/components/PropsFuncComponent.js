import React from "react";

const PropsFuncComponent = (props) => {
    console.log(this.props);
        return (
            <div>
                <p>My Name : {this.props.name} , {this.props.age} , 
                live in {this.props.address} , class : {this.props.className}</p>
            </div>
        )
}