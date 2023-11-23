const mysql = require("mysql2/promise");
//import mysql from 'mysql2/promise';

async function getData() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "MYSQL$q1w2e3r4.",
        database: "transacciones_sunat"
    });
    
    query = "SELECT Departamento, Provincia, SUM(TRANSACCIONES) FROM Transacciones WHERE Departamento = ? GROUP BY Departamento, Provincia;";

    const [rows, fields] = await connection.execute(query, ['LIMA']);

    return { rows: rows, fields: fields };
}

module.exports = { getData };