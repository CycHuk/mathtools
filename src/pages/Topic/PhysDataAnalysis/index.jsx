import { Routes, Route, Navigate } from 'react-router-dom'

import LagrangePage from './Lagrange'
import InterpolationPage from './Interpolation'
import ApproximationPage from './Approximation'

const PhysDataAnalysis = () => {
	return (
		<Routes>
			<Route path='/lagrange' element={<LagrangePage />} />
			<Route path='/interpolation' element={<InterpolationPage />} />
			<Route path='/approximation' element={<ApproximationPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default PhysDataAnalysis
