import React from 'react';
import { Formik } from 'formik';
import { Container, Row, Col } from '../../components/ui/Grid';
import { FormGroup, FormLabel } from '../../components/ui/Form/Form';
import FormikInput from '../../components/ui/FormikInput';
import Button from '../../components/ui/Button';
import { Schema } from './validation';
import './form-page.scss';

const initialValues = {
  gender: '',
  firstName: '',
  lastName: '',
  birth: {
    day: '',
    month: '',
    year: '',
  },
  street: '',
  number: '',
  zip: '',
  place: '',
};

function Form() {
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Container className="form-page">
      <Formik
       initialValues={initialValues}
       onSubmit={handleSubmit}
       validationSchema={Schema}
     >
       {(formikProps) => (
         <form onSubmit={formikProps.handleSubmit}>
           {/* {console.log(formikProps.values)} */}
          <FormGroup className="form-page__genders-row">
            <Row className="form-page__row">
              <Col xs={4}>
                <FormLabel className="form-page__label">Anrede*</FormLabel>
              </Col>
              <Col xs={8} md={6}>
                <div className="form-page__inputs">
                  <FormikInput type="radio" name="gender" className="form-page__gender" value="man">
                    Herr
                  </FormikInput>
                  <FormikInput type="radio" name="gender" className="form-page__gender" value="woman">
                    Frau
                  </FormikInput>
                </div>
              </Col>
            </Row>
          </FormGroup>
  
          <FormGroup>
            <Row className="form-page__row">
              <Col md={4}>
                <FormLabel className="form-page__label">Vorname*</FormLabel>
              </Col>
              <Col md={6}>
                <div className="form-page__inputs">
                  <FormikInput placeholder="Vorname" name="firstName" />
                </div>
              </Col>
            </Row>
          </FormGroup>
  
          <FormGroup>
            <Row className="form-page__row">
              <Col md={4}>
                <FormLabel className="form-page__label">Nachname*</FormLabel>
              </Col>
              <Col md={6}>
                <div className="form-page__inputs">
                  <FormikInput placeholder="Nachname" name="lastName" />
                </div>
              </Col>
            </Row>
          </FormGroup>
  
          <FormGroup>
            <Row className="form-page__row">
              <Col md={4}>
                <FormLabel className="form-page__label">Geburtsdatum*</FormLabel>
              </Col>
              <Col md={6}>
                <div className="form-page__inputs">
                  <Row>
                    <Col xs={4}>
                      <FormikInput type="mask" placeholder="TT" name="birth.day" pattern="[0-9]*" />
                    </Col>
                    <Col xs={4}>
                      <FormikInput type="mask" placeholder="MM" name="birth.month" pattern="[0-9]*" />
                    </Col>
                    <Col xs={4}>
                      <FormikInput type="mask" placeholder="JJJJ" name="birth.year" pattern="[0-9]*" />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </FormGroup>
  
          <FormGroup>
            <Row className="form-page__row">
              <Col md={4} className="hidden-xs visible-md">
                <FormLabel className="form-page__label">Straße/Nr.*</FormLabel>
              </Col>
              <Col md={6}>
                <div className="form-page__inputs">
                  <Row>
                    <Col xs={8}>
                      <FormLabel className="form-page__label hidden-md">Straße*</FormLabel>
                      <FormikInput placeholder="Straße" name="street" />
                    </Col>
                    <Col xs={4}>
                      <FormLabel className="form-page__label hidden-md">Nr.*</FormLabel>
                      <FormikInput placeholder="Nr." name="number" />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </FormGroup>
  
          <FormGroup>
            <Row className="form-page__row">
              <Col md={4} className="hidden-xs visible-md">
                <FormLabel className="form-page__label">PLZ/Ort*</FormLabel>
              </Col>
              <Col md={6}>
                <div className="form-page__inputs">
                  <Row>
                    <Col xs={4}>
                      <FormLabel className="form-page__label hidden-md">PLZ*</FormLabel>
                      <FormikInput placeholder="PLZ" name="zip" />
                    </Col>
                    <Col xs={8}>
                      <FormLabel className="form-page__label hidden-md">Ort*</FormLabel>
                      <FormikInput placeholder="Ort" name="place" />
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
      )}
      </Formik>
    </Container>
  );
}

export default Form;
