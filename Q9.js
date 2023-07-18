const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulated database to store todos
let todos = [];

// GET / - Get all todos
app.get('/', (req, res) => {
  res.json(todos);
});

// POST /add - Create a new todo
app.post('/add', (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }

  const newTodo = {
    id: Date.now(), // Generate a unique ID for the todo
    task,
  };

  todos.push(newTodo);

  res.json({ msg: 'Todo created successfully', data: todos });
});

// PUT /update/:id - Update a todo by ID
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.task = task;

  res.json({ msg: 'Todo updated successfully', data: todos });
});

// DELETE /delete/:id - Delete a todo by ID
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex((todo) => todo.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(index, 1);

  res.json({ msg: 'Todo deleted', data: todos });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
