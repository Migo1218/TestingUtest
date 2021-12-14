import { Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../actions/loginAction';


export const UserProfile = ({ ...props }) => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = useSelector(store => store.login);
    console.log(user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/")
    }
    return (
        <>

            <Icon icon="bx:bx-user-circle" height="50" onClick={handleShow} />

            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Perfil de Usuario</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container">
                       <div className='imgprofile'>
                       <img src={user.image} alt="Avatar" />
                       
                       </div>
                       <div className='usuarionombre'>
                       <h4>{`${user.name}`}</h4>
                       </div>
                       
                        
                        <div className="cerrarsesion" >

                        <Button variant="dark" onClick={handleLogout}>Cerrar Sesion</Button>

                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}



