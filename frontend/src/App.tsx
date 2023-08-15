

//import './App.css'
import { Col, Container, Navbar, Nav, Row } from 'react-bootstrap'
import { HomePage } from './pages/HomePage'
import { Outlet } from 'react-router-dom'


function App() {
   

  return (        //display flex
    <div className='d-flex flex-column vh-100 '>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>
              ts amazone
            </Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>Cart</a>
            <a href="/signin" className='nav-link'>Sign in</a>
          </Nav>
        </Navbar>
      </header>
       <main>               {/* margin top */}
        <Container className='mt-3'>
          {/* <HomePage /> */}
          <Outlet />
        </Container>
       
      </main>
      <footer>
        <div className='text-center'>
        All rigth reserved
        </div>
        
      </footer>
    </div>
  )
}

export default App
