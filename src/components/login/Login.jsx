import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginEmailPassword, loginFacebok, loginGoogle } from "../../actions/loginAction";
import { Formik } from 'formik'
import logo from '../../img/UTEST (4).png'
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6, 'Debe tener minimo 6 caracteres').required()
})

const Login = () => {
  const dispatch = useDispatch()
 
  const handleLoginGoogle = () => {
    dispatch(loginGoogle())
  }
  const handleLoginFacebook = () => {
    dispatch(loginFacebok())
  }
 
  return (
    <>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        

        // validate={()=>{
        //     let errores ={}
           
        //     if(!valores.email){
        //         errores.email = 'Por favor ingresa un email'
        //     }        
        //      return errores;

        //Validación Password
          validationSchema={schema}

        //  }}

        onSubmit={(valores, { resetForm }) => {
          // setenvioformulario(true)
          dispatch(loginEmailPassword(valores.email, valores.password))
          resetForm()
          console.log(valores)
          console.log("formulario enviado")
        }}>
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <div className="home">
            <div className="itemsform">
              <div className="my-3">
                <Link to="/">
                <img src={logo} alt="Logo" className="logoUser " />
                </Link>
              </div>
              <Card>
                <Card.Header><h1 className="text-center">LOGIN</h1></Card.Header>
                <Card.Body>
                  <Form className="formlogin" onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Ingresa tu email</Form.Label>
                      <Form.Control type="email"
                        placeholder="Ingresa tu email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                      {touched.email && errors.email && <div className="error">{errors.email}</div>}

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword"  >
                      <Form.Label>Ingresa tu contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {touched.password && errors.password && <div className="error">{errors.password}</div>}
                    </Form.Group>
                    <hr className="mt-4" />
                    <div className="d-flex justify-content-center mt-2">
                      <div onClick={() => handleLoginGoogle()} className="poiter">
                        <span
                          className="iconify py-2 "
                          data-icon="flat-color-icons:google"
                          data-width="50">
                        </span>
                      </div>
                      <div onClick={() => handleLoginFacebook()} className="poiter">
                        <span
                          className="iconify py-2 pe"
                          data-icon="logos:facebook"
                          data-width="50">
                        </span>
                      </div>
                    </div>
                    <hr className="mt-4" />
                    <div className="d-grid gap-2 mt-3">
                      <Button variant="primary" type="submit">
                        Iniciar Sesión
                      </Button>
                    </div>
                    <hr className="mt-2" />
                    <span>
                      ¿No tienes cuenta?{" "}
                      <Link to="/register">
                        {" "}
                        Registrate Aquí
                      </Link>
                      <hr />
                    </span>
                  </Form>

                </Card.Body>
              </Card>
            </div>
          </div>

        )}
      </Formik >
      <div className="m-2"></div>
      <Footer/>
    </>
  );
}

export default Login;
