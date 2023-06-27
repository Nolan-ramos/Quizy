const express = require('express');
const userRoutes = require('./routes/users_routes');
const productsRoutes = require('./routes/products_routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
// Utiliser body-parser pour analyser le corps des requêtes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.use('/api/users', userRoutes);
app.use('/api/products', productsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

