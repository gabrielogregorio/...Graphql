const db = require('../config/database')

module.exports = {

    Query: {
        // Esperar a função terminar?
        // Tirando dentro do parâmetro o id
        async getUser(_, { id }){   
            return await db('users').where({ id }).first()
        },
        async getUsers(){
            return await db('users')
        }

    },
    Mutation: {
        async createUser(_, {input}) {

            // Promisse, esperar o resultado na result
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await db('users').where({ id }).first()
        }
    }
}



// igual a ==
//module.exports = {
//    Query: {
//        // Esperar a função terminar?
//        // Tirando dentro do parâmetro o id
//        async getUser(_, parameters){   
//        return await db('users').where({ id: parameters.id })
//        }
//    }
//}
//