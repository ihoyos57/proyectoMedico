import React, { useState } from 'react';
import {  ContenedorBotonCentrado, Boton } from './Formularios';
import { CheckExampli } from '../componentes/chackboxmuscular'


const FormularioOrto = () => {
    return (
        <main>
      
                <ContenedorBotonCentrado>
                    <CheckExampli></CheckExampli>
                            
                </ContenedorBotonCentrado>

                <ContenedorBotonCentrado>
                    <Boton type="submit">Diagnostico</Boton>
                    
                </ContenedorBotonCentrado>
                
            
        </main>
    );

} 
export {FormularioOrto};