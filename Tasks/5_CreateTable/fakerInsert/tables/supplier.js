const faker = require('faker')

/**
 * Генерирует данные для таблицы supplier
 */
function genSupplier() {
	// VALUES добавляемые в таблицу
	const insertValues = []

	// Заполнение таблицы supplier
	let supplierInsert = `INSERT INTO supplier (name, city, street, house, phone, email)
VALUES`

	// генерируемые id от 1 до 10
	// используем эти значения для дальнейшей генерации
	// внешних ключей в таблицах, связанных с supplier
	const minIDSupplier = 1
	const maxIDSupplier = 10

	for (let i = minIDSupplier - 1; i < maxIDSupplier; i++) {
		const name = faker.company.companyName()
		const city = faker.address.city()
		const street = faker.address.streetName()
		const house = faker.random.number(200)
		const phone = faker.phone.phoneNumber()
		const email = faker.internet.email()
		// если нужна дата, то нужно преобразовать в ISO тип
		// const date = faker.date.past(10).toISOString()

		// не используем кавычки (''), когда добавляется число
		insertValues.push(
			`('${name}', '${city}', '${street}', ${house}, '${phone}', '${email}')`,
		)
	}

	// В insert - строка сгенерированных добавленных значений
	const data = supplierInsert + insertValues.join(',\n') + ';\n\n'

	// функция возвращает сгенерированные данные (insert)
	// минимальное значение id и максимальное
	return { data, minSupplierID: minIDSupplier, maxSupplierID: maxIDSupplier }
}

// Экспортируем данную функцию
module.exports = genSupplier
