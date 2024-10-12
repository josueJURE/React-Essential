import image from  "../assets/react-core-concepts.png" ;


function generateRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1))
}

const description = reactDescriptions[generateRandomInteger(reactDescriptions.length -1)];



const reactDescriptions = ["Fundamental", "Crucial", "Core", "Vital"];

function Header() {


  return (  <header>
    <img src={image} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}


export default Header



 