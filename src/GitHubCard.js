import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {
    return (
        <Card style ={{width: '10em', height: '15em', backgroundColor: 'grey', margin: 'auto'}}  >
            <Card.Img variant='top' src='/JacobBrown-Senior.jpg'></Card.Img>
            <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                    <Card.Text>
                    Hi im jake i just turned 20, and Im currently enrolled in a coding bootcamp, 
                    </Card.Text>
                <Button variant="primary">Button</Button>
            </Card.Body>
        </Card>
    )
}

export default Profile