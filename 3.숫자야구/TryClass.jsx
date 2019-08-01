import React, { Component } from 'react';

class TryClass extends Component {
    render(){
        const { tryInfo } = this.props;
        return(
            <li><span>{tryInfo.try} : {tryInfo.result}</span></li>
        );
    }
}

export default TryClass;