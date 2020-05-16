const fs = require('fs')
// импортируем функцию для генерации supplier
const genSupplier = require('./tables/supplier')
// импортируем функцию для генерации registration_product
const genRegistrationProduct = require('./tables/registration_product')

let insert = ''

// генерируем supplier (функция возвращает min & max ID)
let { data, minSupplierID, maxSupplierID } = genSupplier()
insert += data

// генерируем registration_product
// (функция принимает min & max ID из supplier), чтобы сгенерировать supplier_id
data = genRegistrationProduct({ minSupplierID, maxSupplierID })
insert += data

// сохраняем в файл data.sql сгенерированный INSERT
// Будьте внимательны! Я никак не экранировал случай, когда в данных
// Например, фамилии приходит ' типо O'konnor.
// В таком случае сгенерированный sql будет кривоват
fs.writeFile('data.sql', insert, (err) => {
	if (err) return console.error(err)
	console.log('File saved')
})
