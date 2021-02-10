const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database: 'ubicaciones',
    password: '1234',
    port: 5432,
})

const getDonadores = (request, response) => {
    pool.query('SELECT * FROM usuarios ORDER BY id ASC', (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })
}

const postDonadores = (request, response) => {
    const { nombre, apellido, email,celular,longitude, latitude } = request.body

    pool.query('INSERT INTO usuarios ( nombre,apellido,email,celular,latitude, longitude ) VALUES ($1, $2, $3,$4,$5,$6)', [nombre, apellido,email,celular,latitude, longitude], (error, results) => {
        if (error) {
            throw error 
        }
        response.status(201).send( `Donador added with ID: ${results.id}` )
    })
}

module.exports = {
    getDonadores,
    postDonadores,
}