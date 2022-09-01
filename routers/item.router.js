import express from 'express';
import itemController from '../controllers/item.controller';

const itemRouter = express.Router();

itemRouter.route('/').get(itemController.getAllItems);
itemRouter.route('/').post(itemController.createOneItem);

itemRouter.route('/by-sub-category-id/:id').get(itemController.getItemsBySubcategory);

itemRouter.route('/:id').get(itemController.getOneItem);
itemRouter.route('/:id').post(itemController.updateOneItem);
itemRouter.route('/:id').delete(itemController.deleteOneItem);


export default itemRouter;