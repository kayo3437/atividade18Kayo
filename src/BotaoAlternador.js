import React, { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h1>Contador: {numero}</h1>
      <button onClick={() => setNumero(numero + 1)}>+1</button>
      <button onClick={() => numero > 0 && setNumero(numero - 1)}>-1</button>
    </div>
  );
}

export default Contador;
