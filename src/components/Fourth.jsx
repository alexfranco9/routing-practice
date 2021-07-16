import React from 'react';

const Fourth = props => {
    const style = {
        color: props.color,
        backgroundColor: props.backgroundColor
    }

    return(

            <h1 style={ style }> The Word is: {props.str} </h1>

    );
}

export default Fourth;