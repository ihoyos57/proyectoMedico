import React, { useState } from 'react';
import {  ContenedorBotonCentrado, Boton } from './Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const FormularioMenu = () => {
    return (
        <main>
      
                <ContenedorBotonCentrado>
                    <Boton type="submit">determinar Enfermedad</Boton>
                            
                </ContenedorBotonCentrado>

                <ContenedorBotonCentrado>
                    <Boton type="submit">Programar cita</Boton>
                    
                </ContenedorBotonCentrado>
            
        </main>
    );

} 
export {FormularioMenu};