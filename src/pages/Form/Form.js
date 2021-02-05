import React from 'react';
import '../../styles/main.scss';
import './form.scss';
import { Container, Row, Col } from '../../components/ui/Grid';
import { FormGroup, FormLabel, FormInput } from '../../components/ui/Form/Form';

function Form() {
  return (
    <Container style={{background: '#a8a17d'}}>
      <FormGroup>
        <Row>
          <Col md={4}>
            <FormLabel>
              Anrede*
            </FormLabel>
          </Col>
          <Col md={6}>
            <FormInput type="radio">Herr</FormInput>
            <FormInput type="radio">Frau</FormInput>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col md={4}>
            <FormLabel>
              Vorname*
            </FormLabel>
          </Col>
          <Col md={6}>
            <FormInput placeholder="Vorname" />
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col md={4}>
            <FormLabel>
              Nachname*
            </FormLabel>
          </Col>
          <Col md={6}>
            <FormInput placeholder="Nachname" />
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col md={4}>
            <FormLabel>
              Geburtsdatum*
            </FormLabel>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={4}>
                <FormInput placeholder="TT" />
              </Col>
              <Col xs={4}>
                <FormInput placeholder="MM" />
              </Col>
              <Col xs={4}>
                <FormInput placeholder="JJJJ"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col md={4}>
            <FormLabel>
              Straße/Nr.*
            </FormLabel>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={8}>
                <FormInput placeholder="Straße" />
              </Col>
              <Col xs={4}>
                <FormInput placeholder="Nr." />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Row>
          <Col md={4}>
            <FormLabel>
              PLZ/Ort*
            </FormLabel>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={4}>
                <FormInput placeholder="PLZ" />
              </Col>
              <Col xs={8}>
                <FormInput placeholder="Ort" />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormGroup>
    </Container>
  );
}

export default Form;
