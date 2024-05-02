const topics = [
	{
		topic: 'Математические и численные методы решения задач линейной алгебры',
		methods: [
			{
				name: 'Метод Крамера  для решения СЛАУ',
				url: '/linear-systems/kramer',
			},
			{
				name: 'Метод Гаусса для решения СЛАУ',
				url: '/linear-systems/gauss',
			},
			{
				name: 'Метод Гаусса-Жордана для решения СЛАУ',
				url: '/linear-systems/gauss-jordan',
			},
			{
				name: 'Матричный метод для решения СЛАУ',
				url: '/linear-systems/matrix',
			},
			{
				name: 'Метод Якоби для решения СЛАУ',
				url: '/linear-systems/yakobi',
			},
			{
				name: 'Метод Гаусса Зейделя для решения СЛАУ',
				url: '/linear-systems/gauss-seidel',
			},
			{
				name: 'Метод релаксации для решения СЛАУ',
				url: '/linear-systems/relaxation',
			},
		],
	},
	{
		topic: 'Решение нелинейных уравнений и их систем',
		methods: [
			{
				name: 'Метод половинного деления',
				url: '/nonlinear-equations/bisection',
			},
			{
				name: 'Метод Хорд',
				url: '/nonlinear-equations/chord',
			},
			{
				name: 'Метод Золотого сечения',
				url: '/nonlinear-equations/golden-section',
			},
			{
				name: 'Метод Риддерса',
				url: '/nonlinear-equations/ridder',
			},
			{
				name: 'Метод Ньютона',
				url: '/nonlinear-equations/newton',
			},
			{
				name: 'Метод Мод. Ньютона',
				url: '/nonlinear-equations/mod-newton',
			},
			{
				name: 'Метод Секущих',
				url: '/nonlinear-equations/secant',
			},
			{
				name: 'Метод Мюллера',
				url: '/nonlinear-equations/mueller',
			},
			{
				name: 'Метод простых итераций',
				url: '/nonlinear-equations/simple-iteration',
			},
		],
	},
	{
		topic: 'Задача обработки экспериментальных данных физических экспериментов',
		methods: [
			{ name: 'полином Лагранжа', url: '/phys-data-analysis/lagrange' },
			{ name: 'Method 2.2', url: '/method2.2' },
		],
	},
	{
		topic: 'Решение ОДУ',
		methods: [{ name: 'ОДУ первого порядка', url: '/dy/first-order' }],
	},
]

export default topics
