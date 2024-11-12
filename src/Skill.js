import { useState } from 'react';

function Skill({name, modifier, attributes, skillPoints, setSkillPoints}) {
    const modifierPoint = Math.floor((attributes[modifier] - 10) / 2);
    const [point, setPoint] = useState(0);

    const handleClick = (change) => {
        // points should not change when you have no skill points and you're trying to add some more, AND when you have no points in that skill but you're trying to subtract
        if (!(skillPoints == 0 && change == 1) && !(point == 0 && change == -1)) {
            setSkillPoints(prev => prev - change);
            setPoint(prev => prev + change);
        }
    }

    return (
        <div>
            {name}: {point} (Modifier: {modifier}): {modifierPoint}
            <button onClick={() => handleClick(1)}>+</button>
            <button onClick={() => handleClick(-1)}>-</button>
            Total: {point + modifierPoint}
        </div>
    )
}

export default Skill;