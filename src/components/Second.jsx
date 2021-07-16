import React from 'react';

const Second = props => {
    if( props.input == "home" ) {
        return <h1> Welcome Home! </h1>
    }

    return isNaN( props.input )

    ? <h1> The word is: { props.input } </h1>
    : <h1> The number is: {props.input} </h1>
    
}

export default Second;