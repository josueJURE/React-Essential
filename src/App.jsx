


import {CORE_CONCEPTS} from "./data";

import CoreConcept from "./components/CoreConcepts";

import Header from "./components/Header";









function App() {
  return (
    <div>
    <Header />
  
      <main>
      <section id="core-concepts">
      <h2>Time to get started!</h2>
      </section>
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
      </main>
    </div>
  );
}

export default App;
