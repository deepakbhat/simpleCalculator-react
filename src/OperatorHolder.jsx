import React from 'react'; 
import Button from './Button'; 

const OperatorHolder = (props) => 
{
    const updateButton = (buttonLabel) => 
    {
        console.log(buttonLabel);
        props.updateButtonsPressed(buttonLabel); 
    }
    
    return (
        <div>
            <Button label="+" updateButton={updateButton} />
            <Button label="-" updateButton={updateButton} />
        </div>
    );
}; 
export default OperatorHolder;