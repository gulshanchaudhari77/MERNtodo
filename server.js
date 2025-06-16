const express = require('express');
const cors = require('cors');
const app = express();
 const todoRoutes = require('./routes/todosRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

// app.listen(5000, () => console.log('Server running on port 5000'));
app.listen(3306,()=> console.log('server ruuning  port 3306'));