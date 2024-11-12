import { useState } from 'react';

function Attribute({attributeName, attributes, handleChange}) {
    const handleClick = (change) => {
        handleChange(attributeName, attributes[attributeName] + change < 0 ? 0 : attributes[attributeName] + change);
    };

    return (
        <div>
            {attributeName}:
            {attributes[attributeName]}
            Modifier:{Math.floor((attributes[attributeName] - 10) / 2)}
            <button onClick={() => handleClick(1)}>+</button>
            <button onClick={() => handleClick(-1)}>-</button>
        </div>
    );
} 

export default Attribute;