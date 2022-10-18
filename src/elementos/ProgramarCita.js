import React, { useState } from 'react';
import {ContenedorBotonCentrado, Boton, MensajeExito} from './Formularios';
import ComponenteInput from '../componentes/Input';
import { ListaDesplegable } from '../componentes/List'

const ProgramarCita = () => {
        const [Fecha, cambiarFecha] = useState({ campo: '', valido: null })
        const [Horario, cambiarHoriario] = useState({ campo: '', valido: null });
        const [Ubicacion, cambiarUbicacion] = useState({ campo: '', valido: null });          
        const expresiones = {
            Fecha: /^.{4,16}$/, // Letras, numeros, guion y guion_bajo
            Horario: /^.{4,12}$/, // 4 a 12 digitos.
            Ubicacion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
         
        }
    
      

            if (
                Fecha.valido === 'true' &&
                Horario.valido === 'true'&&
                Ubicacion.valido === 'true'
            ) {
                cambiarFecha({ campo: '', valido: null});
                cambiarHoriario({ campo: '', valido: null });
                cambiarUbicacion({campo: '', valido: null})
                
    
                // ... 
            } else {
                
            }
        
    
    return(
        <main>
                <ComponenteInput
                    estado={Fecha}
                    cambiarEstado={cambiarFecha}
                    tipo="date"
                    label="Dia"
                    leyendaError="Debe escoger un dia para su cita."
                    expresionRegular={expresiones.Fecha}
                />
               
                <ComponenteInput
                    estado={Horario}
                    cambiarEstado={cambiarHoriario}
                    tipo="time"
                    label="Horario"
                    leyendaError="Debe escoger una hora para su cita"
                    expresionRegular={expresiones.Horario}
                />
                 <ComponenteInput
                    estado={Ubicacion}
                    cambiarEstado={cambiarUbicacion}
                    tipo="lable"
                    label="Ubicación"
                    leyendaError="Debe colocar la ubicación de su cita."
                    expresionRegular={expresiones.Ubicacion}
                />

            
                  Especialista
    
                <div>
                <ListaDesplegable/>
                </div>
            
                
                <div>
                    <ContenedorBotonCentrado>
                        <Boton type="submit">Programar cita</Boton>

                    </ContenedorBotonCentrado>
                </div>

              
        </main>
            
       
       
    );
    
}


export {ProgramarCita};