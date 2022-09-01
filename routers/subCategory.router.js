import express from 'express';
import subCategoryController from '../controllers/subCategory.controller';

const subCategoryRouter = express.Router();

subCategoryRouter.route('/').get(subCategoryController.getAllSubCategories);
subCategoryRouter.route('/').post(subCategoryController.createOneSubCategory);

subCategoryRouter.route('/by-category-id/:id').get(subCategoryController.getSubcategoryByCategory);

subCategoryRouter.route('/:id').get(subCategoryController.getOneSubCategory);
subCategoryRouter.route('/:id').post(subCategoryController.updateOneSubCategory);
subCategoryRouter.route('/:id').delete(subCategoryController.deleteOneSubCategory);


export default subCategoryRouter;