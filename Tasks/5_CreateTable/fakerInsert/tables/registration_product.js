const faker = require('faker')

/**
 * Генерирует данные для таблицы registration_product
 */
function genRegistrationProduct({ minSupplierID, maxSupplierID }) {
	// VALUES добавляемые в таблицу
	const insertValues = []

	const insert = `INSERT INTO registration_product (information, waybill, requisites, supplier_id)
VALUES`

	// registration_product
	for (let i = 0; i < 20; i++) {
		const information = faker.lorem.sentence()
		const waybill = faker.random.number(1000)
		const requisites = faker.company.catchPhrase()
		// supplier_id - это внешний ключ, т.е. он может принимать только значения
		// которые есть в id таблицы supplier
		// по этой причине положили минимальное и максимальное значение в переменную
		// чтобы сгенерировать значение в этом промежутке
		const supplier_id = faker.random.number({
			min: minSupplierID,
			max: maxSupplierID,
		})

		insertValues.push(
			`('${information}', ${waybill}, '${requisites}', ${supplier_id})`,
		)
	}

	// добавляем в общую строку заполнения данных данные для registration_product
	const data = insert + insertValues.join(',\n') + ';\n'

	// если не надо возвращать min и max ID (если на таблицу никто не ссылается)
	// то можно возвращать так
	return data
}

// Экспортируем данную функцию
module.exports = genRegistrationProduct
