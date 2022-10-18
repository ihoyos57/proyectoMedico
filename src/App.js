import React, { useState } from 'react';
import { FormularioLogin } from './elementos/FormularioLogin';
import { FormularioRegistro } from './elementos/FormularioRegistro';
import { FormularioMenu } from './elementos/FormularioMenu';
import { ProgramarCita } from './elementos/ProgramarCita';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormularioSintomas } from './elementos/FormularioSintomas';
import{FormularioSaludM} from './elementos/FormularioSaludM'
import{FormularioOrto} from './elementos/FormularioOrto'
import{FormularioOtros} from './elementos/FormularioOtros'

const App = () => {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<FormularioLogin />} />
			</Routes>

			<Routes>
				<Route path='/registro' element={<FormularioRegistro />} />
			</Routes>

			<Routes>
				<Route path='/menu' element={<FormularioMenu />} />
			</Routes>

			<Routes>
				<Route path='/citas' element={<ProgramarCita />} />
			</Routes>

			<Routes>
				<Route path='/SaludM' element={<FormularioSaludM />} />
			</Routes>
			<Routes>

				<Route path='/Ortopedia' element={<FormularioOrto />} />
			</Routes>
			<Routes>

				<Route path='/Otros' element={<FormularioOtros />} />
			</Routes>
			<Routes>

				<Route path='/sintomas' element={<FormularioSintomas />} />
			</Routes>


		</Router>
		
	);
}

export default App;