import React, { Suspense } from 'react';

const RemoteMenu = React.lazy(() => import('menu/MenuApp'));
const RemoteOrder = React.lazy(() => import('order/OrderApp'));

export default function App() {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ flex: 1 }}>
        <Suspense fallback={<div>Carregando cardápio...</div>}>
          <RemoteMenu />
        </Suspense>
      </div>
      <div style={{ width: 320 }}>
        <Suspense fallback={<div>Carregando pedido...</div>}>
          <RemoteOrder />
        </Suspense>
      </div>
    </div>
  );
}
