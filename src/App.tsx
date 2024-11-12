import { useState, useEffect } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';
import Attribute from './Attribute';
import CharacterClass from './CharacterClass';
import Skill from './Skill';


function App() {
  // starting values of 10 for each attribute
  const start = {};
  ATTRIBUTE_LIST.map(attribute => start[attribute] = 10);
  const [attributes, setAttributes] = useState(start);

  // requirement 6, fetch get request incomplete, need to await for request to finish before rendering components
  // const [attributes, setAttributes] = useState({});
  // useEffect(() => {
  //   fetch('https://recruiting.verylongdomaintotestwith.ca/api/{peterdang1502}/character', {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((result) => setAttributes(result.rows))
  // }, [])

  // each time an attribute's point changes, this is the callback function that is passed to the attribute component
  const handleChange = (attributeName: string, num: number) => {
    let total = 0;
    for (const key in attributes) {
      total = total + attributes[key];
    }
    if (total < 70) {
      setAttributes({...attributes, [attributeName]: num});
    } else {
      alert('Total attributes maxed out at 70');
    }
  }

  // 10 + 4 * intelligence modifier
  const [skillPoints, setSkillPoints] = useState(10 + 4 * Math.floor((attributes['Intelligence'] - 10) / 2));
  // reload component to update total available skillpoints whenever attributes has changed
  useEffect(() => {
    setSkillPoints(10 + 4 * Math.floor((attributes['Intelligence'] - 10) / 2));

    // requirement 6, fetch post request incomplete
    // fetch('https://recruiting.verylongdomaintotestwith.ca/api/{peterdang1502}/character', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(attributes),
    // })
    //   .catch((err) => console.log('error'));
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
