import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Contact(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>Contact Us</Card.Title>
          <Card.Text>
            <InputGroup className="mb-3">
              <InputGroup.Text id="Name">Name &nbsp; &nbsp; </InputGroup.Text>
              <Form.Control
                placeholder="Name"
                aria-label="Username"
              />
            </InputGroup>
          </Card.Text>
          <Card.Text>
            <InputGroup className="mb-3">
              <InputGroup.Text id="Email">Email  &nbsp; &nbsp;</InputGroup.Text>
              <Form.Control
                placeholder="Email"
                aria-label="Email"
              />
            </InputGroup>
          </Card.Text>
          <Card.Text>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Message </InputGroup.Text>
              <Form.Control
                placeholder="Message"
                aria-label="Message"
                as="textarea"
              />
            </InputGroup>
          </Card.Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="info" >Contact Us</Button>
          </div>
        </Card.Body>
      </Card>
    </div>

  );
}

export default Contact;
