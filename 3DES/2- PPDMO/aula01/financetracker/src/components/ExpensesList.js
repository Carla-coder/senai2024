import React from 'react';

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <h2>Lista de Despesas</h2>
      <ul>
        {Array.isArray(expenses) && expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <li key={index}>
              Categoria: {expense.category}, Valor: {expense.amount}
            </li>
          ))
        ) : (
          <p>Sem despesas para mostrar.</p>
        )}
      </ul>
    </div>
  );
};

export default ExpensesList;