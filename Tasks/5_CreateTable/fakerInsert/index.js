const fs = require('fs')
const faker = require('faker')

// Если хотите данные на русском (мб не особо качественно быть), раскомментьте
// faker.locale = 'ru'

let insertTitle = `INSERT INTO supplier (name, city, street, house, phone, email)
VALUES`
const insertValues = []

for (let i = 0; i < 10; i++) {
	const name = faker.company.companyName()
	const city = faker.address.city()
	const street = faker.address.streetName()
	const house = faker.random.number(200)
	const phone = faker.phone.phoneNumber()
	const email = faker.internet.email()

	insertValues.push(
		`('${name}', '${city}', '${street}', '${house}', '${phone}', '${email}')`
	)
}

const finalInsert = insertTitle + insertValues.join(',\n') + ';'

console.log(finalInsert)

// сохраняем в файл data.sql сгенерированный INSERT
// Будьте внимательны! Я никак не экранировал случай, когда в данных
// Например, фамилии приходит ' типо O'konnor.
// В таком случае сгенерированный sql будет кривоват
fs.writeFile('data.sql', finalInsert, (err) => {
	if (err) return console.error(err)
	console.log('File saved')
})
