import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

export default function OitoLicoesDeAlquimia() {
    return (<>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h1>8 Lições de Alquimia</h1>
                        <Image
                            src="/img/0.png"
                            height={400}
                            width={400}
                        />
                        <h5>Por Mark Stavish</h5>
                        <p>
                            A sabedoria só é adquirida através da experiência e da reflexão
                            sobre essa experiência, que tira as lições que ela tem a oferecer.
                            Uma vida não refletida é uma vida vivida na sombra da realidade.
                            Somente parando, olhando para trás, para onde começamos, o que fizemos,
                            onde estamos no presente, e como chegamos aqui, podemos começar a nos
                            chamar de sábios – e Sabedoria é o objetivo do esoterismo genuíno,
                            não poder, fama ou títulos – Sabedoria é o fruto de experiências
                            que são compreendidas.
                        </p>

                        <p>
                            Praticar a alquimia é bater às portas do Templo de Sofia, da Sabedoria,
                            e rezar para entrar. Percebe-se rapidamente que não importa o quanto se
                            bata, não há ninguém do outro lado para abrir a porta. Somos nós que
                            devemos, individualmente e por nossa livre vontade e acordo, empurrar
                            a porta e abri-la para nós mesmos. Uma vez lá dentro, encontramos alguns
                            amigos peculiares e úteis esperando, mas somente uma vez que assumimos a
                            responsabilidade de abrir a porta para nós mesmos.
                        </p>
                        <p>
                            Este artigo é um resumo de algumas experiências minhas e de outros
                            alquimistas, que ocorreram durante nossos primeiros doze meses de
                            prática de espagiricas ou alquimia de plantas. Esperamos que eles
                            sejam úteis aos aspirantes a alquimistas e até mesmo aos estudantes
                            de outras artes e ciências ocultas para entender o caminho que
                            escolheram e seu potencial.
                        </p>
                        <h4>Lições Aprendidas</h4>
                        <p>
                            Muitos acharam o estudo da alquimia particularmente gratificante, primeiro
                            por causa do tipo de retorno que se obtém por seu investimento de tempo, e
                            segundo por causa da certeza dos resultados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}