import React from "react";
import { Card, Button } from "react-bootstrap";
import home from "../../img/home.png";
import p1 from '../../img/inteligencias.png';
import p2 from '../../img/vocacional.png';
import p3 from '../../img/cerebro.png';
import { Link } from 'react-router-dom';


const Home = () => {
  

  return (
    <div className="container-lg">
      <h1 className="text-end">Descubre oportunidades de elegir tu futuro</h1>
      <div className="d-flex">
        <img className="img-home" src={home} alt="home" />
        <div className="mt-5">
          <p className="mb-4">
            Este es un Inventario de Intereses Vocacionales y Ocupacionales, en el
            que usted encontrará un conjunto de pares de preguntas, permitiéndole
            obtener su perfil de preferencias profesionales y ocupacionales. Para
            ello sólo tiene que elegir entre dos alternativas; y, en el formulario
            de respuestas marcarás la letra “a”, la “b”, ambas “a y b” si su
            respuesta incluye las dos alternativas o N.A. (ninguna de las
            anteriores), según sea su preferencia.
          </p>
          <a className="btn btn-primary comenzar1" href="#pruebas">
            Pruebas
          </a>
        </div>
      </div>

      <div className="d-flex justify-content-between my-5" id="pruebas">

        <Card style={{ width: '18rem' }} className="Cards">
          <Card.Img variant="top" src={p1} className="imgCard " />
          <Card.Body>
            <Card.Title className="text-center">Test de Inteligencia</Card.Title>
            <Card.Text>
              El estudio de la inteligencia humana ha sido uno de los campos más investigados
              a lo largo del tiempo. Gracias a ello conocemos su funcionamiento, así como una
              gran variedad de test psicométricos que sirven para medirla.
            </Card.Text>
            <Link to={`/test/testinteligencia`}>
              <div className="d-grid gap-2 mt-3">
                <Button variant="primary" type="submit">
                  Comenzar
                </Button>
                </div>
              </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="Cards">
          <Card.Img variant="top" src={p3} className="imgCard" />
          <Card.Body>
            <Card.Title className="text-center">Test Vocacional</Card.Title>
            <Card.Text>
              Conocer nuestra personalidad es valioso para la toma de decisión de carrera.
              Nuestros intereses vocacionales y características personales.
              Es por eso que el test de holland es tan importante en el proceso de orientación vocacional.
            </Card.Text>
            
              <Link to="/test/testvocacional">
              <div className="d-grid gap-2 mt-3">
                <Button variant="primary" type="submit">
                  Comenzar
                </Button>
                </div>
              </Link>
            
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="Cards">
          <Card.Img variant="top" src={p2} className="imgCard" />
          <Card.Body>
            <Card.Title className="text-center">Test de Personalidad</Card.Title>
            <Card.Text>
              La orientación vocacional es un proceso psicológico que integra
              lo consciente y lo inconsciente, lo cognitivo y lo afectivo de
              una persona (González, 2004), y se relaciona con sus contextos
              sociales, familiares y comunitarios
            </Card.Text>
            <Link to="/test/testpersonalidad">
              <div className="d-grid gap-2 mt-3">
                <Button variant="primary" type="submit">
                  Comenzar
                </Button>
                </div>
              </Link>
          </Card.Body>

        </Card>
      </div>
    </div>
  );
};

export default Home;
