import ReactDOM from 'react-dom';



const rootElement = document.getElementById('root');

const App = (props)=>{
  return <h1>{ props.contadorInicia}</h1>
}

let contador = 0;
 const refresh = () =>{
  ReactDOM.render(<App contadorInicia = {contador} />, rootElement);
 }

 setInterval( ()=>{
  contador++;
  refresh();
 }, 1000);
/*
let contador = 3;

ReactDOM.render(<App contadorInicia = {contador} />, rootElement);
 
contador++;

ReactDOM.render(<App contadorInicia = {contador} />, rootElement);

contador++;

ReactDOM.render(<App contadorInicia = {contador} />, rootElement);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

