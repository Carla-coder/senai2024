import React from 'react';

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <h2>Registros de Gastos</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.category}</strong>: R$ {expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;