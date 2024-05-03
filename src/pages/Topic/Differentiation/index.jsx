import { Routes, Route, Navigate } from 'react-router-dom'

import FiniteDifferencesPage from './FiniteDifferences'
import UncertainCoefficientsPage from './UncertainCoefficients'

const LinearSystems = () => {
	return (
		<Routes>
			<Route path='/finite-differences' element={<FiniteDifferencesPage />} />
			<Route
				path='/uncertain-coefficients'
				element={<UncertainCoefficientsPage />}
			/>

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default LinearSystems
