import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"


export default function Newsletter() {
    return (<>
        <section >
            <Container >
                <Row>
                    <Col >
                        <h4>Fique por dentro das novidades,  assine nossa Newsletter</h4>
                    </Col>
                </Row>
                <br />
                <Row>

                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Seu Nome</Form.Label>
                                <Form.Control type="text" placeholder="Seu Nome" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Seu E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Insira seu E-mail" />
                                <Form.Text className="text-muted">
                                    Nós nunca compartilharemos seus dados com ninguem.
                                </Form.Text>

                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}