


import {CORE_CONCEPTS} from "./data";

import CoreConcept from "./components/CoreConcepts";

import Header from "./components/Header";

import Button from "./components/Button";












function App() {
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
      <Button>Components</Button>
      <Button>JSX</Button>
      <Button>Props</Button>
      <Button>State</Button>

      </menu>


      </section>
      </main>
    </div>
  );
}

export default App;
