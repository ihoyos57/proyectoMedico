import React, { useState } from 'react';
import {  ContenedorBotonCentrado, Boton } from './Formularios';


const FormularioSintomas = () => {
    return (
        <main>
      
                <ContenedorBotonCentrado>
                    <Boton type="submit">Salud mental</Boton>
                            
                </ContenedorBotonCentrado>

                <ContenedorBotonCentrado>
                    <Boton type="submit">Ortopedia</Boton>
                    
                </ContenedorBotonCentrado>
                <ContenedorBotonCentrado>
                    <Boton type="submit">Otra categoria</Boton>
                    
                </ContenedorBotonCentrado>
            
        </main>
    );

} 
export {FormularioSintomas};