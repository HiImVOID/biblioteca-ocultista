import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Footer() {
    return (<>
        <section>
            <Container >
                <Row >
                    <Col>
                        <h4>Atendimento</h4>
                        <br />
                        <p>Politica de Vendas, Trocas e Privacidade</p>
                        <p>Termos e condições de compra</p>
                        <p>Fale Conosco</p>

                    </Col>
                    <Col>
                        <h4>Institucional</h4>
                        <br />
                        <p>Sobre a Biblioteca Ocultista</p>
                        <p>Nossas Lojas</p>
                        <p>Nossas Midias</p>
                    </Col>
                    <Col>
                        <h5>Formas de Pagamento</h5>
                        <br />
                        <a>Lorem    </a>
                        <a>Lorem    </a>
                        <a>Lorem    </a>
                        <br />
                        <br />
                        <h5>Segurança</h5>
                        <br />
                        <a>Lorem    </a>
                        <a>Lorem    </a>
                    </Col>
                </Row>
            </Container>
        </section>
        <br />
        <br />
        <br />


    </>
    )
}
