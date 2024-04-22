import { Routes, Route, Navigate } from 'react-router-dom'

import LagrangePage from './Lagrange'
import InterpolationPage from './Interpolation'

const PhysDataAnalysis = () => {
	return (
		<Routes>
			<Route path='/lagrange' element={<LagrangePage />} />
			<Route path='/interpolation' element={<InterpolationPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default PhysDataAnalysis
