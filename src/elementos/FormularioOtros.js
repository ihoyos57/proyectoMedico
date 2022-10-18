import React, { useState } from 'react';
import {  ContenedorBotonCentrado, Boton } from './Formularios';
import { CheckExamples } from '../componentes/Checkboxcomun'


const FormularioOtros= () => {
    return (
        <main>
      
                <ContenedorBotonCentrado>
                    <CheckExamples></CheckExamples>
                            
                </ContenedorBotonCentrado>

                <ContenedorBotonCentrado>
                    <Boton type="submit">Diagnostico</Boton>
                    
                </ContenedorBotonCentrado>
                
            
        </main>
    );

} 
export {FormularioOtros};