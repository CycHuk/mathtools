import { Routes, Route, Navigate } from 'react-router-dom'

import LinearSystems from './LinearSystems'
import NonlinearEquations from './NonlinearEquations'

const Topic = () => {
	return (
		<Routes>
			<Route path='/linear-systems/*' element={<LinearSystems />} />
			<Route path='/nonlinear-equations/*' element={<NonlinearEquations />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default Topic
