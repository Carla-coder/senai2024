import React, { useState } from 'react';

const Reminders = ({ onAddReminder }) => {
  const [reminder, setReminder] = useState('');

  const handleAddReminder = () => {
    if (!reminder) {
      alert('Por favor, digite um lembrete.');
      return;
    }

    onAddReminder(reminder);
    setReminder('');
  };

  return (
    <div>
      <h2>Lembretes de Contas a Pagar</h2>
      <input
        type="text"
        placeholder="Digite o lembrete"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
      />
      <button onClick={handleAddReminder}>Adicionar Lembrete</button>
    </div>
  );
};

export default Reminders;