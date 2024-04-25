import { Routes, Route, Navigate } from 'react-router-dom'

import RectanglePage from './Rectangle'

const Integration = () => {
	return (
		<Routes>
			<Route path='/rectangle' element={<RectanglePage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default Integration
