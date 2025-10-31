import React from 'react';

const pratos = [
  { id: 1, nome: 'Pizza Margherita', descricao: 'Molho de tomate, mussarela e manjericão' },
  { id: 2, nome: 'Lasanha Bolonhesa', descricao: 'Camadas de massa, carne e parmesão' },
  { id: 3, nome: 'Salada Caesar', descricao: 'Alface, croutons, parmesão e molho Caesar' }
];

export default function MenuApp() {
  function adicionarAoPedido(prato) {
    window.dispatchEvent(new CustomEvent('add-to-order', { detail: prato }));
  }

  return (
    <div>
      <h2>Cardápio</h2>
      <ul>
        {pratos.map(p => (
          <li key={p.id} style={{ marginBottom: 12 }}>
            <strong>{p.nome}</strong>
            <div>{p.descricao}</div>
            <button onClick={() => adicionarAoPedido(p)}>Adicionar ao pedido</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
