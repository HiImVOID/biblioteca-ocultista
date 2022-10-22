import { Container, Row, Col } from "react-bootstrap"
import ArtigoCard from "./ArtigoCard"

export default function UltimosArtigos() {
    return (<>
        <section>
            <Container>
                <Row><h4>Últimos Artigos</h4></Row>
                <br />
                <Row>
                    <Col>
                        <ArtigoCard />
                    </Col>
                    <Col>
                        <ArtigoCard />
                    </Col>
                    <Col>
                        <ArtigoCard />
                    </Col>
                    <Col>
                        <ArtigoCard />
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}