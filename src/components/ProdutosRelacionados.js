import Carousel from 'react-bootstrap/Carousel';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ProdutosRelacionados() {
    return (<>
        <section>


            <Container >
                <Row>
                    <Col>
                        <h4> Produtos Relacionados</h4>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <ProductCard />
                            </Carousel.Item>

                            <Carousel.Item>
                                <ProductCard />
                            </Carousel.Item>

                            <Carousel.Item>
                                <ProductCard />
                            </Carousel.Item>
                            <Carousel.Item>
                                <ProductCard />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}