import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";

export default function About() {
  return (
    <div className="home">
      <NavBar />
      <CardGroup className="vi">
        <Card className="vimi">
          <Card.Body >
            <Card.Title className="tituloacercade">Visión</Card.Title>
            <Card.Text>
             no se que debo escribir acá
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card className="vimi">
          <Card.Body >
            <Card.Title className="tituloacercade">Misión</Card.Title>
            <Card.Text>
              y acá tampoco sé{" "}
            </Card.Text>
          </Card.Body>
          
        </Card>
       
      </CardGroup>
      <Footer />
    </div>
  );
}
