import express from 'express';
import cors from 'cors';
import testRouter from './routers/testRouter';

const server = express();

const PORT = 8000;

const init = () => {
    //konekt na bazu
    server.use(express.json());
    server.use(cors());

    server.use('/test', testRouter)

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })

};

init();