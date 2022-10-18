import React, { useState } from 'react';
import {  ContenedorBotonCentrado, Boton } from './Formularios';
import { CheckExample } from '../componentes/checkbox'


const FormularioSaludM = () => {
    return (
        <main>
      
                <ContenedorBotonCentrado>
                    <CheckExample></CheckExample>
                            
                </ContenedorBotonCentrado>

                <ContenedorBotonCentrado>
                    <Boton type="submit">Diagnostico</Boton>
                    
                </ContenedorBotonCentrado>
                
            
        </main>
    );

} 
export {FormularioSaludM};