const database = require('../models');

// HTTP response status codes
const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

class TaskController {

  // Lista todas as tasks
  static async getAllTasks(_req, res) {
    try {
      const allTasks = await database.Tasks.findAll();
      return res.status(OK).json(allTasks);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //Lista task por ID
  static async getTaskById(req, res) {
    const { id } = req.params;
    try {
      const task = await database.Tasks.findOne({
        where: {
          id: Number(id)
        }
      });
      if (!task) {
        return res.status(NOT_FOUND).json({ message: `Task com ID ${id} não encontrada!` });
      }
      return res.status(OK).json(task);
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  // Cria uma nova task
  static async createTask(req, res) {
    const newTask = req.body;
    try {
      const taskCreated = await database.Tasks.create(newTask);
      return res.status(CREATED).json(taskCreated);
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  // Atualiza a task por ID
  static async updateTask(req, res) {
    const { id } = req.params;
    const updatedTask = req.body;
    try {
      await database.Tasks.update(updatedTask, {
        where: {
          id: Number(id)
        }
      });
      
      const result = await database.Tasks.findOne({
        where: {
          id: Number(id)
        }
      });

      if (!result) {
        return res.status(NOT_FOUND).json({ message: `Task com ID ${id} não encontrada!` });
      }

      return res.status(OK).json(result);

    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  // Deleta a task por ID
  static async deleteTask(req, res) {
    const { id } = req.params;
    try {
      const deletedTask = await database.Tasks.destroy({
        where: {
          id: Number(id)
        }
      });

      if (!deletedTask) {
        return res.status(NOT_FOUND).json({ message: `Task com ID ${id} não encontrada!` });
      }

      return res.status(OK).json({ message: `Task com id ${id} deletada!`});

    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

}

module.exports = TaskController;
