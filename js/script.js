class Helper {
	figuresList = [
		'Получить сумму',
		'Получить произведение',
		'Получить разность',
		'Получить результат деления',
		'Средние значение',
		'Конвертировать скорость',
		'Площадь круга',
		'Длина окружности',
		'Площадь квадрата',
		'Площадь прямоугольника',
		'Площадь пр. треугольника',
		'Обьем цилиндра',
		'Обьем куба',
		'Длина гипотинузы',
		'Площадь поверхности куба',
		'Обьем параллелепипеда',
		'Площадь поверхности параллелепипеда',
		'Получить факториал числа',
		'Получить число фибоначчи',
		'Получить десятичный логарифм',
	];

	_count = 0;
	_p = 3.14;

	constructor(container) {
		this.container = container;
		this.$wrapper = document.createElement('div');
		this.$display = document.createElement('div');
		this.$input = document.createElement('input');
		this.$arrayButton = document.createElement('button');
		this.$calcButton = document.createElement('button');
		this.$clearButton = document.createElement('button');

		this.$wrapper.classList.add('app__wrapper');
		this.$display.classList.add('app__display');
		this.$input.classList.add('app__input');
		this.$arrayButton.classList.add('app__button-array');
		this.$calcButton.classList.add('app__button-calc');
		this.$clearButton.classList.add('app__button-clear');

		this.$arrayButton.type = 'button';
		this.$calcButton.type = 'button';
		this.$clearButton.type = 'button';
		this.$input.placeholder = 'Введите данные через запятую';

		this.$arrayButton.textContent = 'Выбрать задачу';
		this.$calcButton.textContent = 'Расчитать';
		this.$clearButton.textContent = 'Отчистить';

		this.$wrapper.append(this.$display);
		this.$wrapper.append(this.$input);
		this.$wrapper.append(this.$arrayButton);
		this.$wrapper.append(this.$calcButton);
		this.$wrapper.append(this.$clearButton);
		this.container.append(this.$wrapper);

		this.$arrayButton.addEventListener('click', (e) => {
			e.target.textContent = this.figuresList[this._count % this.figuresList.length];
			if (this.$arrayButton.textContent == 'Получить сумму') this.$input.placeholder = 'Введите значения через запятую';
			if (this.$arrayButton.textContent == 'Получить произведение') this.$input.placeholder = 'Введите значения через запятую';
			if (this.$arrayButton.textContent == 'Получить разность') this.$input.placeholder = 'Введите значения через запятую';
			if (this.$arrayButton.textContent == 'Получить результат деления') this.$input.placeholder = 'Введите значения через запятую';
			if (this.$arrayButton.textContent == 'Средние значение') this.$input.placeholder = 'Введите значения через запятую';
			if (this.$arrayButton.textContent == 'Конвертировать скорость') this.$input.placeholder = 'Введите километры';
			if (this.$arrayButton.textContent == 'Площадь круга') this.$input.placeholder = 'Введите радиус';
			if (this.$arrayButton.textContent == 'Длина окружности') this.$input.placeholder = 'Введите радиус';
			if (this.$arrayButton.textContent == 'Площадь квадрата') this.$input.placeholder = 'Введите длину стороны квадрата';
			if (this.$arrayButton.textContent == 'Площадь прямоугольника') this.$input.placeholder = 'Введите через запятую длину и ширину';
			if (this.$arrayButton.textContent == 'Площадь пр. треугольника') this.$input.placeholder = 'Введите через запятую катет и высоту';
			if (this.$arrayButton.textContent == 'Обьем цилиндра') this.$input.placeholder = 'Введите через запятую радиус основания и высоту';
			if (this.$arrayButton.textContent == 'Обьем куба') this.$input.placeholder = 'Введите длину ребра куба';
			if (this.$arrayButton.textContent == 'Длина гипотинузы') this.$input.placeholder = 'Введите через запятую катеты';
			if (this.$arrayButton.textContent == 'Площадь поверхности куба') this.$input.placeholder = 'Введите длину ребра куба';
			if (this.$arrayButton.textContent == 'Обьем параллелепипеда') this.$input.placeholder = 'Введите через запятую длину ширину и высоту';
			if (this.$arrayButton.textContent == 'Площадь поверхности параллелепипеда') this.$input.placeholder = 'Введите через запятую длину ширину и высоту';
			if (this.$arrayButton.textContent == 'Получить факториал числа') this.$input.placeholder = 'Введите число';
			if (this.$arrayButton.textContent == 'Получить число фибоначчи') this.$input.placeholder = 'Введите число';
			if (this.$arrayButton.textContent == 'Получить десятичный логарифм') this.$input.placeholder = 'Введите число больше нуля';
			this._count += 1;
		});

		this.$calcButton.addEventListener('click', () => {
			this.data = this.$input.value.trim().split`,`.map(Number);
			this.$display.classList.add('show');
			setTimeout(() => {
				this.$display.classList.remove('show');
			}, 3000);
			if (this.$arrayButton.textContent == 'Получить сумму') this.$display.textContent = this.getSum();
			if (this.$arrayButton.textContent == 'Получить произведение') this.$display.textContent = this.getmultiply();
			if (this.$arrayButton.textContent == 'Получить разность') this.$display.textContent = this.getDifference();
			if (this.$arrayButton.textContent == 'Получить результат деления') this.$display.textContent = this.getDivision();
			if (this.$arrayButton.textContent == 'Средние значение') this.$display.textContent = this.getAverage();
			if (this.$arrayButton.textContent == 'Конвертировать скорость') this.$display.textContent = this.getConvertSpeed();
			if (this.$arrayButton.textContent == 'Площадь круга') this.$display.textContent = this.getAreaCircle();
			if (this.$arrayButton.textContent == 'Длина окружности') this.$display.textContent = this.getcircumference();
			if (this.$arrayButton.textContent == 'Площадь квадрата') this.$display.textContent = this.getAreaSquare();
			if (this.$arrayButton.textContent == 'Площадь прямоугольника') this.$display.textContent = this.getAreaRectangle();
			if (this.$arrayButton.textContent == 'Площадь пр. треугольника') this.$display.textContent = this.getAreaRightTriangle();
			if (this.$arrayButton.textContent == 'Обьем цилиндра') this.$display.textContent = this.getCylinderVolume();
			if (this.$arrayButton.textContent == 'Обьем куба') this.$display.textContent = this.getCubeVolume();
			if (this.$arrayButton.textContent == 'Длина гипотинузы') this.$display.textContent = this.getHypotenuse();
			if (this.$arrayButton.textContent == 'Площадь поверхности куба') this.$display.textContent = this.getCubeSurfaceArea();
			if (this.$arrayButton.textContent == 'Обьем параллелепипеда') this.$display.textContent = this.getVolumeOfparallelepiped();
			if (this.$arrayButton.textContent == 'Площадь поверхности параллелепипеда') this.$display.textContent = this.getSurfaceAreaParallelepiped();
			if (this.$arrayButton.textContent == 'Получить факториал числа') this.$display.textContent = this.getFactorial();
			if (this.$arrayButton.textContent == 'Получить число фибоначчи') this.$display.textContent = this.getFibonacci();
			if (this.$arrayButton.textContent == 'Получить десятичный логарифм') this.$display.textContent = this.getLogorifm10();
		});

		this.$clearButton.addEventListener('click', () => {
			this.$display.textContent = '';
			this.$input.value = '';
		});
	}

	getSum() {
		return `Сумма: ${this.data.reduce((a, e) => a + e, 0)}`;
	}

	getmultiply() {
		return `Произведение: ${this.data.reduce((a, e) => a * e)}`;
	}

	getDifference() {
		return `Результат вычитания чисел ${this.data[1]} из ${this.data[0]} >>> ${this.data[0] - this.data[1]}`;
	}

	getDivision() {
		return `Результат деления ${this.data[0]} на ${this.data[1]} >>> ${this.data[0] / this.data[1]}`;
	}

	getAverage() {
		return `Средние значение: ${(this.data.reduce((a, e) => a + e / this.data.length, 0)).toFixed(1)}`;
	}

	getConvertSpeed() {
		return `Скорость: ${(this.data[0] * 1000 / 3600).toFixed(1)} m/s`;
	}

	getAreaCircle() {
		return `Площадь круга: ${(this._p * this.data[0] ** 2).toFixed(1)}`;
	}

	getcircumference() {
		return `Длина окружности: ${(2 * this._p * this.data[0]).toFixed(2)}`;
	}

	getAreaSquare() {
		return `Площадь квадрата: ${(this.data[0] ** 2).toFixed(1)}`;
	}

	getAreaRectangle() {
		return `Площадь прямоугольника: ${(this.data[0] * this.data[1]).toFixed(1)}`;
	}

	getAreaRightTriangle() {
		return `Площадь пр. треугольника: ${((this.data[0] * this.data[1]) / 2).toFixed(2)}`;
	}

	getCylinderVolume() {
		return `Обьем цилиндра: ${((this._p * this.data[0] ** 2) * this.data[1]).toFixed(2)}`;
	}

	getCubeVolume() {
		return `Обьем куба: ${(this.data[0] ** 3).toFixed(1)}`;
	}

	getHypotenuse() {
		return `Длина гипотинузы: ${(Math.sqrt(this.data[0] ** 2 + this.data[1] ** 2)).toFixed(1)}`;
	}

	getCubeSurfaceArea() {
		return `Площадь поверхности куба: ${(6 * this.data[0] ** 2).toFixed(1)}`;
	}
	getVolumeOfparallelepiped() {
		return `Обьем параллелепипеда: ${(this.data[0] * this.data[1] * this.data[2]).toFixed(1)}`;
	}

	getSurfaceAreaParallelepiped() {
		return `Площадь поверхности параллелепипеда: ${(2 * (this.data[0] * this.data[1] + this.data[1] * this.data[2] + this.data[0] * this.data[2])).toFixed(2)}`;
	}

	getFactorial() {
		if (this.data[0] < 0) return this.$display.textContent = 'factorial вызван с неверным значением';
		this.res = 1;
		for (let i = 1; i <= this.data[0]; i++) {
			this.res *= i;
		}
		return `Факториал числа ${this.data[0]} >>> ${this.res}`;
	}

	getFibonacci() {
		let prev = 0, next = 1;
		for (let i = 0; i < this.data[0]; i++) {
			next = prev + next;
			prev = next - prev;
		}
		return `Число фибоначчи >>> ${prev}`;
	}
	getLogorifm10() {
		if (this.data[0] < 0) return this.$display.textContent = 'Введите значение больше 0';
		return `Логорифм от ${this.data[0]} >>> ${Math.log10(this.data[0])}`;
	}
}
const newHelper = new Helper(document.getElementById('app'));

