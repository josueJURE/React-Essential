


import {CORE_CONCEPTS} from "./data";

import { EXAMPLES} from './data'



import CoreConcept from "./components/CoreConcepts";

import Header from "./components/Header";

import Button from "./components/Button";

import { useState } from "react";

function App() {

  let [state, setState] = useState('components')

  // let text = "please click a button"

  function clickHandler(selectedButton) {
    setState(selectedButton)
 
  }

  console.log("APP excecution rendering")



  return (
    <div>
    <Header />
  
      <main>
      <section id="core-concepts">
      <h2>Time to get started!</h2>
      
      <ul>
      <CoreConcept 
      {...CORE_CONCEPTS[0]} 
     
       />

      <CoreConcept 
      {...CORE_CONCEPTS[1]} 
    
       />

      <CoreConcept 
      {...CORE_CONCEPTS[2]} 
     
       />
      </ul>
      </section>
      <section id="examples">
      <h2>Examples</h2>
      <menu>
      <Button onSelect={() => clickHandler("components")}>Components</Button>
      <Button onSelect={() => clickHandler("jsx")}>JSX</Button>
      <Button onSelect={() => clickHandler("props")}>Props</Button>
      <Button onSelect={() => clickHandler("state")}>State</Button>
      </menu>
      <div id="tab-content">
      <h3>{EXAMPLES[state].title}</h3>
      <p>{EXAMPLES[state].description}</p>
      <pre>
        <code>{EXAMPLES[state].code}</code>

      </pre>


      </div>


      



      </section>
      </main>
    </div>
  );
}

export default App;
