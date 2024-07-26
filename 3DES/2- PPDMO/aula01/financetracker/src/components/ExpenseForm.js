import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (!category || !amount) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const expense = {
      category,
      amount: parseFloat(amount),
    };

    onAddExpense(expense);
    setCategory('');
    setAmount('');
  };

  return (
    <div>
      <h2>Registrar Gasto</h2>
      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Adicionar Gasto</button>
    </div>
  );
};

export default ExpenseForm;