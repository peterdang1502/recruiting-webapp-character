import { useState } from 'react';

function CharacterClass({className, classAttributes, attributes}) {
    let met = true;
    Object.entries(classAttributes).map(([k, v]) => {
        if (attributes[k] < classAttributes[k]) met = false;
    });

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