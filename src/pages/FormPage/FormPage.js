import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from '../../components/ui/Grid';
import { FormGroup, FormLabel } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import './form-page.scss';

const Schema = Yup.object().shape({
  gender: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  birth: Yup.object({
    day: Yup.string().required('Required'),
    month: Yup.string().required('Required'),
    year: Yup.string().required('Required')
  }),
  street: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  place: Yup.string().required('Required'),
});

function Form() {
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik)

  return (
    <Container className="form-page">
      <form onSubmit={formik.handleSubmit}>
        <FormGroup className="form-page__genders-row">
          <Row className="form-page__row">
            <Col xs={4}>
              <FormLabel className="form-page__label">
                Anrede*
              </FormLabel>
            </Col>
            <Col xs={8} md={6}>
              <div className="form-page__inputs">
                <Input
                  type="radio"
                  name="gender"
                  className="form-page__gender"
                  onChange={formik.handleChange}
                  value="man"
                >
                  Herr
                </Input>
                <Input
                  type="radio"
                  name="gender"
                  className="form-page__gender"
                  onChange={formik.handleChange}
                  value="woman"
                >
                  Frau
                </Input>
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
                <Input
                  placeholder="Vorname"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
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
                <Input
                  placeholder="Nachname"
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
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
                    <Input
                      placeholder="TT"
                      name="birth.day"
                      onChange={formik.handleChange}
                      value={formik.values.birth.day}
                    />
                  </Col>
                  <Col xs={4}>
                    <Input
                      placeholder="MM"
                      name="birth.month"
                      onChange={formik.handleChange}
                      value={formik.values.birth.month}
                    />
                  </Col>
                  <Col xs={4}>
                    <Input
                      placeholder="JJJJ"
                      name="birth.year"
                      onChange={formik.handleChange}
                      value={formik.values.birth.year}
                    />
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
                    <Input
                      placeholder="Straße"
                      name="street"
                      onChange={formik.handleChange}
                      value={formik.values.street}
                    />
                  </Col>
                  <Col xs={4}>
                    <FormLabel className="form-page__label hidden-md">
                      Nr.*
                    </FormLabel>
                    <Input
                      placeholder="Nr."
                      name="number"
                      onChange={formik.handleChange}
                      value={formik.values.number}
                    />
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
                    <Input
                      placeholder="PLZ"
                      name="zip"
                      onChange={formik.handleChange}
                      value={formik.values.zip}
                    />
                  </Col>
                  <Col xs={8}>
                    <FormLabel className="form-page__label hidden-md">
                      Ort*
                    </FormLabel>
                    <Input
                      placeholder="Ort"
                      name="place"
                      onChange={formik.handleChange}
                      value={formik.values.place}
                    />
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
