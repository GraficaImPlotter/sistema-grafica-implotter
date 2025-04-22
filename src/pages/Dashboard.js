import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: 200, background: '#222', color: '#fff', padding: 20 }}>
        <h2>Menu</h2>
        <ul>
          <li>Clientes</li>
          <li>Produtos</li>
          <li>Usuários</li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: 20 }}>
        <h1>Bem-vindo à Gráfica Implotter</h1>
        <p>Interface moderna em desenvolvimento</p>
      </main>
    </div>
  );
}
