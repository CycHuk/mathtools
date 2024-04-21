import { Routes, Route, Navigate } from 'react-router-dom'

import LagrangePage from './Lagrange'

const PhysDataAnalysis = () => {
	return (
		<Routes>
			<Route path='/lagrange' element={<LagrangePage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default PhysDataAnalysis
