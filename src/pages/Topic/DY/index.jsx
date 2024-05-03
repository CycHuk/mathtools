import { Routes, Route, Navigate } from 'react-router-dom'

import FirstOrderPage from './FirstOrder'
import SecondOrderPage from './SecondOrder'

const LinearSystems = () => {
	return (
		<Routes>
			<Route path='/first-order' element={<FirstOrderPage />} />
			<Route path='/second-order' element={<SecondOrderPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default LinearSystems
