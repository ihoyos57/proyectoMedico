import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../componentes/Input';
import { Link } from 'react-router-dom'

const FormularioLogin = () => {

    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{4,12}$/ // 4 a 12 digitos.
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (


            correo.valido === 'true' &&
            password.valido === 'true'

        ) {

            // inicia sesión ()
        } else {
            cambiarFormularioValido(false);
        }
    }

    return (
        <main>
            <Formulario action="" onSubmit={onSubmit}>
                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    tipo="email"
                    label="Correo Electrónico"
                    placeholder="john@correo.com"
                    name="correo"
                    leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                    expresionRegular={expresiones.correo}
                />
                <Input
                    estado={password}
                    cambiarEstado={cambiarPassword}
                    tipo="password"
                    label="Contraseña"
                    name="password1"
                    leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                    expresionRegular={expresiones.password}
                />


                {formularioValido === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b> Por favor rellena el formulario correctamente.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                <Boton to="/menu"> Ingresar </Boton>
                    {formularioValido === true && <MensajeExito>Usario ingresado exitosamente!</MensajeExito>}
                </ContenedorBotonCentrado>
                <ContenedorBotonCentrado>

                <Link to="/registro"> Registrarse </Link>


                    {formularioValido === true && <MensajeExito>Usario ingresado exitosamente!</MensajeExito>}
                </ContenedorBotonCentrado>
            </Formulario>
        </main>
    );
}

export { FormularioLogin };