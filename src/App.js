import React from 'react';
import './styles/main.scss';
import './App.scss';
import { Container, Row, Col } from './components/ui/Grid';

function App() {
  return (
    <Container style={{background: '#EEE'}}>
      <Row>
        <Col xs={6} sm={2} md={4} lg={12}>
          <div style={{ height: '20px', background: 'red' }}></div>
        </Col>
        <Col sm={2} md={4} lg={12}>
          <div style={{ height: '20px', background: 'green' }}></div>
        </Col>
        <Col sm={2} md={4} lg={12}>
          <div style={{ height: '20px', background: 'blue' }}></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
