import React from 'react';
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
    return (
        <Form>
            <Form.Group as={Row} className="mb-3 text-light" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    First Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="firstName" placeholder="First Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-light" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Last Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="lastName" placeholder="Last Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-light" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group className="mb-3 text-light" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <fieldset>
                <Form.Group as={Row} className="mb-3 text-light">
                    <Form.Label as="legend" column sm={2}>
                        Subject
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="Genral Inqueries"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Networking"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label="Website Services"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Col>
                </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" className='button' classname='click'>submit</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default Contact;