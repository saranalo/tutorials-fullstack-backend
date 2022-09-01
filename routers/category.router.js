import express from 'express';
import categoryController from '../controllers/category.controller';

const categoryRouter = express.Router();

categoryRouter.route('/').get(categoryController.getAllCategories);
categoryRouter.route('/').post(categoryController.createOneCategory);

categoryRouter.route('/:id').get(categoryController.getOneCategory);
categoryRouter.route('/:id').post(categoryController.updateOneCategory);
categoryRouter.route('/:id').delete(categoryController.deleteOneCategory);


export default categoryRouter;