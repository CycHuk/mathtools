import { Routes, Route, Navigate } from 'react-router-dom'

import FiniteDifferencesPage from './FiniteDifferences'

const LinearSystems = () => {
	return (
		<Routes>
			<Route path='/finite-differences' element={<FiniteDifferencesPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default LinearSystems
