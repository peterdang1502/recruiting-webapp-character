import { useState } from 'react';

function CharacterClass({className, classAttributes, attributes}) {
    // check if current attribute points meet the class requirement
    let met = true;
    Object.entries(classAttributes).map(([k, v]) => {
        if (attributes[k] < classAttributes[k]) met = false;
    });

    // state boolean for displaying class requirements, changed when clicked on class name
    const [display, setDisplay] = useState(false);

    return (
        <div>
            <p style={{color: met ? 'red' : 'white'}} onClick={() => setDisplay(prev => !prev)}>{className}</p>
            {display && 
                <div>
                    {Object.entries(classAttributes).map(([k ,v]) => {
                        return <div key={k}>{k}:{v}</div>;
                    })}
                </div>
            }
        </div>
    );
};

export default CharacterClass;