const mysql = require('mysql');
const fs = require('fs');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'jira'
});

function addTask(task) {
    const due = task.due? `'${task.due}'` : 'NULL';
    const employee = task.employee? `'${task.employee}'` : 'NULL';
    const finished = task.finished? `'${task.finished}'` : 'NULL';
    const sql = `INSERT INTO tasks
    (descr, due, empl, finished)
    VALUES
    ('${task.description}', ${due}, ${employee}, ${finished})`;
    console.log(sql);
    pool.query(sql, (err, data) => {
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
    });
}

function loadTasksFromJson() {
    const rawdata = fs.readFileSync('tasks.json');
    let tasks = JSON.parse(rawdata);
    tasks.forEach(addTask);
}

loadTasksFromJson();