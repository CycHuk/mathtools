import { Routes, Route, Navigate } from 'react-router-dom'

import RectanglePage from './Rectangle'
import TrapezoidPage from './Trapezoid'
import SimsonPage from './Simson'
import ChebishevPage from './Chebishev'

const Integration = () => {
	return (
		<Routes>
			<Route path='/rectangle' element={<RectanglePage />} />
			<Route path='/trapezoid' element={<TrapezoidPage />} />
			<Route path='/simson' element={<SimsonPage />} />
			<Route path='/chebishev' element={<ChebishevPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default Integration
