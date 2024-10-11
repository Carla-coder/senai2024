const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Inserindo automóveis
  await prisma.automoveis.createMany({
    data: [
      { modelo: 'Fiat Strada', preco: 43115.00 },
      { modelo: 'Fiat Argo', preco: 47660.00 },
      { modelo: 'Fiat Mobi', preco: 32102.00 },
      { modelo: 'Jeep Compass', preco: 34950.00 },
      { modelo: 'Hyundai HB20', preco: 49302.00 },
      { modelo: 'Jeep Renegade', preco: 36661.00 },
      { modelo: 'Volkswagen T-Cross', preco: 38182.00 },
      { modelo: 'Fiat Toro', preco: 57733.00 },
      { modelo: 'Hyundai Creta', preco: 55998.00 },
      { modelo: 'Chevrolet S10', preco: 51035.00 },
      { modelo: 'Toyota Corolla Cross', preco: 34544.00 },
      { modelo: 'Toyota Hilux', preco: 53937.00 },
      { modelo: 'Toyota Corolla', preco: 55022.00 },
      { modelo: 'Volkswagen Gol', preco: 48253.00 },
      { modelo: 'Honda HR-V', preco: 53438.00 },
      { modelo: 'Renault Kwid', preco: 31810.00 },
      { modelo: 'Volkswagen Nivus', preco: 35104.00 },
      { modelo: 'Hyundai HB20S', preco: 31855.00 },
      { modelo: 'Ford Ranger', preco: 48927.00 },
      { modelo: 'Fiat Uno', preco: 38111.00 },
      { modelo: 'Fiat Cronos', preco: 36515.00 },
      { modelo: 'Citroën C4 Cactus', preco: 53654.00 },
      { modelo: 'Toyota Yaris Hatchback', preco: 55869.00 },
      { modelo: 'Volkswagen Voyage', preco: 30954.00 },
      { modelo: 'Honda Civic', preco: 30871.00 },
      { modelo: 'Volkswagen Saveiro', preco: 32306.00 },
      { modelo: 'Caoa Chery Tiggo 5x', preco: 30069.00 },
      { modelo: 'Volkswagen Virtus', preco: 40689.00 },
      { modelo: 'Fiat Grand Siena', preco: 33469.00 },
      { modelo: 'Caoa Chery Tiggo 8', preco: 48481.00 },
      { modelo: 'Chevrolet Tracker', preco: 30648.00 },
      { modelo: 'Peugeot 208', preco: 46934.00 },
      { modelo: 'Toyota SW4', preco: 54252.00 },
      { modelo: 'Nissan Frontier', preco: 32596.00 },
      { modelo: 'Honda WR-V', preco: 35139.00 },
      { modelo: 'Volkswagen Taos', preco: 47546.00 },
      { modelo: 'Mitsubishi L200', preco: 57049.00 },
      { modelo: 'Renault Oroch', preco: 48756.00 },
      { modelo: 'Toyota Yaris Sedan', preco: 43077.00 },
      { modelo: 'Renault Duster', preco: 52641.00 },
    ],
  });

  // Inserindo clientes
  await prisma.clientes.createMany({
    data: [
      { nome: 'Adalberto Martins da Silva' },
      { nome: 'Adan Roger Guimarães Dias' },
      { nome: 'Adão Walter Gomes de Sousa' },
      { nome: 'Adelson Fernandes Sena' },
      { nome: 'Ademir Augusto Simões' },
      { nome: 'Ademir Borges dos Santos' },
      { nome: 'Adilio José da Silva Santos' },
      { nome: 'Adriana Ferreira de Lima Teodoro' },
      { nome: 'Adriano Bezerra Apolinario' },
      { nome: 'Adriano Heleno Basso' },
      { nome: 'Adriano Lourenço do Rego' },
      { nome: 'Adriano Matos Santos' },
      { nome: 'Adriano Pires Caetano' },
      { nome: 'Adriano Prada de Campos' },
      { nome: 'Adriel Alberto dos Santos' },
      { nome: 'Agner Vinicius Marques de Camargo' },
      { nome: 'Agrinaldo Ferreira Soares' },
      { nome: 'Alan Jhonnes Banlian da Silva e Sá' },
      { nome: 'Alberto Ramos Rodrigues' },
      { nome: 'Alcides José Ramos' },
      { nome: 'Aldemir SantAna dos Santos' },
      { nome: 'Aleksandro Marcelo da Silva' },
      { nome: 'Alessandro Martins Silva' },
      { nome: 'Alessandro Sanches' },
      { nome: 'Alex dos Reis de Jesus' },
      { nome: 'Alex Ferreira Soares' },
      { nome: 'Alex Sandro Oliveira' },
      { nome: 'Alex Souza Farias' },
      { nome: 'Alexandra de Lima Silva' },
      { nome: 'Alexandre Clemente da Costa' },
    ],
  });

  // Inserindo concessionárias
  await prisma.concessionaria.createMany({
    data: [
      { nome: 'Atena concessionária' },
      { nome: 'Demétir concessionária' },
      { nome: 'Hera concessionária' },
      { nome: 'Estia concessionária' },
      { nome: 'Perséfone concessionária' },
    ],
  });

  // Inserindo alocações
  await prisma.alocacao.createMany({
    data: [
      { area: 1, automovelId: 1, concessionariaId: 1, quantidade: 8 },
      { area: 2, automovelId: 2, concessionariaId: 2, quantidade: 1 },
      { area: 4, automovelId: 3, concessionariaId: 3, quantidade: 4 },
      { area: 7, automovelId: 4, concessionariaId: 4, quantidade: 6 },
      { area: 8, automovelId: 5, concessionariaId: 5, quantidade: 4 },
      { area: 9, automovelId: 6, concessionariaId: 1, quantidade: 4 },
      { area: 10, automovelId: 7, concessionariaId: 2, quantidade: 1 },
      { area: 1, automovelId: 8, concessionariaId: 2, quantidade: 7 },
      { area: 2, automovelId: 9, concessionariaId: 3, quantidade: 2 },
      { area: 4, automovelId: 10, concessionariaId: 4, quantidade: 6 },
    ],
  });

  // Inserindo vendas
  await prisma.vendas.createMany({
    data: [
      { clienteId: 1, alocacaoId: 1, concessionariaId: 1, data: new Date() },
      { clienteId: 2, alocacaoId: 2, concessionariaId: 2, data: new Date() },
      { clienteId: 3, alocacaoId: 3, concessionariaId: 3, data: new Date() },
      { clienteId: 4, alocacaoId: 4, concessionariaId: 4, data: new Date() },
      { clienteId: 5, alocacaoId: 5, concessionariaId: 5, data: new Date() },
    ],
  });
}

main()
  .then(() => console.log('Seed completed'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

    