import Card from 'react-bootstrap/Card';

const CardMovie=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardMovie