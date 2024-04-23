import { Routes, Route, Navigate } from 'react-router-dom'

import LinearSystems from './LinearSystems'
import NonlinearEquations from './NonlinearEquations'
import PhysDataAnalysis from './PhysDataAnalysis'
import Differentiation from './Differentiation'

const Topic = () => {
	return (
		<Routes>
			<Route path='/linear-systems/*' element={<LinearSystems />} />
			<Route path='/nonlinear-equations/*' element={<NonlinearEquations />} />
			<Route path='/phys-data-analysis/*' element={<PhysDataAnalysis />} />
			<Route path='/differentiation/*' element={<Differentiation />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default Topic
