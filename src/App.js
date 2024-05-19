// Импорт библиотеки React
import React from 'react'
// Импорт компонентов Routes и Route из библиотеки react-router-dom для маршрутизации
import { Routes, Route } from 'react-router-dom'
// Импорт компонента ToastContainer из библиотеки react-toastify для отображения всплывающих уведомлений
import { ToastContainer } from 'react-toastify'

// Импорт компонента MainLayout из файла './layouts/MainLayout'
import MainLayout from './layouts/MainLayout'

// Импорт компонента Сalc из файла './pages/Сalc'
import Сalc from './pages/Сalc'
// Импорт компонента Docs из файла './pages/Docs'
import Docs from './pages/Docs'
// Импорт компонента Preview из файла './pages/Preview'
import Preview from './pages/Preview'

// Импорт компонента Topic из файла './pages/Topic'
import Topic from './pages/Topic'

// Импорт стилей из файла './scss/main.scss'
import './scss/main.scss'

// Объявление функционального компонента App
function App() {
	// Возвращение JSX для рендеринга
	return (
		<> {/* Фрагменты используются для возврата нескольких элементов без добавления дополнительных узлов в DOM */}
			<ToastContainer /> {/* Рендеринг компонента ToastContainer для отображения всплывающих уведомлений */}
			<MainLayout> {/* Рендеринг компонента MainLayout */}
				<Routes> {/* Определение маршрутов */}
					<Route path='/' element={<Preview />} /> {/* Рендеринг компонента Preview для пути '/' */}
					<Route path='/calc' element={<Сalc />} /> {/* Рендеринг компонента Сalc для пути '/calc' */}
					<Route path='/docs' element={<Docs />} /> {/* Рендеринг компонента Docs для пути '/docs' */}

					<Route path='*' element={<Topic />} /> {/* Рендеринг компонента Topic для любого другого пути */}
				</Routes>
			</MainLayout>
		</>
	)
}

// Экспорт компонента App по умолчанию
export default App
