// Импорт React и ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Импорт BrowserRouter из react-router-dom
import { BrowserRouter } from 'react-router-dom';

// Импорт компонента App из './App'
import App from './App';

// Создание корневого элемента ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеринг компонента App внутри BrowserRouter
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

