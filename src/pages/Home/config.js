const topics = [
	{
		topic: 'Математические и численные методы решения задач линейной алгебры',
		methods: [
			{
				name: 'Метод Крамера  для решения СЛАУ',
				url: '/linear-systems/kramer',
			},
			{ name: 'Метод Гаусса для решения СЛАУ', url: '/linear-systems/gauss' },
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
		],
	},
	{
		topic: 'Задача обработки экспериментальных данных физических экспериментов',
		methods: [
			{ name: 'Method 2.1', url: '/method2.1' },
			{ name: 'Method 2.2', url: '/method2.2' },
		],
	},
]

export default topics
