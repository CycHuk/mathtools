import { Routes, Route, Navigate } from 'react-router-dom'

import BisectionPage from './Bisection'
import ChordPage from './Chord'

const NonlinearEquations = () => {
	return (
		<Routes>
			<Route path='/bisection' element={<BisectionPage />} />
			<Route path='/chord' element={<ChordPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default NonlinearEquations
