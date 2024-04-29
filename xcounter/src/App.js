import './App.css';
import {useState} from 'react';

function App() {
  const[count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count + 1);
  };

  const handleDecrement = () =>{
    setCount(count - 1);
  };



  return (
    <div className="App">
      <div>
        <h1>Counter App</h1>
      </div>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
