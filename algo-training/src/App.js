import './App.css';
import { useState, useEffect} from "react";

/*
function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = "93e10350";
  const YOUR_APP_KEY = "c07de1e628813f16e9c7909e450224c7"; 
  var url = "https://api.edamam.com/search?q="+query+"&app_id="+YOUR_APP_ID+"&app_key="+YOUR_APP_KEY;

  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
      <h1 onClick={getRecipes}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input className="app__input" type="text" placeholder="enter ingredient" value={query} onChange={(e) =>setquery(e.target.value)}/>
        <input className="app__submit" type="submit" value="Search"/>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe, index) => {
         return <RecipeTile key={index} recipe={recipe}/>;
        })}
      </div>

    </div>
  );
}

export default App;
*/



function App() {

  var [result, setresult] = useState(null);
  var [precalculated, setprecalculated] = useState(null);
  var [firstNumber, setfirstNumber] = useState(null);
  var [secondNumber, setsecondNumber] = useState(null);
  var [currentSymbol, setcurrentSymbol] = useState(null);


  function add_number(number){


    if(secondNumber !== null){
      var newNumber = null;
      newNumber = secondNumber+''+ number;
      setsecondNumber(newNumber)
      setresult(firstNumber+currentSymbol+newNumber)
    } 
    if(secondNumber === null && firstNumber !== null){
      setsecondNumber(number)
      setresult(firstNumber+currentSymbol+newNumber)
    } 

    if(firstNumber === null ){
      setfirstNumber(number)
      setresult(number)
    } else if(firstNumber !== null && currentSymbol === null){
      var newNumber = null;
      newNumber = firstNumber+''+ number;
      setfirstNumber(newNumber)
      setresult(newNumber)
    } 

  }

  function calculate(){
    /*
   if(currentNumber !== null && currentSymbol !== null){
      if(currentSymbol === '+'){

      }
      if(currentSymbol === '-'){

      }
      if(currentSymbol === '*'){

      }
      if(currentSymbol === '/'){

      }
    }
    */
  }

  function operation(operator){
    if(currentSymbol === null){
      setcurrentSymbol(operator)
      setresult(result+operator)
    } else{




    }




  }


  function erase(){
    setresult(null);
    setfirstNumber(null);
    setsecondNumber(null);
    setcurrentSymbol(null);
  }


  return (
    <div className="App">
      <div className="Calculator_tab">
        <div className="Number" onClick={() => add_number(1)}>1</div><div className="Number" onClick={() => add_number(2)}>2</div><div className="Number" onClick={() => add_number(3)}>3</div><div className="Number" onClick={() => add_number(4)}>4</div><div className="Number" onClick={() => add_number(5)}>5</div><div className="Number" onClick={() => add_number(6)}>6</div><div className="Number" onClick={() => add_number(7)}>7</div><div className="Number" onClick={() => add_number(8)}>8</div><div className="Number" onClick={() => add_number(9)}>9</div><div className="Number" onClick={() => add_number(0)}>0</div>
        <div className="Operation" onClick={() => operation('+')}>+</div><div className="Operation" onClick={() => operation('-')}>-</div><div className="Operation" onClick={() => operation('*')}>*</div><div className="Operation" onClick={() => operation('/')}>/</div><div className="Equal" onClick={() => calculate()}>=</div><div className="Operation" onClick={() => erase()}>CE</div>
      </div>  
      <div className="Result">RESULT : {result == null ? 0  : result}</div>   
    </div>
  );

}

export default App;
