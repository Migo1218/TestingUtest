import { useEffect, useState } from "react"
import { Button, Card, FormGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Input, Label } from "reactstrap"
import { listarPreguntas } from "../../../actions/listarAction"
import Footer from '../../footer/Footer.jsx'
import { Categoria } from "../../../actions/categoriaAction"
import { acomuladores } from "../../helpers/acomuladores"
import Navbar from '../../navbar/Navbar.jsx'
import { listarPreguntasTestVocacional } from "../../../actions/listarTesVAction"
import { listarTestPersonalidad } from "../../../actions/listarTestPersonalidad"
import * as yup from 'yup'
import {useFormik} from 'formik'

const schema = yup.object().shape({
    radioGroup: yup.string().required("A radio option is required")
})

const Runtest = () => {


        
    

    const {test} =  useParams()
    
    const [next, setNext] = useState(1);
    const [statetest, setStatetest] = useState(false);
    const [guardarTest, setGuardarTest] = useState(true);
    const [radioCheck, setRadioCheck] = useState();
    const [categorias, setCategorias] = useState([]);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [e, setE] = useState(0);
    const [f, setF] = useState(0);
    const [g, setG] = useState(0);

    const dispatch = useDispatch()
    const [questions] = useSelector(state => state.listar.preguntas)

   useEffect(() => {
       if(test === "testinteligencia")   {

           dispatch(listarPreguntas())
    } else if(test === "testvocacional"){
        dispatch(listarPreguntasTestVocacional())       
        
       }else if(test === "testpersonalidad"){
        dispatch(listarTestPersonalidad())
       }  
    
   }, [dispatch])

   if(!questions){
       return  <h3>esperando...</h3>      
       
   }else{
     
    
  
    const handleChangeRadio = e => {
        setRadioCheck(e.target.value);
    }
    
    const handleSumar = () => {
        if (next <= questions.length) {
            valoracion();
            if (next === questions.length) {
                setStatetest(true)
                
            } else {
                setNext(next + 1)
                setRadioCheck();
                
            }
        }

    }
   
    const valoracion = () => {

        switch (questions[next - 1].category) {
            case 'a':
                setA(a + acomuladores(radioCheck))
                break;
            case 'b':
                 setB( b + acomuladores(radioCheck))
                break;
            case 'c':
                setC(c + acomuladores(radioCheck))
                break;
            case 'd':
                setD(d + acomuladores(radioCheck))
                break;
            case 'e':
                setE(e + acomuladores(radioCheck))
                break;
            case 'f':
                setF(f + acomuladores(radioCheck))
                break;
            case 'g':
                setG(g + acomuladores(radioCheck))
                break;

            default:
                break;
        }


    }
    const handleFinalizar = () => {
        setCategorias([a,b,c,d,e,f,g ])
        setGuardarTest(false)        
    }
   const handleVerResult = () =>{
   dispatch(Categoria(categorias))
    }

    
    return (
        <div>
            <Navbar />
            <div className="container-lg">
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '50rem' }} className="Cards rounded">
                        <Card.Body>
                            <div className="row d-flex justify-content-center">
                                <div className="col-2 text-center bg-primary m-auto rounded w-25">
                                    <h1 className="text-light">{`${next} / ${questions.length}`}</h1>
                                </div>
                                <div className="col-8 ">
                                    <p>{questions[next - 1].questions}</p>
                                    
                                    <FormGroup className="formGroupRadios">
                                        <FormGroup>
                                            <Input
                                                id="radio0"
                                                name="radioGroup"
                                                type="radio"
                                                value={0}
                                                checked={radioCheck == 0 ? true : false}
                                                onChange={handleChangeRadio}
                                                required
                                            />
                                            <Label for="radio0">
                                                Cero
                                            </Label>
                                        </FormGroup>

                                        <FormGroup>
                                            <Input
                                                id="radio1"
                                                type="radio"
                                                name="radioGroup"
                                                value={1}
                                                checked={radioCheck == 1 ? true : false}
                                                onChange={handleChangeRadio}
                                            />
                                            <Label for="radio1">
                                                Uno
                                            </Label>
                                        </FormGroup>

                                        <FormGroup>
                                            <Input
                                                id="radio2"
                                                type="radio"
                                                name="radioGroup"
                                                value={2}
                                                checked={radioCheck == 2 ? true : false}
                                                onChange={handleChangeRadio}
                                            />
                                            <Label for="radio2">
                                                Dos
                                            </Label>
                                        </FormGroup>

                                        <FormGroup>
                                            <Input
                                                id="radio3"
                                                type="radio"
                                                name="radioGroup"
                                                value={3}
                                                checked={radioCheck == 3 ? true : false}
                                                onChange={handleChangeRadio}
                                            />
                                            <Label for="radio3">
                                                Tres
                                            </Label>
                                        </FormGroup>

                                    </FormGroup>

                                </div>
                            </div>

                            {
                                guardarTest?
                                (!statetest ? 
                                (<div className="d-flex justify-content-end">
                                    <Button variant="primary" onClick={handleSumar}>Siguente</Button>
                                    </div>) : (
                                   <div className="d-flex justify-content-end">
                                    <Button variant="primary" onClick={handleFinalizar}>Finalizar</Button>
                                    </div>
                                    ))
                                :(<div className="d-flex justify-content-end">
                                    <Link to="/resultTest">
                                    <Button variant="primary" onClick={handleVerResult}>Ver Resultados</Button>
                                    </Link> 
                                    </div>
                                )
                                }  
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}
}
export default Runtest;
