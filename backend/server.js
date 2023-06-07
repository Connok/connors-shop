import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import conectDB from './config/db.js';
import products from './data/products.js';
const port = process.env.PORT || 5000;
import productRouts from './routes/productRoutes.js';

conectDB(); // conect to MongoDB

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRouts);



app.listen(port, () => console.log(`Server running on port ${port}`));