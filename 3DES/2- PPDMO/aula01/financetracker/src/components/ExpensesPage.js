import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseForm from './ExpenseForm';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([
    { category: 'Alimentação', amount: 50 },
    { category: 'Transporte', amount: 20 },
    { category: 'Lazer', amount: 30 },
  ]);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setFormVisible(false); // Fecha o formulário após adicionar a despesa
  };

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      <h1>Despesas</h1>
      {isFormVisible && <ExpenseForm onAddExpense={handleAddExpense} />}
      <ExpensesList expenses={expenses} />
      {!isFormVisible && (
        <button
          style={{
            position: 'fixed',
            bottom: '110px',
            right: '50px',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setFormVisible(true)}
        >
          Adicionar Gasto
        </button>
      )}
    </div>
  );
};

export default ExpensesPage;