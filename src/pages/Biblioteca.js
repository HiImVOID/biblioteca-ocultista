import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Biblioteca() {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <h4>Paradigmas</h4>
                        <p>Todos os Paradigmas</p>
                    </Col>
                    <Col>
                        <h4>Textos</h4>
                    </Col>
                    <Col>
                        <h4>Livros</h4>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}