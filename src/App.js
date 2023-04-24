import './App.css';
import { add,sub,div,mul } from './components/Calc';



function App() {
  return (
   
    <>

   {add(5,4)}
   <br />
   {sub(5,4)}
   <br />
   {div(8,3)}
   <br />
   {mul(4,4)}


    
    </>

  );
}

export default App;
