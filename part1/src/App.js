
import './App.css';
import Mensaje from './Mensaje.js';
import Conparametro from './Conparametro';
const Componente = () => {
  return <h1> Desde el componente </h1>
}

function App() {
  const mensaje1 ="Hola Mundo"
  const a = 2
  const b = 7
  return (
    <div className="App">
       {mensaje1 + "con react"}
       <br/>
       {a + b}
       <br />
       <Componente />
       <Componente></Componente>
       <Mensaje />
       <Conparametro color = 'red' message = 'Estamos Trabajando' />
       <Conparametro color = 'green' message = 'en un curso' />
       <Conparametro color = 'yellow' message = 'de react' />
      
    </div>
  );
}

export default App;
