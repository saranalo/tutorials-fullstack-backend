import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import testRouter from './routers/testRouter';
import categoryRouter from './routers/category.router';
import mongoose from 'mongoose';
import subCategoryRouter from './routers/subCategory.router';
import itemRouter from './routers/item.router';

const server = express();

const PORT = 8000;

const init = () => {
    server.use(express.json());
    server.use(cors());
    server.use('/test', testRouter)
    server.use('/category', categoryRouter)
    server.use('/sub-category', subCategoryRouter)
    server.use('/item', itemRouter)

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
};

const startServer = () => {
    mongoose.connect(process.env.MONGO_URL, {
        autoIndex: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4
    }, async err => {
        if(err){
            console.log('Could not connect to database');
            return
        }
        console.log('Connected to database');
        init();
    })
};

startServer();