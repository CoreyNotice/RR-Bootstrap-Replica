import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TopBar() {
   

  return (
    <Card>
        <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" media="(min-width: 768px)" rel="preload"alt="Card image" />
      <Card.Header>
    <Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img  src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
        <img src="https://www.instacart.com/assets/growth/landing/locations_page/us_flag-ba87db09d555f6ca56f88b49567659e9fcd51d5083d312e1040464ab996900c1.svg" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
            <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
            <Button style={{fontSize: "18px"}} variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>
</Card.Header>
    </Card>
  );
}

export default TopBar
{/* <object data="https://www.instacart.com/assets/growth/landing/locations_page/us_flag-ba87db09d555f6ca56f88b49567659e9fcd51d5083d312e1040464ab996900c1.svg" aria-label="United States" type="image/svg+xml" tabindex="-1" aria-hidden="true" class="css-e9cz0w">United States</object>
<img src="https://www.instacart.com/assets/homepage/QR_code_left-d5860cb8e299f89f4a14b7f556d11052dc21f59d54fdd69e2b2154538fc31946.png" alt="" class="css-1hjt0is"></img> */}
