
import image from  "./assets/react-core-concepts.png" ;
import componentImg from './assets/components.png'
import configPng from './assets/config.png'
import CORE_CONCEPTS from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core", "Vital"];

function generateRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescriptions[generateRandomInteger(reactDescriptions.length -1)];

  return (  <header>
    <img src={image} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}


function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}



function App() {
  return (
    <div>
    <Header></Header>
  
      <main>
      <section id="core-concepts">
      <h2>Time to get started!</h2>
      </section>
      <ul>
      <CoreConcept 
      title={CORE_CONCEPTS[0].title} 
      description ={CORE_CONCEPTS[0].description} 
      img={CORE_CONCEPTS[0].image} 
       />

      <CoreConcept 
      title={CORE_CONCEPTS[1].title} 
      description ={CORE_CONCEPTS[1].description} 
      img={CORE_CONCEPTS[1].image} 
       />

      <CoreConcept 
      title={CORE_CONCEPTS[2].title} 
      description ={CORE_CONCEPTS[2].description} 
      img={CORE_CONCEPTS[2].image} 
       />
      </ul>
      </main>
    </div>
  );
}

export default App;
