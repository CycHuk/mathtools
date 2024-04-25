import { Routes, Route, Navigate } from 'react-router-dom'

import RectanglePage from './Rectangle'
import TrapezoidPage from './Trapezoid'

const Integration = () => {
	return (
		<Routes>
			<Route path='/rectangle' element={<RectanglePage />} />
			<Route path='/trapezoid' element={<TrapezoidPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default Integration
