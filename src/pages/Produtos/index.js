import ProductCard from '../../components/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import ToolBar from '../../components/ToolBar'

export default function Produtos() {
    return (<>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>Página de produtos</h1>
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
                <br />
                <br />
                <br />

                <Row>
                    <Col>
                        <ToolBar />
                    </Col>
                </Row>
            </Container>

        </section>
    </>)
}