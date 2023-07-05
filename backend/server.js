import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import conectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
//import products from './data/products.js';

import productRouts from './routes/productRoutes.js';
import userRouts from './routes/userRoutes.js';
const port = process.env.PORT || 5000;
conectDB(); // conect to MongoDB

const app = express();

// Body Parcer middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRouts);
app.use('/api/users', userRouts);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));