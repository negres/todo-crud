import { Button, Checkbox, Container, Paper, TextField } from '@material-ui/core';
import React from 'react';
import Tasks from './components/Tasks';
import './App.css';

class App extends Tasks {
  state = { tasks: [], currentTask: "" };
  render() {
      const { tasks } = this.state;
      return (
          <div className="app">
            <div className="heading">
              <h1>ToDo App</h1>
            </div>
            <form
              onSubmit={this.handleSubmit}
              className="form-container"
            >
              <TextField
                style={{ paddingRight: '10px' }}
                className="textfield-task"
                variant="outlined"
                size="small"
                value={this.state.currentTask}
                required={true}
                onChange={this.handleChange}
                placeholder="Adicione uma nova tarefa"
              />
              <Button
                color="primary"
                variant="outlined"
                type="submit"
              >
                Adicionar
              </Button>
            </form>
            <div className="tasks-list-container">
              {tasks.map((task) => (
                <Container maxWidth="sm">
                  <Paper
                    key={task.id}
                    className="task-container"
                    variant="outlined"
                  >
                    <Checkbox
                      checked={task.completed}
                      onClick={() => this.handleUpdate(task)}
                      color="primary"
                    />
                    <div>
                      <p>{task.description}</p>
                    </div>
                    <Button
                      onClick={() => this.handleDelete(task.id)}
                      color="secondary"
                    >
                      APAGAR
                    </Button>
                  </Paper>
                  {!task.completion_date 
                    ? '' 
                    : <p>Data de conclusão da tarefa: {task.completion_date}</p>}
                </Container>
              ))}
            </div>
          </div>
      );
  }
}

export default App;