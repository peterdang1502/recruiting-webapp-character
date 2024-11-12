import { useState, useEffect } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';
import Attribute from './Attribute';
import CharacterClass from './CharacterClass';


function App() {
  const start = {};
  ATTRIBUTE_LIST.map(attribute => start[attribute] = 0);
  const [attributes, setAttributes] = useState(start);

  const handleChange = (attributeName: string, num: number) => {
    setAttributes({...attributes, [attributeName]: num});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">

        {ATTRIBUTE_LIST.map(attribute => <Attribute key={attribute} attributeName={attribute} attributes={attributes} handleChange={handleChange} />)}

        {Object.entries(CLASS_LIST).map(([k, v]) => (
          <CharacterClass key={k} className={k} classAttributes={v} attributes={attributes}/>
        ))}

      </section>
    </div>
  );
}

export default App;
