import { Routes, Route, Navigate } from 'react-router-dom'

import GaussPage from './Gauss'
import GaussJordanPage from './GaussJordan'
import KramerPage from './Kramer'
import MatrixPage from './Matrix'
import YakobiPage from './Yakobi'
import GaussSeidelPage from './GaussSeidel'
import RelaxationPage from './Relaxation'

const LinearSystems = () => {
	return (
		<Routes>
			<Route path='/gauss' element={<GaussPage />} />
			<Route path='/gauss-jordan' element={<GaussJordanPage />} />
			<Route path='/kramer' element={<KramerPage />} />
			<Route path='/matrix' element={<MatrixPage />} />
			<Route path='/yakobi' element={<YakobiPage />} />
			<Route path='/gauss-seidel' element={<GaussSeidelPage />} />
			<Route path='/relaxation' element={<RelaxationPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default LinearSystems
