
import { CORE_CONCEPTS } from "../data";

function CoreConcept() {
    return (
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

  
      </ul>
      </section>
      
   
    );
  }


  export default CoreConcept