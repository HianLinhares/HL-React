import { useState } from "react";

// State (Estado)
function App() {
  const [message, setMessage] = useState('Olá mundo')
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Botão clicado por Hian Linhares")
        }}
      >
        mudar mensagem
      </button>
    </div>
  );
}






export default App;
