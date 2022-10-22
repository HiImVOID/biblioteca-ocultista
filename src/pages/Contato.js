import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contato() {
    return (<>
        <section>
            <Container >
                <Row>
                    <Col>
                        <h1> Contato</h1>
                        <br />
                        <p>Possui textos, pesquisas ou traduções que gostaria de publicar? Mande para gente.</p>
                    </Col>
                </Row>


                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Seu Nome</Form.Label>
                                <Form.Control type="email" placeholder="Insira seu nome" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Seu E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Insira seu email" />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label aria-expanded='5'>Titulo</Form.Label>
                                <Form.Control type="text" placeholder="Insira o titulo." />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label aria-expanded='5'>Conteudo</Form.Label>
                        <Form.Control type="text" placeholder="Insira seu conteudo." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                        <Form.Text className="text-muted">
                            Nós nunca compartilharemos seus dados com ninguem.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>

            </Container>
        </section>
    </>)
}