const mysql = require('mysql');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'finance'
    }
);

// ____________________________ MYSQL ____________________________

// Function to add new transaction to our database: 

const addUser = (user) => {
    const gender = user.gender ? user.gender : 'NULL';
    const bday = user.bday ? user.bday : 'NULL';

    const sql = `INSERT INTO users (customer, gender, bday, card) VALUES
    ('${user.customer}', '${gender}', '${bday}', '${user.card}')`;

    pool.query(sql, (err, data) => {
        !err ? console.log(data) : console.log(err);
    })
}

addUser({customer: 'Ahmad', gender: 'male', bday: '1997-12-30', card: '3424 2342 4234 4533'});

const addTransaction = (transaction) => {
    const sql = `INSERT INTO transactions (amount, id_s, id_r) VALUES
    (${transaction.amount}, ${transaction.id_s}, ${transaction.id_r})`;

    pool.query(sql, (err, data) => {
        !err ? console.log(data) : console.log('Something got wrong...');
    })
}

// Function to update existing transaction in our database:

const update = (table, item, from, to) => {
    const sql = `UPDATE ${table} SET ${item} = '${to}' WHERE ${item} = '${from}'`;
    pool.query(sql, (err, data) => {
        !err ? console.log(data) : console.log('Something got wrong...');
    })
}

// Function to delete data from our database:

const remove = (table, id) => {
    const sql = `DELETE FROM ${table} WHERE id = ${id}`;
    pool.query(sql, (err, data) => {
        !err ? console.log(data) : console.log('Something got wrong...');
    })
}

// ____________________________ EXPRESS ____________________________

// app.get('/tasks', (req, res) => {
//     pool.query('SELECT * FROM jira', (err, data) => {
//         if (err) {
//             res.status(500);
//         } else {
//             res.json(data);
//         }
//     })
// })

// app.get('/tasks/:employee', (req, res) => {
//     const sql = `SELECT * FROM jira WHERE employee = ${pool.escape(req.params.employee)}`; // for security reasons
//     pool.query(sql, (err, data) => {
//         if (err) {
//             res.status(500).send();
//         } else if (!data.length) {
//             res.status(404).send();
//         } else {
//             res.json(data);
//         }
//     })
// })

app.listen(PORT);