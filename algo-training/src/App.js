import './App.css';
import { useState} from "react";


function App() {

  var [result, setResult] = useState(null);
  var [actualNumber, setActualNumber] = useState(null);
  var [currentSymbol, setCurrentSymbol] = useState(null);
  var [isFirstIteration, setIsFirstIteration] = useState(true);

  function add_number(number){
    if(isFirstIteration){
      if(actualNumber == null){
        setActualNumber(number)
        setResult(number)     
      } else if(actualNumber !== null){
        var newNumber = null;
        newNumber = actualNumber+''+number;
        setActualNumber(newNumber)
        setResult(newNumber)  
      }  
    } if(!isFirstIteration){
        if(actualNumber == null){
          setActualNumber(number)
          setResult(result+''+number)     
        } else if(actualNumber !== null){
          var newNumber = null;
          newNumber = actualNumber+''+number;
          setActualNumber(newNumber)
          setResult(result + ''+number)  
        }  
    }
  }

  function calculate(){
    const newArray = result.toString().replace(/\s/g, "");
    setResult(eval(newArray))
  }


  function operation(operator){
    setActualNumber(null)
    setIsFirstIteration(false)
    if(currentSymbol === null){
      setCurrentSymbol(null)
      setResult(result+' '+operator+' ')
    } 
  }


  function erase(){
    setIsFirstIteration(true)
    setResult(null);
    setActualNumber(null);
    setCurrentSymbol(null);
  }


  return (
    <div className="App">
      <div className="Calculator_tab">
        <div className="Number" onClick={() => add_number(1)}>1</div><div className="Number" onClick={() => add_number(2)}>2</div><div className="Number" onClick={() => add_number(3)}>3</div><div className="Number" onClick={() => add_number(4)}>4</div><div className="Number" onClick={() => add_number(5)}>5</div><div className="Number" onClick={() => add_number(6)}>6</div><div className="Number" onClick={() => add_number(7)}>7</div><div className="Number" onClick={() => add_number(8)}>8</div><div className="Number" onClick={() => add_number(9)}>9</div><div className="Number" onClick={() => add_number(0)}>0</div>
        <div className="Operation" onClick={() => operation('+')}>+</div><div className="Operation" onClick={() => operation('-')}>-</div><div className="Operation" onClick={() => operation('*')}>*</div><div className="Operation" onClick={() => operation('/')}>/</div><div className="Equal" onClick={() => calculate()}>=</div><div className="Erase" onClick={() => erase()}>CE</div>
      </div>  
      <div className="Result">RESULT : {result == null ? 0  : result}</div>   
    </div>
  );

}

export default App;
