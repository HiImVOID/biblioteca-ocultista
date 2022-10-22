import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar1() {
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Biblioteca Ocultista</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/Sobre">Quem Somos?</Nav.Link>

                        <Nav.Link href="/Contato">Contato</Nav.Link>
                        <Nav.Link href="/Produtos">Produtos</Nav.Link>
                        <NavDropdown href="/Paradigmas" title="Paradigmas" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/Paradigmas/Hermetismo">Hermetismo</NavDropdown.Item>
                            <NavDropdown.Item href="/Paradigmas/Alquimia">
                                Alquimia
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Paradigmas">
                                Todos os Paradigmas
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/Biblioteca" disabled>
                            Biblioteca
                        </Nav.Link>
                        <Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="O que procura?"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Buscar</Button>
                            </Form>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )

}