const express = require('express');
const userRoutes = require('./routes/users_routes');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

