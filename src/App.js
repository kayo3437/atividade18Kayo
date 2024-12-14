import React from 'react';
import Contador from './Contador';
import BotaoAlternador from './BotaoAlternador';
import ListaDeTarefas from './ListaDeTarefas';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Hooks --- Exercício</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Exercício 1: Contador</h2>
        <Contador />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Exercício 2: Botão Alternador</h2>
        <BotaoAlternador />
      </section>

      <section>
        <h2>Exercício 3: Lista de Tarefas</h2>
        <ListaDeTarefas />
      </section>
    </div>
  );
}

export default App;
