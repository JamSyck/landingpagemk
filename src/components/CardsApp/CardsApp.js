import React from 'react'
import './CardsApp.css';
import images from '../images/images';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardsApp = () => {
  return (
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images.img5} />
      <Card.Body>
        <Card.Title className='title'>FEMME KLASSIC</Card.Title>
        <Card.Text>
          Regresan los trajes klásicos de las ninjas asesinas a Mortal Kombat 11.
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images.img6} />
      <Card.Body>
        <Card.Title className='title'>FIRE GOD</Card.Title>
        <Card.Text>
          Liu Kang, el nuevo Dios Antiguo y protector de la tierra.
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images.img7} />
      <Card.Body>
        <Card.Title className='title'>SHAOLIN MONKS</Card.Title>
        <Card.Text>
          El juego que más ha destacado en la saga.
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
