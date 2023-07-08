const connection = require('./connection');

const getAllTasks = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const getTask = async (id) => {
    const [tasks] = await connection.execute(
        'SELECT * FROM tasks WHERE id = ?',
        [id]
    );
    return tasks;
};

const createTask = async (task) => {
    const { title } = task;

    const [createdTask] = await connection.execute(
        'INSERT INTO tasks(title, status, createdDt) VALUES (?, ?, ?)',
        [title, 'pendente', new Date(Date.now()).toUTCString()]
    );

    return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
    const deletedTask = await connection.execute(
        'DELETE FROM tasks WHERE id = ?',
        [id]
    );

    return deletedTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;
    const [updatedTask] = await connection.execute(
        'UPDATE tasks SET title = ?, status = ? WHERE id = ?',
        [title, status, id]
    );

    return updatedTask;
};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
