import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard() {
  return (
    <Card style={{ width: '14rem', marginBottom: '10px', marginTop: '10px' }}>
      <Card.Img variant="top" src="/img/1.jpg" />
      <Card.Body>
        <Card.Title>O Caibalion</Card.Title>
        <Card.Text>
          O Caibalion, publicado em 1908 pela Yogi Publication Society sob o pseudônimo
          de &quot;os Três Iniciados&quot;,
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

