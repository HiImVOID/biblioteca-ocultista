import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image"


export default function Sobre() {
    return (<>
        <section>
            <Container>
                <Row>
                    <h2>Quem é a Biblioteca Ocultista?</h2>
                    <br />
                    <br />
                    <br />

                </Row>
                <Row>
                    <Col>
                        <p> A Biblioteca Ocultista acredita que toda forma de controle de
                            conhecimento deve ser combatida mas que devemos dar crédito onde
                            o crédito é devido.
                        </p>
                        <p> Assim todo material aqui atualizado busca trazer o nome do autor
                            sempre que possível e queremos que caso você use algum texto do
                            site também faça o mesmo. Caso encontre algum material sem
                            referência e possua os dados da autoria por favor nos envie para
                            corrigirmos esse erro horrível, cruel e hediondo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}