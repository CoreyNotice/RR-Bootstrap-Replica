import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StoreListing() {
  return (
    <div style={{ margin: "auto" }}>
    <><h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Houston</h2>
    <Container style={{ marginTop: "48.5px", textAlign: "center" }}>
          <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
              <Row>
                  <Col xs=".5">
                      <img style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/87x87/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png" roundedCircle />
                  </Col>
                  <Col>
                      <h5 style={{ fontWeight: "bold" ,textAlign: "left"}}>Wegmans</h5>
                      <p>Delivery * Pickup</p>
                  </Col>
              </Row>
              <Col sm="1"></Col>
              <Row>
                  <Col xs=".5">
                      <img style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/174x174/www.instacart.com/assets/domains/warehouse/logo/235/c6dee5a3-afe8-4e60-9156-1a02a79fc72d.jpg" roundedCircle />
                  </Col>
                  <Col style={{textAlign: "left"}}>
                      <h5 style={{ fontWeight: "bold" }}>Stop and Shop</h5>
                      <p>Delivery * Pickup</p>
                  </Col>
              </Row>
              <Col sm="1"></Col> 
              <Row>
                  <Col xs=".5">
                      <img style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}  src="https://www.instacart.com/image-server/150x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle />
                  </Col>
                  <Col md="6">
                      <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                      <p>Delivery</p>
                  </Col>
              </Row>
          </Row>
      </Container></>
    </div>
  )
}

export default StoreListing