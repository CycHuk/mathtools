import { Routes, Route, Navigate } from 'react-router-dom'

import FirstOrderPage from './FirstOrder'

const LinearSystems = () => {
	return (
		<Routes>
			<Route path='/first-order' element={<FirstOrderPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default LinearSystems
