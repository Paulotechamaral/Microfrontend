import React, { useEffect, useState } from 'react';

export default function OrderApp() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const handler = (e) => setItens(prev => [...prev, e.detail]);
    window.addEventListener('add-to-order', handler);
    return () => window.removeEventListener('add-to-order', handler);
  }, []);

  return (
    <div>
      <h2>Pedido</h2>
      {itens.length === 0 ? <div>Pedido vazio</div> : (
        <ul>
          {itens.map((it, idx) => <li key={idx}>{it.nome} — {it.descricao}</li>)}
        </ul>
      )}
    </div>
  );
}
