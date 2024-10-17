import { useState } from "react";
import { EXAMPLES} from '../data';
import Button from "./Button";

function Examples() {
    let [state, setState] = useState('');

    function clickHandler(selectedButton) {
        setState(selectedButton)
     
      }

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
        
    )
}

export default Examples
