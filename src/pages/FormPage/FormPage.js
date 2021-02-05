import React from 'react';
import { Container, Row, Col } from '../../components/ui/Grid';
import { FormGroup, FormLabel } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import './form-page.scss';

function Form() {
  return (
    <Container className="form-page">
      <form>
        <FormGroup className="form-page__genders-row">
          <Row className="form-page__row">
            <Col xs={4}>
              <FormLabel className="form-page__label">
                Anrede*
              </FormLabel>
            </Col>
            <Col xs={8} md={6}>
              <div className="form-page__inputs">
                <Input type="radio" name="gender" className="form-page__gender">Herr</Input>
                <Input type="radio" name="gender" className="form-page__gender">Frau</Input>
              </div>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row className="form-page__row">
            <Col md={4}>
              <FormLabel className="form-page__label">
                Vorname*
              </FormLabel>
            </Col>
            <Col md={6}>
              <div className="form-page__inputs">
                <Input placeholder="Vorname" />
              </div>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row className="form-page__row">
            <Col md={4}>
              <FormLabel className="form-page__label">
                Nachname*
              </FormLabel>
            </Col>
            <Col md={6}>
              <div className="form-page__inputs">
                <Input placeholder="Nachname" />
              </div>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row className="form-page__row">
            <Col md={4}>
              <FormLabel className="form-page__label">
                Geburtsdatum*
              </FormLabel>
            </Col>
            <Col md={6}>
              <div className="form-page__inputs">
                <Row>
                  <Col xs={4}>
                    <Input placeholder="TT" />
                  </Col>
                  <Col xs={4}>
                    <Input placeholder="MM" />
                  </Col>
                  <Col xs={4}>
                    <Input placeholder="JJJJ"/>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row className="form-page__row">
            <Col md={4} className="hidden-xs visible-md">
              <FormLabel className="form-page__label">
                Straße/Nr.*
              </FormLabel>
            </Col>
            <Col md={6}>
              <div className="form-page__inputs">
                <Row>
                  <Col xs={8}>
                    <FormLabel className="form-page__label hidden-md">
                      Straße*
                    </FormLabel>
                    <Input placeholder="Straße" />
                  </Col>
                  <Col xs={4}>
                    <FormLabel className="form-page__label hidden-md">
                      Nr.*
                    </FormLabel>
                    <Input placeholder="Nr." />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row className="form-page__row">
            <Col md={4} className="hidden-xs visible-md">
              <FormLabel className="form-page__label">
                PLZ/Ort*
              </FormLabel>
            </Col>
            <Col md={6}>
              <div className="form-page__inputs">
                <Row>
                  <Col xs={4}>
                    <FormLabel className="form-page__label hidden-md">
                      PLZ*
                    </FormLabel>
                    <Input placeholder="PLZ" />
                  </Col>
                  <Col xs={8}>
                    <FormLabel className="form-page__label hidden-md">
                      Ort*
                    </FormLabel>
                    <Input placeholder="Ort" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row className="form-page__row">
            <Col md={4}/>
            <Col md={6}>
              <div className="form-page__inputs form-page__btn-wrap">
                <Button type="submit" className="form-page__btn">Anmelden</Button>
              </div>
            </Col>
          </Row>
        </FormGroup>
      </form>
    </Container>
  );
}

export default Form;
