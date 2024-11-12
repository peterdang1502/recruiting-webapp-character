import { useState, useEffect } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';
import Attribute from './Attribute';
import CharacterClass from './CharacterClass';
import Skill from './Skill';


function App() {
  // starting values of 0 for each attribute
  const start = {};
  ATTRIBUTE_LIST.map(attribute => start[attribute] = 0);
  const [attributes, setAttributes] = useState(start);

  // each time an attribute's point changes, this is the callback function that is passed to the attribute component
  const handleChange = (attributeName: string, num: number) => {
    setAttributes({...attributes, [attributeName]: num});
  }

  // 10 + 4 * intelligence modifier
  const [skillPoints, setSkillPoints] = useState(10 + 4 * Math.floor((attributes['Intelligence'] - 10) / 2));
  // reload component to update total available skillpoints whenever attributes has changed
  useEffect(() => {
    setSkillPoints(10 + 4 * Math.floor((attributes['Intelligence'] - 10) / 2));
  }, [attributes]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <h1>Attributes</h1>
        {ATTRIBUTE_LIST.map(attribute => <Attribute key={attribute} attributeName={attribute} attributes={attributes} handleChange={handleChange} />)}

        <h1>Classes</h1>
        {Object.entries(CLASS_LIST).map(([k, v]) => (
          <CharacterClass key={k} className={k} classAttributes={v} attributes={attributes}/>
        ))}

        <h1>Skills</h1>
        <p>Total skill points available: {skillPoints}</p>
        {SKILL_LIST.map(skill => <Skill key={skill.name} name={skill.name} modifier={skill.attributeModifier} attributes={attributes} skillPoints={skillPoints} setSkillPoints={setSkillPoints}/>)}

      </section>
    </div>
  );
}

export default App;
