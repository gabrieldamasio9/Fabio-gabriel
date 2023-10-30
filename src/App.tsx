import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <img src={reactLogo} alt="React Logo" />
        <button onClick={handleIncrement}>Incrementar</button>
        <p>Contagem: {count}</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Conteúdo do cartão */}
      </div>
    </>
  );
}

export default App;