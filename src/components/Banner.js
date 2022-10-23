import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export default function Banner() {
    return (<>
        <Carousel fade >
            <Carousel.Item >
                <Image
                    className="d-block w-100 h-20"
                    src="/img/1.jpg"
                    alt="First slide"
                    width={900}
                    height={500}
                />
                <Carousel.Caption>
                    <h3>Descubra o Poder do Conhecimento</h3>
                    <p>Os limites do seu universo são os limites da sua linguagem.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/img/3.jpg"
                    alt="Second slide"
                    width={900}
                    height={500}
                />

                <Carousel.Caption>
                    <h3>Novo por aqui?</h3>
                    <p>Então prepare os ocúlos para enxergar a realidade.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/img/5.jpg"
                    alt="Third slide"
                    width={900}
                    height={500}
                />

                <Carousel.Caption>
                    <h3>De uma olhadinha nos nossos textos</h3>
                    <p>
                        Consulte diversos arquivos de nossa biblioteca.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>)
}