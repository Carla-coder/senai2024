import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDollarSign, faFileAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import ExpensesPage from './ExpensesPage'; // Importa a página de despesas

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to top right, #fff, #28a745);
  color: #333;
  padding: 20px;
  height: 90vh;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const ChartContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  background: #28a745;
  padding: 10px 0;
  width: 99%;
  position: fixed;
  bottom: 0;
`;

const MenuItem = styled.div`
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #218838;
  }
`;

const Description = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
  color: #004d00; 
  padding: 20px;
  border-radius: 8px;
`;

const TitleDescription = styled.h2`
  color: #fff; 
  font-size: 24px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 18px; 
  line-height: 1.6;
`;

const PieChart = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  let cumulativeAngle = 0;

  const paths = data.map((item, index) => {
    const angle = (item.value / total) * 2 * Math.PI;
    const largeArcFlag = angle > Math.PI ? 1 : 0;
    const x1 = Math.cos(cumulativeAngle) * 100;
    const y1 = Math.sin(cumulativeAngle) * 100;
    const x2 = Math.cos(cumulativeAngle + angle) * 100;
    const y2 = Math.sin(cumulativeAngle + angle) * 100;

    cumulativeAngle += angle;

    return (
      <path
        key={index}
        d={`M 0 0 L ${x1} ${y1} A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
        fill={item.color}
      />
    );
  });

  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      <circle cx="0" cy="0" r="100" fill="#eee" />
      {paths}
    </svg>
  );
};

const Home = ({ currentUser }) => {
  const [activePage, setActivePage] = useState('home'); // Página ativa

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const data = [
    { value: 40, color: '#ff4d4d' },
    { value: 20, color: '#3399ff' },
    { value: 30, color: '#66ff66' },
    { value: 10, color: '#ffcc00' },
  ];

  return (
    <Container>
      {activePage === 'home' && (
        <>
          <Title>Bem-vindo ao FinanceTracker</Title>
          <ChartContainer>
            <PieChart data={data} />
          </ChartContainer>
          <Description>
            <TitleDescription>Quem Somos</TitleDescription>
            <Text>
              A FinanceTracker é uma empresa dedicada a fornecer soluções financeiras inovadoras para ajudar você a gerenciar suas finanças pessoais de forma eficiente. Nosso aplicativo foi desenvolvido para facilitar o acompanhamento das suas despesas e investimentos, oferecendo uma visão clara e detalhada das suas finanças.
            </Text>
            <Text>
              Com a FinanceTracker, você pode monitorar seus gastos, planejar seu orçamento e tomar decisões financeiras informadas. Nosso objetivo é proporcionar uma experiência intuitiva e útil para que você possa alcançar suas metas financeiras com facilidade.
            </Text>
          </Description>
        </>
      )}
      {activePage === 'expenses' && <ExpensesPage />} {/* Renderiza a página de despesas */}

      <Menu>
        <MenuItem onClick={() => handleMenuClick('home')}>
          <FontAwesomeIcon icon={faHome} /> Home
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('expenses')}>
          <FontAwesomeIcon icon={faDollarSign} /> Despesas
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('records')}>
          <FontAwesomeIcon icon={faFileAlt} /> Registros
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('reminders')}>
          <FontAwesomeIcon icon={faBell} /> Lembretes
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Home;