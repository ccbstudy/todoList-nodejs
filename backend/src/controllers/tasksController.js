const tasksModel = require('../models/tasksModel');

const getAllTasks = async (_request, response) => {
    const tasks = await tasksModel.getAllTasks();

    return response.status(200).json(tasks);
};

const getTask = async (request, response) => {
    const { id } = request.params;

    const tasks = await tasksModel.getTask(id);

    return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
    const { id } = request.params;

    await tasksModel.deleteTask(id);

    return response.status(204).json();
};

const updateTask = async (request, response) => {
    const { id } = request.params;

    await tasksModel.updateTask(id, request.body);

    return response.status(204).json();
};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
