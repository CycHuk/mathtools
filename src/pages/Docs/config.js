const topics = [
	{
		topic: 'Математические и численные методы решения задач линейной алгебры',
		methods: [
			{
				topic: 'Метод Крамера для решения СЛАУ',
				variety: [
					{ name: 'Теория', url: './pdf/topic1/method1.1.pdf', scrollLevel: 0 },
					{ name: 'Пример', url: './pdf/topic1/method1.2.pdf', scrollLevel: 0 },
				],
			},
			{
				topic: 'Метод Гаусса для решения СЛАУ',
				variety: [
					{ name: 'Теория', url: './pdf/topic1/method2.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic1/method2.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Гаусса-Жордана для решения СЛАУ',
				variety: [
					{ name: 'Теория', url: './pdf/topic1/method3.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic1/method3.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Матричный метод для решения СЛАУ',
				variety: [
					{ name: 'Теория', url: './pdf/topic1/method4.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic1/method4.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Якоби для решения СЛАУ',
				variety: [
					{ name: 'Теория', url: './pdf/topic1/method5.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic1/method5.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Гаусса Зейделя для решения СЛАУ',
				variety: [
					{ name: 'Теория', url: './pdf/topic1/method6.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic1/method6.2.pdf',
						scrollLevel: 0,
					},
				],
			},
		],
	},
	{
		topic: 'Решение нелинейных уравнений и их систем',
		methods: [
			{
				topic: 'Метод половинного деления',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method1.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic2/method1.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Золотого сечения',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method2.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic2/method2.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Хорд',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method3.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic2/method3.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Риддерса',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method4.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic2/method4.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Ньютона',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method5.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic2/method5.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Мод. Ньютона',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method6.1.pdf', scrollLevel: 0 },
					{ name: 'Пример', url: './pdf/topic2/method6.2.pdf', scrollLevel: 0 },
				],
			},
			{
				topic: 'Метод Секущих',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method7.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic2/method7.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Мюллера',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method8.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic2/method8.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод простых итераций',
				variety: [
					{ name: 'Теория', url: './pdf/topic2/method9.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic2/method9.2.pdf',
						scrollLevel: 0,
					},
				],
			},
		],
	},
	{
		topic: 'Задача обработки экспериментальных данных физических экспериментов',
		methods: [
			{
				topic: 'Полином Лагранжа',
				variety: [
					{ name: 'Теория', url: './pdf/topic3/method1.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic3/method1.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Сплайн-интерполяция',
				variety: [
					{ name: 'Теория', url: './pdf/topic3/method2.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic3/method2.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Аппроксимация',
				variety: [
					{ name: 'Теория', url: './pdf/topic3/method3.1.pdf', scrollLevel: 0 },
					{ name: 'Пример', url: './pdf/topic3/method3.2.pdf', scrollLevel: 0 },
				],
			},
		],
	},
	{
		topic: 'Численное интегрирование',
		methods: [
			{
				topic: 'Метод Прямоугольника',
				variety: [
					{ name: 'Теория', url: './pdf/topic4/method1.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic4/method1.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Трапеции',
				variety: [
					{ name: 'Теория', url: './pdf/topic4/method2.1.pdf', scrollLevel: 0 },
					{ name: 'Пример', url: './pdf/topic4/method2.2.pdf', scrollLevel: 0 },
				],
			},
			{
				topic: 'Метод Симпсона (парабол)',
				variety: [
					{ name: 'Теория', url: './pdf/topic4/method3.1.pdf', scrollLevel: 0 },
					{ name: 'Пример', url: './pdf/topic4/method3.2.pdf', scrollLevel: 0 },
				],
			},
			{
				topic: 'Метод Лежандра-Гаусса',
				variety: [
					{ name: 'Теория', url: './pdf/topic4/method5.1.pdf', scrollLevel: 0 },
					{
						name: 'Пример',
						url: './pdf/topic4/method5.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Разложение в ряд Тейлора',
				variety: [
					{ name: 'Теория', url: './pdf/topic4/method6.1.pdf', scrollLevel: 0 },
					{ name: 'Пример', url: './pdf/topic4/method6.2.pdf', scrollLevel: 0 },
				],
			},
		],
	},
	{
		topic: 'Численное дифференцирование',
		methods: [
			{
				topic: 'Конечно-разностная аппроксимация',
				variety: [
					{ name: 'Теория', url: './pdf/topic5/method1.1.pdf', scrollLevel: 0 },
					{ name: 'Пример', url: './pdf/topic5/method1.2.pdf', scrollLevel: 0 },
				],
			},
			{
				topic: 'Метод неопределенных коэффициентов',
				variety: [
					{ name: 'Теория', url: './pdf/topic5/method2.1.pdf', scrollLevel: 0 },
					{ name: 'Пример', url: './pdf/topic5/method2.2.pdf', scrollLevel: 0 },
				],
			},
		],
	},
	{
		topic: 'Решение ОДУ',
		methods: [
			{
				topic: 'Метод конечных разностей',
				variety: [
					{
						name: 'Теория',
						url: './pdf/topic6/method1.1.pdf',
						scrollLevel: 0,
					},
					{
						name: 'Пример',
						url: './pdf/topic6/method1.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Явный метод Эйлера',
				variety: [
					{
						name: 'Теория',
						url: './pdf/topic6/method2.1.pdf',
						scrollLevel: 0,
					},
					{
						name: 'Пример',
						url: './pdf/topic6/method2.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Неявный метод Эйлера',
				variety: [
					{
						name: 'Теория',
						url: './pdf/topic6/method3.1.pdf',
						scrollLevel: 0,
					},
					{
						name: 'Пример',
						url: './pdf/topic6/method3.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Эйлера с пересчетом',
				variety: [
					{
						name: 'Теория',
						url: './pdf/topic6/method5.1.pdf',
						scrollLevel: 0,
					},
					{
						name: 'Пример',
						url: './pdf/topic6/method5.2.pdf',
						scrollLevel: 0,
					},
				],
			},
			{
				topic: 'Метод Рунге-Кутта 2 порядка',
				variety: [
					{
						name: 'Теория',
						url: './pdf/topic6/method7.1.pdf',
						scrollLevel: 0,
					},
					{
						name: 'Пример',
						url: './pdf/topic6/method7.2.pdf',
						scrollLevel: 0,
					},
				],
			},
		],
	},
]

export default topics
