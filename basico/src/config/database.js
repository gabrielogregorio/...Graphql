knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex


// Inserção
//knex('users').insert({
//    name: 'Gabriel',
//    email:'teste@teste.com',
//    password:'teste'
//}).then(data => console.log(data))


//knex('users').select('*').then(resultado => console.log(resultado))

//knex('users').first().then(resultado => console.log(resultado))
//knex('users').where({id:2}).then(resultado => console.log(resultado))
