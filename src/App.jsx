import React from 'react';
    import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

    const data = [
      { name: 'Logement', value: 500, color: '#FFBB28' },
      { name: 'Loisirs', value: 300, color: '#00C49F' },
      { name: 'Enregistrements inconnus', value: 100, color: '#8884d8' },
      { name: 'Frais financiers', value: 150, color: '#0088FE' },
      { name: 'Nourritures & Boissons', value: 200, color: '#FF8042' },
      { name: 'Véhicule', value: 100, color: '#AF19FF' },
      { name: 'Achats', value: 250, color: '#00FFFF' },
      { name: 'Multimédia, PC', value: 170, color: '#00FF00' },
    ];

    const transactions = [
      {
        id: 1,
        icon: '💰',
        description: 'Salaires, factures',
        account: 'Compte courant',
        amount: '2 500,00 €',
        date: 'Aujourd\'hui',
      },
      {
        id: 2,
        icon: '🏠',
        description: 'Prêt hypothécaire',
        account: 'Compte courant',
        amount: '-1 150,00 €',
        date: 'Aujourd\'hui',
      },
      {
        id: 3,
        icon: '💡',
        description: 'Énergie, services publics',
        account: 'Compte courant',
        amount: '-80,92 €',
        date: 'Aujourd\'hui',
        details: 'Lyonnaise des eaux',
      },
      {
        id: 4,
        icon: '🅿️',
        description: 'Parking',
        account: 'Revolut - 456960-EUR',
        amount: '-1,20 €',
        date: 'Non validé',
      },
      {
        id: 5,
        icon: '🌿',
        description: 'Culture, événements sport...',
        account: 'Revolut -',
        amount: '-3,07 €',
        date: 'Hier',
        details: 'Phie Du Theatre 2097004',
      },
    ];

    function DonutChart() {
      return (
        <div className="donut-chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend layout="vertical" align="right" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    }

    function TransactionItem({ transaction }) {
      return (
        <li className="transaction-item">
          <span className="icon">{transaction.icon}</span>
          <div className="details">
            <div className="description">{transaction.description}</div>
            <div className="account">{transaction.account}</div>
            {transaction.details && <div className="description">{transaction.details}</div>}
          </div>
          <div className="amount">{transaction.amount}</div>
          <div className="date">{transaction.date}</div>
          {transaction.status && <span className="status">{transaction.status}</span>}
        </li>
      );
    }

    function TransactionList() {
      return (
        <div className="card">
          <h2>Vue d'ensemble des dernières transactions</h2>
          <ul className="transaction-list">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </ul>
          <button className="plus-button">+</button>
        </div>
      );
    }

    function App() {
      return (
        <div className="container">
          <div className="card">
            <h2>LES 30 DERNIERS JOURS</h2>
            <p>2 269,86 € <span style={{ color: 'green' }}>+128%</span></p>
            <DonutChart />
            <p>Tous 2 270 €</p>
          </div>
          <TransactionList />
        </div>
      );
    }

    export default App;
