import { Component } from "react";
import { getAllTasks, createTask, updateTask, deleteTask } from '../functions';

class Tasks extends Component {
  state = { tasks: [], currentTask: "" };

  async componentDidMount() {
      try {
          const data = await getAllTasks();
          this.setState({ tasks: data });
      } catch (error) {
          console.log(error);
      }
  }

  handleChange = ({ currentTarget: input }) => {
      this.setState({ currentTask: input.value });
  };

  handleSubmit = async (e) => {
      e.preventDefault();
      const originalTasks = this.state.tasks;
      try {
          const task = {
            description: this.state.currentTask
          }
          const data = await createTask(task);
          const tasks = originalTasks;
          tasks.push(data);
          this.setState({ tasks, currentTask: "" });
      } catch (error) {
          console.log(error);
      }
  };

  handleUpdate = async (currentTask) => {
      const originalTasks = this.state.tasks;
      try {
          const tasks = [...originalTasks];
          const index = tasks.findIndex((task) => task.id === currentTask.id);
          tasks[index] = { ...tasks[index] };
          tasks[index].completed = !tasks[index].completed;

          if (tasks[index].completed) {
            const completionDate = new Date();
            const dateFormated = ((completionDate.getFullYear() )) + "-" + ((completionDate.getMonth() + 1)) + "-" + completionDate.getDate();
            tasks[index].completion_date = dateFormated;
          } else {
            tasks[index].completion_date = null;
          }

          await updateTask(currentTask.id, tasks[index]);
          this.setState({ tasks });

      } catch (error) {
          this.setState({ tasks: originalTasks });
          console.log(error);
      }
  };

  handleDelete = async (id) => {
      const originalTasks = this.state.tasks;
      console.log(id)
      try {
          const tasks = originalTasks.filter(
              (task) => task.id !== id
          );
          await deleteTask(id);
          this.setState({ tasks });
      } catch (error) {
          this.setState({ tasks: originalTasks });
          console.log(error);
      }
  };
}

export default Tasks;
