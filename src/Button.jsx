import React from 'react';



const Button = (props) => {

    const onClick = () => {
        props.updateButton(props.label);
    }

    return (
        <div>
            <button onClick={onClick} > {props.label} </button>
        </div>
    );
};

export default Button; 