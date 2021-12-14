import { Formik } from "formik";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { Link} from "react-router-dom";
import { registerEmailPassword } from "../../actions/registerAction";
import Footer from "../footer/Footer";
import { fileUpload } from "../helpers/FileUpload";
import logo from '../../img/UTEST (4).png'

const Register = () => {
  const dispatch = useDispatch();
 
 
  return (
    <div>
     

      <Formik
        initialValues={{
          name: '',
          file: '',
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          if (valores.password1 === valores.password2) {
            dispatch(
              registerEmailPassword(
                valores.name,
                valores.file,
                valores.email,
                valores.password1,
              )
            );
          } else {
            console.log("las contraseñas no son iguales");
          }

          resetForm();
          console.log(valores);
          console.log("formulario enviado");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <div className="home">
            <div className="itemsform">
            <div className="my-3">
                <Link to="/">
                <img src={logo} alt="Logo" className="logoUser " />
                </Link>
              </div>
              <Card>
                <Card.Header><h1 className="text-center">REGISTRO</h1></Card.Header>
                <Card.Body>
                  <Form className="formlogin" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Ingresa tu Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu Nombre"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFile">
                      <Form.Label>Carga tu Foto</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="Ingresa tu Nombre"
                        name="file"
                        value={values.file}
                        onChange={(e) => {
                          const file = e.target.files[0]
                          fileUpload(file)
                            .then(response => {
                              values.file = response
                              console.log(values.file);
                            })
                            .catch(error => {
                              console.log(error.message);
                            })
                        }}
                        onBlur={handleBlur}
                      />
                      {touched.file && errors.file && (
                        <div className="error">{errors.file}</div>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Ingresa tu email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingresa un email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Ingresa una contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa una contraseña"
                        name="password1"
                        value={values.password1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword1">
                      <Form.Label>Ingresa una contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa una contraseña"
                        name="password2"
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Form.Group>
                    <hr />
                    <div className="d-grid gap-2 mt-3">
                      <Button variant="primary" type="submit">
                        Registrarse
                      </Button>
                    </div>
                    <hr />
                    <span>
                      ¿Ya tienes una cuenta? <Link to="/login"> Inicia sesión</Link>
                    </span>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </Formik>
      <Footer />
    </div>
  );
 
};

export default Register;
