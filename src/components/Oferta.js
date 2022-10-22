import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProductCard from "./ProductCard"

export default function Oferta() {
    return (<>
        <section>
            <Container>
                <Row>
                    <Col><h4>Ofertas</h4>
                        <br />
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>

                </Row>
            </Container>
        </section>
    </>)
}