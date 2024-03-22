import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Card, Button, Badge, Modal, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ name, description, addToCart }) {
  return (
    <div className="col-md-4 mb-3">
      <Card>
        <Card.Img className="product-image" variant="top" src={`/${name.toLowerCase()}.jpg`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              {description}
            {/* Descrição do produto {name}. */}
          </Card.Text>
          <Button variant="primary" onClick={() => addToCart(name)}>
            Adicionar ao Carrinho
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Cart({ cartItems, removeFromCart, show, handleClose, finalizePurchase }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - R$ {item.price.toFixed(2)}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(index)} className="ms-2">
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className="mt-3">Total: R$ {totalPrice.toFixed(2)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={finalizePurchase}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const backgrounds = ['image/image1.jpg', 'image/image2.jpg', 'image/image3.jpg'];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBackgroundImage(backgrounds[randomIndex]);
  },[]);
      const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const prices = {
      "coelha-de-oculos": 15, // Preço da coelha-de-oculos é R$15
      "coelho-cerquinha": 20, // Preço do coelho-cerquinha é R$20
      // Adicione os preços para os outros produtos
    };
    
    const addToCart = (productName) => {
    // Adicione a lógica para obter o preço do produto com base no nome
    // Você pode usar um objeto ou um banco de dados para mapear os preços dos produtos
    const productPrice = prices[productName]; // Por exemplo, preço fixo de R$10 para todos os produtos
    const newItem = { name: productName, price: productPrice };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const finalizePurchase = () => {
    // Implemente a lógica para finalizar a compra aqui
    // Por exemplo, limpar o carrinho de compras
    setCartItems([]);
    // Ou exibir uma mensagem de sucesso
    alert('Compra finalizada com sucesso!');
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Minha Loja</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#produtos">Produtos</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleShow}>
            <i className="bi bi-cart"></i> <Badge bg="danger">{cartItems.length}</Badge>
          </Button>
        </Container>
      </Navbar>
     
        <Container className="mt-5 mb-4"> {/* Adicionando mb-4 para separar para baixo */}
        <h1 className="text-center mb-4">Produtos em Destaque</h1>
        <div className="row">
          <ProductCard name="Coelha de Óculos" description="Enfeite de mesa em madeira Pinus" addToCart={addToCart} />
          <ProductCard name="Coelho Cerquinha" description="Porta pano de prato modelo cerquinha americana" addToCart={addToCart} />
          <ProductCard name="Coelho com cesto de juta" description="Coelho com cesto de juta decorativo" addToCart={addToCart} />
          <ProductCard name="Coelho Garden" description="Placa decorativa para jardim" addToCart={addToCart} />
          <ProductCard name="Coelho Primitivo" description="Placa decorativa de porta" addToCart={addToCart} />
          <ProductCard name="placa Brigadeiro" description="Placa decorativa para cozinha" addToCart={addToCart} />
          <ProductCard name="Tábua Coelha de óculos" description="Tábua de mesa" addToCart={addToCart} />
          <ProductCard name="Tábua Chocolate" description="Tabua porta pano de parto" addToCart={addToCart} />
          <ProductCard name="Vila de Cenouras" description="Peça decorativa de mesa ou balcão" addToCart={addToCart} />
          <ProductCard name="Mamãe Coelha e seus filhotes" description="Peça decorativa de mesa ou balcão" addToCart={addToCart} />
        </div>
      </Container>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        &copy; 2024 Minha Loja. Todos os direitos reservados.
      </footer>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} show={showCart} handleClose={handleClose} finalizePurchase={finalizePurchase} />
    </div>
  );
}

export default App;

  
  



