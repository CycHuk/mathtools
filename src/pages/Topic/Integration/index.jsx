import { Routes, Route, Navigate } from 'react-router-dom'

import RectanglePage from './Rectangle'
import TrapezoidPage from './Trapezoid'
import SimsonPage from './Simson'
import ChebishevPage from './Chebishev'
import LejandrGaussPage from './LejandrGauss'
import TeylorPage from './Teylor'
import MonteCarloPage from './MonteCarlo'

const Integration = () => {
	return (
		<Routes>
			<Route path='/rectangle' element={<RectanglePage />} />
			<Route path='/trapezoid' element={<TrapezoidPage />} />
			<Route path='/simson' element={<SimsonPage />} />
			<Route path='/chebishev' element={<ChebishevPage />} />
			<Route path='/lejandr-gauss' element={<LejandrGaussPage />} />
			<Route path='/teylor' element={<TeylorPage />} />
			<Route path='/monte-carlo' element={<MonteCarloPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default Integration
