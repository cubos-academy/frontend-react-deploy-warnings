import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [numberType, SetNumberType] = useState(0);

  function handleSetNumberType() {
    if (count % 2 !== 0) {
      return SetNumberType(`Número impar`);
    }

    SetNumberType(`Número par`);
  }

  useEffect(() => {
    handleSetNumberType();
  }, [count]);

  return (
    <div className="container">
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h1>
          {count}
        </h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <h1>{numberType}</h1>
    </div>
  );
}

export default App;
