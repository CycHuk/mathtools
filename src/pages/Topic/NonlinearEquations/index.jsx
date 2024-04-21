import { Routes, Route, Navigate } from 'react-router-dom'

import BisectionPage from './Bisection'

const NonlinearEquations = () => {
	return (
		<Routes>
			<Route path='/bisection' element={<BisectionPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default NonlinearEquations
