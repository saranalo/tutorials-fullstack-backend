import express from 'express';
import a from '../controllers/testController';

const testRouter = express.Router();

testRouter.route('/get-example-with-no-id').get(a.testController);
testRouter.route('/get-example/:id').get(a.testController);

export default testRouter;