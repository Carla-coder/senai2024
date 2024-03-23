import React, { useState, useEffect } from 'react'
import {
  Navbar,
  Nav,
  Container,
  Card,
  Button,
  Badge,
  Modal,
  ListGroup
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.gif';

function ProductCard ({ name, description, addToCart }) {
  return (
    <div className='col-md-4 mb-3'>
      <Card>
        <Card.Img
          className='product-image'
          variant='top'
          src={`/${name.toLowerCase()}.jpg`}
        />
        <Card.Body className='text-center'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            {/* Descrição do produto {name}. */}
          </Card.Text>
          <Button variant='success' onClick={() => addToCart(name)}>
            Adicionar ao Carrinho
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

function Cart ({
  cartItems,
  removeFromCart,
  show,
  handleClose,
  finalizePurchase
}) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

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
              <Button
                variant='danger'
                size='sm'
                onClick={() => removeFromCart(index)}
                className='ms-2'
              >
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className='mt-3'>Total: R$ {totalPrice.toFixed(2)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Fechar
        </Button>
        <Button variant='primary' onClick={finalizePurchase}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

function App () {
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    const backgrounds = [
      'images/image1.jpg',
      'images/image2.jpg',
      'images/image3.jpg'
    ]
    const randomIndex = Math.floor(Math.random() * backgrounds.length)
    setBackgroundImage(backgrounds[randomIndex])
  }, [])

  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const prices = {
    'coelha de óculos': 125,
    'coelho cerquinha': 135,
    'coelha com cesta de juta': 260,
    'coelho garden': 180,
    'coelho primitivo': 160,
    'placa brigadeiro': 180,
    'tábua coelha de óculos': 100,
    'tábua chocolate': 220,
    'vila de cenouras': 95,
    'mamãe coelha e seus filhotes': 295
  }

  const addToCart = productName => {
    // Adicione a lógica para obter o preço do produto com base no nome
    // Você pode usar um objeto ou um banco de dados para mapear os preços dos produtos
    const productPrice = prices[productName.toLowerCase()]
    if (productPrice !== undefined) {
      const newItem = { name: productName, price: productPrice }
      setCartItems([...cartItems, newItem])
    } else {
      // Caso o preço não seja encontrado, você pode definir um preço padrão ou exibir uma mensagem de erro
      console.error(`O preço para o produto ${productName} não foi encontrado.`)
    }
  }

  const removeFromCart = index => {
    const updatedCartItems = [...cartItems]
    updatedCartItems.splice(index, 1)
    setCartItems(updatedCartItems)
  }

  const handleClose = () => setShowCart(false)
  const handleShow = () => setShowCart(true)

  const finalizePurchase = () => {
    // Implemente a lógica para finalizar a compra aqui
    // Por exemplo, limpar o carrinho de compras
    setCartItems([])
    // Ou exibir uma mensagem de sucesso
    alert('Compra finalizada com sucesso!')
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        minHeight: '100vh'
      }}
    >
      <Navbar
        style={{
          backgroundImage:
            'linear-gradient(to right, #d9ef9f, #b7cd7f, #778c43, #445a14)'
        }}
        variant='dark'
      >
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src={'/images/beec.gif'}
              width='100'
              height='100'
              className='d-inline-block align-top'
              alt='Minha Loja Logo'
            />{' '}
            {/*Minha Loja*/}
          </Navbar.Brand>
          <Nav
            className='me-auto justify-content-center'
            style={{ width: '100%' }}
          >
            <Nav.Link className='nav-item ms-sm-5 fs-4' href='#home'>
              Home
            </Nav.Link>
            <Nav.Link className='nav-item ms-sm-5 fs-4' href='#produtos'>
              Produtos
            </Nav.Link>
            <Nav.Link className='nav-item ms-sm-5 fs-4' href='#contato'>
              Contato
            </Nav.Link>
          </Nav>
          <Button variant='warning' onClick={handleShow}>
            <i className='bi bi-cart'></i>{' '}
            <Badge bg='success'>{cartItems.length}</Badge>
          </Button>
        </Container>
      </Navbar>

      <Container className='mt-5 mb-4'>
        {' '}
        {/* Adicionando mb-4 para separar para baixo */}
        <h1 className='text-center mb-4' style={{ color: 'black' }}>
          Produtos em Destaque
        </h1>
        <div className='row'>
          <ProductCard
            name='Coelha de Óculos'
            description='Enfeite de mesa em madeira Pinus'
            addToCart={addToCart}
          />
          <ProductCard
            name='Coelho Cerquinha'
            description='Porta pano de prato modelo cerquinha americana'
            addToCart={addToCart}
          />
          <ProductCard
            name='Coelha com cesta de juta'
            description='Coelho com cesto de juta decorativo'
            addToCart={addToCart}
          />
          <ProductCard
            name='Coelho Garden'
            description='Placa decorativa para jardim'
            addToCart={addToCart}
          />
          <ProductCard
            name='Coelho Primitivo'
            description='Placa decorativa de porta'
            addToCart={addToCart}
          />
          <ProductCard
            name='Placa Brigadeiro'
            description='Placa decorativa para cozinha'
            addToCart={addToCart}
          />
          <ProductCard
            name='Tábua Coelha de óculos'
            description='Tábua de mesa'
            addToCart={addToCart}
          />
          <ProductCard
            name='Tábua Chocolate'
            description='Tábua porta pano de parto'
            addToCart={addToCart}
          />
          <ProductCard
            name='Vila de Cenouras'
            description='Peça decorativa de mesa ou balcão'
            addToCart={addToCart}
          />
          <ProductCard
            name='Mamãe Coelha e seus filhotes'
            description='Peça decorativa de mesa ou balcão'
            addToCart={addToCart}
          />
        </div>
      </Container>

      <footer
        style={{
          backgroundImage:
            'linear-gradient(to right, #d9ef9f, #b7cd7f, #778c43, #445a14)',
          color: 'white',
          textAlign: 'center',
          padding: '20px 0'
        }}
      >
        &copy; 2024 Bee Country. Todos os direitos reservados.
      </footer>

      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        show={showCart}
        handleClose={handleClose}
        finalizePurchase={finalizePurchase}
      />
    </div>
  )
}

export default App;
// export default ProductCard;
