const db = require('./bd')

const salva = db.sequelize.define('testes',{
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    }
})

//salva.sync({force: true})

module.exports = salva
