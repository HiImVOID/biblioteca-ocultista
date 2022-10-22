import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ArtigoCard() {
    return (
        <Card style={{ width: '14rem', marginBottom: '10px', marginTop: '10px' }}>
            <Card.Img variant="top" src="/img/1.jpg" />
            <Card.Body>
                <Card.Title>Artigo sobre algo...</Card.Title>
                <Card.Text>
                    O Caibalion, publicado em 1908 pela Yogi Publication Society sob o pseudônimo
                    de "os Três Iniciados",
                </Card.Text>
                <Button variant="primary">Continue lendo</Button>
            </Card.Body>
        </Card>
    );
}