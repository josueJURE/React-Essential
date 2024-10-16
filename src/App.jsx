


import {CORE_CONCEPTS} from "./data";

import { EXAMPLES} from './data'



import CoreConcept from "./components/CoreConcepts";

import Header from "./components/Header";

import Button from "./components/Button";

import { useState } from "react";

function App() {

  let [state, setState] = useState('')



  function clickHandler(selectedButton) {
    setState(selectedButton)
 
  }

  console.log("APP excecution rendering")

  let tabContent = <p>Please select a content.</p>;

  if(state) {
    tabContent = 
    <div id="tab-content">
      <h3>{EXAMPLES[state].title}</h3>
      <p>{EXAMPLES[state].description}</p>
      <pre>
        <code>{EXAMPLES[state].code}</code>
      </pre>
      </div>

    
  }



  return (
    <div>
    <Header />
  
      <main>
      <section id="core-concepts">
      <h2>Time to get started!</h2>
      
      <ul>

      {CORE_CONCEPTS.map((concept) => {
        <CoreConcept 
        image={concept.image}
        title={concept.title}
        description={concept.description}
        
           /> 

      })
      
      }

   
  

      {/* <CoreConcept 
      {...CORE_CONCEPTS[0]} 
     
       />

      <CoreConcept 
      {...CORE_CONCEPTS[1]} 
    
       />

      <CoreConcept 
      {...CORE_CONCEPTS[2]}  */}
     
     
      </ul>
      </section>
      <section id="examples">
      <h2>Examples</h2>
      <menu>



      <Button isSlected={state === "components"} onSelect={() => clickHandler("components")}>Components</Button>
      <Button isSlected={state === "jsx"} onSelect={() => clickHandler("jsx")}>JSX</Button>
      <Button isSlected={state === "props"} onSelect={() => clickHandler("props")}>Props</Button>
      <Button isSlected={state === "state"} onSelect={() => clickHandler("state")}>State</Button>
      </menu>
      {tabContent}
      </section>
      </main>
    </div>
  );
}

export default App;
